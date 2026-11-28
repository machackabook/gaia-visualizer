/** Stage 1413 — living enhanced geometric field kernel. Promotes catalogued improvements outside the pinned paste. Paste not rewritten. No secrets. */
import * as THREE from 'three';

export const LIVING_ENHANCED_STAGE = 1413;
export const LIVING_ENHANCED_SESSION_HASH = 'beec41f1';
export const LIVING_ENHANCED_LIVING_HASH = '7cd81012';

// Pinned paste remains untouched. This living path promotes:
// - Vector3 reuse
// - Adaptive lerp alpha
// - External phi binding

export function createLivingUpdate(instance) {
  if (!instance._targetVec) {
    instance._targetVec = new THREE.Vector3();
  }
  if (typeof instance.phi !== 'number') {
    instance.phi = 0;
  }

  return function livingUpdate(t, state, targetState) {
    // External phi bind (catalogued)
    instance.phi += 0.007 * Math.max(0.5, state.toroidalWeave || 0);

    instance.material.uniforms.uTime.value = t;
    instance.material.uniforms.uGravity.value = state.gravityPull;

    instance.theta += (0.01 + instance.idx * 0.002) * state.gravityPull;

    let x, y, z;
    let major = 10 + (instance.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    switch (targetState.geometry) {
      case 'infinity':
        const scale = major * 1.5;
        const denom = 1 + Math.pow(Math.sin(instance.theta), 2);
        x = (scale * Math.cos(instance.theta)) / denom;
        z = (scale * Math.sin(instance.theta) * Math.cos(instance.theta)) / denom;
        y = minor * Math.sin(instance.phi) * Math.sin(t * 0.5 + instance.idx);
        break;
      case 'hamiltonian':
        const hScale = major;
        x = hScale * Math.cos(instance.theta * 3) * Math.cos(instance.theta);
        z = hScale * Math.cos(instance.theta * 3) * Math.sin(instance.theta);
        y = hScale * Math.sin(instance.theta * 3) + (Math.sin(t) * 2);
        break;
      case 'triangular':
        const tAngle = (Math.floor(instance.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
        x = major * Math.cos(tAngle) + minor * Math.cos(instance.theta * 5);
        z = major * Math.sin(tAngle) + minor * Math.sin(instance.theta * 5);
        y = (instance.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
        break;
      case 'torus':
      default:
        x = (major + minor * Math.cos(instance.phi)) * Math.cos(instance.theta);
        z = (major + minor * Math.cos(instance.phi)) * Math.sin(instance.theta);
        y = minor * Math.sin(instance.phi) * Math.sin(t * 0.5 + instance.idx);
        break;
    }

    // Adaptive lerp (catalogued)
    const alpha = Math.max(0.02, Math.min(0.12, 0.05 * Math.max(0.4, state.gravityPull || 1)));

    // Vector3 reuse (catalogued)
    instance._targetVec.set(x, y, z);
    instance.mesh.position.lerp(instance._targetVec, alpha);
  };
}

export function noteLivingEnhanced() {
  return {
    stage: LIVING_ENHANCED_STAGE,
    session: LIVING_ENHANCED_SESSION_HASH,
    living: LIVING_ENHANCED_LIVING_HASH,
    promotions: ['vector3-reuse', 'adaptive-lerp', 'phi-bind'],
    pasteRewritten: false,
    secrets: false,
    note: 'Living enhanced kernel promotes catalogued improvements from STAGE-1413. Pinned paste remains untouched.',
  };
}
