import * as THREE from 'three';
import { evaluateGeometry } from './geometry.js';
import { CHAT_KERNEL_PHI_WEAVE, CHAT_KERNEL_THETA_BASE, CHAT_KERNEL_THETA_IDX, chatKernelLerpAlpha } from './chatKernel.js';

const _target = new THREE.Vector3();
const _color = new THREE.Color();

export class GaiaNode {
  constructor({ idx, mesh, material, dummy }) {
    this.idx = idx;
    this.mesh = mesh || dummy;
    this.dummy = dummy || null;
    this.material = material;
    this.theta = Math.random() * Math.PI * 2;
    this.phi = Math.random() * Math.PI * 2;
    this.baseHue = idx / 24;
    this.position = new THREE.Vector3();
  }

  /**
   * Chat kernel reference (living update(t) contract, stage 281):
   *   uniforms uTime / uGravity / optional uWeave
   *   theta += (0.01 + idx * 0.002) * gravityPull
   *   evaluate targetState.geometry (infinity | hamiltonian | triangular | torus)
   * Runtime extras (still live, not in session switch):
   *   phi   += 0.007 * toroidalWeave
   *   klein / hopf / figure8 / trefoil on evaluateGeometry / evaluateChatKernel
   *   mesh.position.lerp(target, alpha) — chatKernelLerpAlpha(pull, baseLerp)
   *   never allocate inside the loop
   * Stage 62: GPU TF mix(aPrevPos, target, 0.05) matches this CPU lerp baseline.
   * Stage 64: GPU TF reseeds aPrevPos when geometry changes.
   * Stage 107+: CPU path writes uWeave when the shader exposes it.
   * Stage 154+: evaluateChatKernelInto zeros non-finite x/y/z.
   * Stage 160: GPU/TF auto path at count > 1024.
   * Stage 273/279/281: lerp rate tracks gravityPull so high-pull incursions snap, low-pull weaves drift.
   */
  update(t, state, targetState) {
    const pull = Number.isFinite(state?.gravityPull) ? state.gravityPull : 1;
    const weave = Number.isFinite(state?.toroidalWeave) ? state.toroidalWeave : 1;

    if (this.material?.uniforms) {
      if (this.material.uniforms.uTime) this.material.uniforms.uTime.value = t;
      if (this.material.uniforms.uGravity) this.material.uniforms.uGravity.value = pull;
      if (this.material.uniforms.uWeave) this.material.uniforms.uWeave.value = weave;
      if (this.material.uniforms.uColor) {
        const hue = (this.baseHue + pull * 0.08 + t * 0.01) % 1;
        _color.setHSL(hue, 0.7, 0.45 + Math.min(0.3, pull * 0.08));
        this.material.uniforms.uColor.value.lerp(_color, 0.08);
      }
    }

    this.theta += (CHAT_KERNEL_THETA_BASE + this.idx * CHAT_KERNEL_THETA_IDX) * pull;
    this.phi += CHAT_KERNEL_PHI_WEAVE * weave;

    const { x, y, z } = evaluateGeometry({
      theta: this.theta,
      phi: this.phi,
      t,
      idx: this.idx,
      gravityPull: pull,
      toroidalWeave: weave,
      geometry: targetState?.geometry || 'torus',
      blend: state.blend ?? 0.5,
    });

    _target.set(
      Number.isFinite(x) ? x : 0,
      Number.isFinite(y) ? y : 0,
      Number.isFinite(z) ? z : 0,
    );
    const baseLerp = Number.isFinite(state?.lerp) ? state.lerp : 0.05;
    const alpha = chatKernelLerpAlpha(pull, baseLerp);
    const scale = 0.85 + Math.min(0.55, pull * 0.18);
    if (this.dummy) {
      this.dummy.position.lerp(_target, alpha);
      this.dummy.scale.setScalar(scale);
      this.dummy.updateMatrix();
      this.position.copy(this.dummy.position);
    } else if (this.mesh?.position) {
      this.mesh.position.lerp(_target, alpha);
      this.mesh.scale.setScalar(scale);
      this.position.copy(this.mesh.position);
    } else {
      this.position.lerp(_target, alpha);
    }

    if (this.material?.color) {
      const hue = (this.baseHue + pull * 0.08 + t * 0.01) % 1;
      _color.setHSL(hue, 0.7, 0.45 + Math.min(0.3, pull * 0.08));
      this.material.color.lerp(_color, 0.08);
      if (this.material.emissive) {
        this.material.emissive.copy(_color).multiplyScalar(0.25 * pull);
      }
    }
  }
}
