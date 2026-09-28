/**
 * Living chat-kernel contract — Stage 321.
 * Session paste 2026-09-28 13:06 CDT reconfirmed four base cases (infinity|hamiltonian|triangular|torus).
 * Stage 314 extras (klein, hopf, figure8, trefoil, mobius) remain in the living switch only.
 * Stage 315+: this.phi += CHAT_KERNEL_PHI_WEAVE * toroidalWeave; finite-guard x/y/z before lerp.
 * Stage 319: uniform existence guards; gravity-scaled lerp alpha on living path.
 * Stage 321: helpers live on this module so Node.js / main.js imports resolve;
 *            pair-wise blend (blendFrom/blendTo) stays off the session switch.
 * Session paste still allocates Vector3 (documented). Living path reuses _target.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 */

export const STAGE = 321;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const GPU_AUTO_THRESHOLD = 1024;
export const INSTANCE_OFFSET_MIN = 4096;
export const NODE_CAP = 16384;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
export const CHAT_KERNEL_PASTE_HASH = 'beec41f1';

export const CHAT_KERNEL_SESSION_SOURCE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    // Evaluate the target geometric state assigned by the LLM
    switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
            
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
            
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;

        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }

    // Smoothly interpolate current position to the new geometric state target
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function fnv1a32Hex(source) {
  let h = 0x811c9dc5;
  const s = source == null ? '' : String(source);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

export function hashChatKernelSource(source) {
  return fnv1a32Hex(source);
}

function caseInSource(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function matchSessionPaste(source) {
  const hash = fnv1a32Hex(source);
  return {
    stage: STAGE,
    hash,
    expected: CHAT_KERNEL_SESSION_HASH,
    match: hash === CHAT_KERNEL_SESSION_HASH,
    kleinInSession: caseInSource(source, 'klein'),
    hopfInSession: caseInSource(source, 'hopf'),
    figure8InSession: caseInSource(source, 'figure8'),
    trefoilInSession: caseInSource(source, 'trefoil'),
    mobiusInSession: caseInSource(source, 'mobius'),
  };
}

export function shouldUseGpuPath(count) {
  return count > GPU_AUTO_THRESHOLD;
}

export function shouldSkipCpuInstanceMatrix(count) {
  return count >= INSTANCE_OFFSET_MIN && count <= NODE_CAP;
}

/** Gravity-scaled lerp used by CPU nodes and GPU follow-up. */
export function chatKernelLerpAlpha(pull = 1, baseLerp = CHAT_KERNEL_LERP) {
  const p = Number.isFinite(pull) ? pull : 1;
  const b = Number.isFinite(baseLerp) ? baseLerp : CHAT_KERNEL_LERP;
  return Math.min(0.12, Math.max(0.02, b * Math.max(0.4, p)));
}

export function chatKernelColor(idx = 0, pull = 1, t = 0) {
  const hue = ((idx / 24) + pull * 0.08 + t * 0.01) % 1;
  return { h: hue, s: 0.7, l: 0.45 + Math.min(0.3, pull * 0.08) };
}

export function advanceChatKernelAngles({
  theta = 0,
  phi = 0,
  idx = 0,
  gravityPull = 1,
  toroidalWeave = 1,
} = {}) {
  return {
    theta: theta + (CHAT_KERNEL_THETA_BASE + idx * CHAT_KERNEL_THETA_IDX) * gravityPull,
    phi: phi + CHAT_KERNEL_PHI_WEAVE * toroidalWeave,
  };
}

export function confirmSessionKernel() {
  return {
    stage: STAGE,
    sessionHash: CHAT_KERNEL_SESSION_HASH,
    livingHash: CHAT_KERNEL_SOURCE_HASH,
    pinned: true,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    runtimeExtras: ['klein', 'hopf', 'figure8', 'trefoil', 'mobius', 'blend'],
    gpuAutoThreshold: GPU_AUTO_THRESHOLD,
    instanceOffsetMin: INSTANCE_OFFSET_MIN,
    nodeCap: NODE_CAP,
    note: 'Session paste held beec41f1. Helpers exported from chatKernel.js. Pair-wise blend is runtime-only.',
  };
}
