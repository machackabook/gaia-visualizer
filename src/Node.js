import * as THREE from 'three';
import { evaluateGeometry } from './geometry.js';
import { CHAT_KERNEL_PHI_WEAVE, CHAT_KERNEL_THETA_BASE, CHAT_KERNEL_THETA_IDX } from './chatKernel.js';

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
   * Chat kernel reference (living update(t) contract, stage 64):
   *   uniforms uTime / uGravity
   *   theta += (0.01 + idx * 0.002) * gravityPull
   *   evaluate targetState.geometry (infinity | hamiltonian | triangular | torus)
   * Runtime extras (stage 28, still live):
   *   phi   += 0.007 * toroidalWeave
   *   klein remains first-class on evaluateGeometry / evaluateChatKernel
   *   mesh.position.lerp(target, 0.05) — never allocate inside the loop
   * Stage 62: GPU TF mix(aPrevPos, target, 0.05) matches this CPU lerp.
   * Stage 64: GPU TF reseeds aPrevPos when geometry changes.
   */
  update(t, state, targetState) {
    if (this.material?.uniforms) {
      if (this.material.uniforms.uTime) this.material.uniforms.uTime.value = t;
      if (this.material.uniforms.uGravity) this.material.uniforms.uGravity.value = state.gravityPull;
      if (this.material.uniforms.uColor) {
        const hue = (this.baseHue + state.gravityPull * 0.08 + t * 0.01) % 1;
        _color.setHSL(hue, 0.7, 0.45 + Math.min(0.3, state.gravityPull * 0.08));
        this.material.uniforms.uColor.value.lerp(_color, 0.08);
      }
    }

    const pull = state.gravityPull ?? 1;
    const weave = state.toroidalWeave ?? 1;
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

    _target.set(x, y, z);
    const alpha = state.lerp ?? 0.05;
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
