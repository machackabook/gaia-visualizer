import * as THREE from 'three';
import { evaluateGeometry } from './geometry.js';
import {
  CHAT_KERNEL_PHI_WEAVE,
  CHAT_KERNEL_THETA_BASE,
  CHAT_KERNEL_THETA_IDX,
  applyChatKernelUniforms,
  applyChatKernelTarget,
  advanceAndEvaluateChatKernel,
  chatKernelLerpAlpha,
  isChatKernelGeometry,
} from './chatKernel.js';

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
   * Chat kernel reference (living update(t) contract, stage 331):
   *   uniforms uTime / uGravity / optional uWeave / optional uBlend / optional uPhi
   *   theta += (0.01 + idx * 0.002) * gravityPull
   *   evaluate targetState.geometry (infinity | hamiltonian | triangular | torus)
   * Runtime extras (still live, not in session switch):
   *   phi   += 0.007 * toroidalWeave
   *   wrapChatKernelAngle keeps theta/phi in [0, 2π)
   *   clampChatKernelRadii bounds major/minor
   *   klein / hopf / figure8 / trefoil on evaluateGeometry
   *   mesh.position.lerp(target, alpha) — chatKernelLerpAlpha(pull, baseLerp)
   *   applyChatKernelTarget writes the reused _target
   *   never allocate inside the loop
   */
  update(t, state, targetState) {
    const pull = Number.isFinite(state?.gravityPull) ? state.gravityPull : 1;
    const weave = Number.isFinite(state?.toroidalWeave) ? state.toroidalWeave : 1;
    const blend = Number.isFinite(state?.blend) ? state.blend : 0.5;
    const geometry = targetState?.geometry || 'torus';

    applyChatKernelUniforms(this.material, {
      t,
      gravityPull: pull,
      toroidalWeave: weave,
      blend,
      phi: this.phi,
    });

    if (this.material?.uniforms?.uColor) {
      const hue = (this.baseHue + pull * 0.08 + t * 0.01) % 1;
      _color.setHSL(hue, 0.7, 0.45 + Math.min(0.3, pull * 0.08));
      this.material.uniforms.uColor.value.lerp(_color, 0.08);
    }

    let x;
    let y;
    let z;
    if (isChatKernelGeometry(geometry)) {
      const stepped = advanceAndEvaluateChatKernel({
        theta: this.theta,
        phi: this.phi,
        t,
        idx: this.idx,
        gravityPull: pull,
        toroidalWeave: weave,
        geometry,
      });
      this.theta = stepped.theta;
      this.phi = stepped.phi;
      x = stepped.x;
      y = stepped.y;
      z = stepped.z;
    } else {
      this.theta += (CHAT_KERNEL_THETA_BASE + this.idx * CHAT_KERNEL_THETA_IDX) * pull;
      this.phi += CHAT_KERNEL_PHI_WEAVE * weave;
      const extra = evaluateGeometry({
        theta: this.theta,
        phi: this.phi,
        t,
        idx: this.idx,
        gravityPull: pull,
        toroidalWeave: weave,
        geometry,
        blend,
        blendFrom: targetState?.blendFrom,
        blendTo: targetState?.blendTo,
      });
      x = extra.x;
      y = extra.y;
      z = extra.z;
    }

    applyChatKernelTarget(_target, { x, y, z });
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
