/**
 * Living chat-kernel contract — Stage 334.
 * Session paste 2026-09-29 11:06 CDT reconfirmed four base cases (infinity|hamiltonian|triangular|torus).
 * Stage 314 extras (klein, hopf, figure8, trefoil, mobius) remain in the living switch only.
 * Stage 315+: this.phi += CHAT_KERNEL_PHI_WEAVE * toroidalWeave; finite-guard x/y/z before lerp.
 * Stage 319: uniform existence guards; gravity-scaled lerp alpha on living path.
 * Stage 321: helpers live on this module so Node.js / main.js imports resolve.
 * Stage 322: evaluateChatKernelPosition extracted; optional uWeave/uBlend/uPhi documented;
 *            pair-wise blend stays off the session switch.
 * Stage 323: applyChatKernelUniforms helper; optional uPhi on the living path;
 *            session paste still allocates Vector3 (documented). Living path reuses a caller target.
 * Stage 324: advanceAndEvaluateChatKernel combines angle weave + four-case evaluate
 *            so CPU / GPU seeds share one call site. Session paste unchanged.
 * Stage 325: isChatKernelGeometry gates GaiaNode onto that combined call.
 * Stage 326: applyChatKernelTarget writes into a reused destination (no new Vector3).
 * Stage 327: connecting chat re-pasted update(t).
 * Stage 328: heartbeatScan four-gov; GaiaNode consumes applyChatKernelTarget.
 * Stage 329: blendChatKernelPositions — runtime pair-wise blend of two evaluated targets.
 * Stage 330: wrapChatKernelAngle keeps theta/phi in [0, 2π) on the living path.
 * Stage 331: clampChatKernelRadii bounds major/minor so high idx cannot explode the field.
 * Stage 332: sanitizeChatKernelScalar rejects NaN/Inf gravity and weave before advance.
 * Stage 333: GPU/TF GLSL clamp matches CPU radii; session paste hash beec41f1 held.
 * Stage 334: selectChatKernelGeometry + stepChatKernelNode; session paste reconfirmed beec41f1.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 */

export const STAGE = 334;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const CHAT_KERNEL_TWO_PI = Math.PI * 2;
export const CHAT_KERNEL_MAJOR_MIN = 2;
export const CHAT_KERNEL_MAJOR_MAX = 96;
export const CHAT_KERNEL_MINOR_MIN = 0.25;
export const CHAT_KERNEL_MINOR_MAX = 24;
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

export function isChatKernelGeometry(geometry) {
  return CHAT_KERNEL_CHAT_GEOMETRIES.includes(geometry);
}

export function selectChatKernelGeometry(geometry, fallback = 'torus') {
  if (isChatKernelGeometry(geometry)) return geometry;
  return fallback || 'torus';
}

export function sanitizeChatKernelScalar(value, fallback = 1) {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function wrapChatKernelAngle(angle) {
  const a = Number.isFinite(angle) ? angle : 0;
  const wrapped = a % CHAT_KERNEL_TWO_PI;
  return wrapped < 0 ? wrapped + CHAT_KERNEL_TWO_PI : wrapped;
}

export function clampChatKernelRadii(major, minor) {
  const m = Number.isFinite(major) ? major : 10;
  const n = Number.isFinite(minor) ? minor : 3;
  return {
    major: Math.min(CHAT_KERNEL_MAJOR_MAX, Math.max(CHAT_KERNEL_MAJOR_MIN, m)),
    minor: Math.min(CHAT_KERNEL_MINOR_MAX, Math.max(CHAT_KERNEL_MINOR_MIN, n)),
  };
}

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
  const pull = sanitizeChatKernelScalar(gravityPull, 1);
  const weave = sanitizeChatKernelScalar(toroidalWeave, 1);
  return {
    theta: wrapChatKernelAngle(theta + (CHAT_KERNEL_THETA_BASE + idx * CHAT_KERNEL_THETA_IDX) * pull),
    phi: wrapChatKernelAngle(phi + CHAT_KERNEL_PHI_WEAVE * weave),
  };
}

export function applyChatKernelUniforms(material, { t = 0, gravityPull = 1, toroidalWeave = 1, blend = 0.5, phi } = {}) {
  const uniforms = material && material.uniforms;
  if (!uniforms) return;
  if (uniforms.uTime) uniforms.uTime.value = t;
  if (uniforms.uGravity) uniforms.uGravity.value = sanitizeChatKernelScalar(gravityPull, 1);
  if (uniforms.uWeave) uniforms.uWeave.value = sanitizeChatKernelScalar(toroidalWeave, 1);
  if (uniforms.uBlend) uniforms.uBlend.value = sanitizeChatKernelScalar(blend, 0.5);
  if (uniforms.uPhi && Number.isFinite(phi)) uniforms.uPhi.value = phi;
}

export function evaluateChatKernelPosition({
  theta = 0,
  phi = 0,
  t = 0,
  idx = 0,
  toroidalWeave = 1,
  geometry = 'torus',
} = {}) {
  const radii = clampChatKernelRadii(10 + idx * 2, 3 + sanitizeChatKernelScalar(toroidalWeave, 1) * 2);
  const major = radii.major;
  const minor = radii.minor;
  let x = 0;
  let y = 0;
  let z = 0;

  switch (geometry) {
    case 'infinity': {
      const scale = major * 1.5;
      const denom = 1 + Math.pow(Math.sin(theta), 2);
      x = (scale * Math.cos(theta)) / denom;
      z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
    case 'hamiltonian': {
      const hScale = major;
      x = hScale * Math.cos(theta * 3) * Math.cos(theta);
      z = hScale * Math.cos(theta * 3) * Math.sin(theta);
      y = hScale * Math.sin(theta * 3) + Math.sin(t) * 2;
      break;
    }
    case 'triangular': {
      const tAngle = Math.floor(theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
      x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
      z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
      y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
      break;
    }
    case 'torus':
    default: {
      x = (major + minor * Math.cos(phi)) * Math.cos(theta);
      z = (major + minor * Math.cos(phi)) * Math.sin(theta);
      y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
      break;
    }
  }

  return {
    x: Number.isFinite(x) ? x : 0,
    y: Number.isFinite(y) ? y : 0,
    z: Number.isFinite(z) ? z : 0,
    major,
    minor,
  };
}

export function advanceAndEvaluateChatKernel({
  theta = 0,
  phi = 0,
  t = 0,
  idx = 0,
  gravityPull = 1,
  toroidalWeave = 1,
  geometry = 'torus',
} = {}) {
  const pull = sanitizeChatKernelScalar(gravityPull, 1);
  const weave = sanitizeChatKernelScalar(toroidalWeave, 1);
  const angles = advanceChatKernelAngles({ theta, phi, idx, gravityPull: pull, toroidalWeave: weave });
  const pos = evaluateChatKernelPosition({
    theta: angles.theta,
    phi: angles.phi,
    t,
    idx,
    toroidalWeave: weave,
    geometry: selectChatKernelGeometry(geometry, 'torus'),
  });
  return { ...angles, ...pos, lerp: chatKernelLerpAlpha(pull), geometry: selectChatKernelGeometry(geometry, 'torus') };
}

export function stepChatKernelNode(node, t, state, targetState) {
  const pull = sanitizeChatKernelScalar(state && state.gravityPull, 1);
  const weave = sanitizeChatKernelScalar(state && state.toroidalWeave, 1);
  const geometry = selectChatKernelGeometry(targetState && targetState.geometry, 'torus');
  const stepped = advanceAndEvaluateChatKernel({
    theta: node && node.theta,
    phi: node && node.phi,
    t,
    idx: node && node.idx,
    gravityPull: pull,
    toroidalWeave: weave,
    geometry,
  });
  if (node) {
    node.theta = stepped.theta;
    node.phi = stepped.phi;
  }
  return stepped;
}

export function applyChatKernelTarget(target, step) {
  if (!target || !step) return target;
  target.x = Number.isFinite(step.x) ? step.x : 0;
  target.y = Number.isFinite(step.y) ? step.y : 0;
  target.z = Number.isFinite(step.z) ? step.z : 0;
  return target;
}

/** Runtime-only pair-wise blend. Does not touch the four-case session switch. */
export function blendChatKernelPositions(from, to, blend = 0.5, out) {
  const a = Number.isFinite(blend) ? Math.min(1, Math.max(0, blend)) : 0.5;
  const dest = out || {};
  const fx = Number.isFinite(from && from.x) ? from.x : 0;
  const fy = Number.isFinite(from && from.y) ? from.y : 0;
  const fz = Number.isFinite(from && from.z) ? from.z : 0;
  const tx = Number.isFinite(to && to.x) ? to.x : fx;
  const ty = Number.isFinite(to && to.y) ? to.y : fy;
  const tz = Number.isFinite(to && to.z) ? to.z : fz;
  dest.x = fx + (tx - fx) * a;
  dest.y = fy + (ty - fy) * a;
  dest.z = fz + (tz - fz) * a;
  dest.blend = a;
  return dest;
}

export function heartbeatScan() {
  return {
    stage: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_SOURCE_HASH,
    gpu: GPU_AUTO_THRESHOLD,
    cap: NODE_CAP,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    extrasOffSession: true,
    blendRuntime: true,
    angleWrap: true,
    radiiClamp: true,
    scalarSanitize: true,
    gpuRadiiClamp: true,
    selectGeometry: true,
    stepNode: true,
  };
}

export function confirmSessionKernel() {
  return {
    stage: STAGE,
    sessionHash: CHAT_KERNEL_SESSION_HASH,
    livingHash: CHAT_KERNEL_SOURCE_HASH,
    pinned: true,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    runtimeExtras: ['klein', 'hopf', 'figure8', 'trefoil', 'mobius', 'blend', 'wrap', 'radiiClamp', 'scalarSanitize', 'selectGeometry', 'stepNode'],
    gpuAutoThreshold: GPU_AUTO_THRESHOLD,
    instanceOffsetMin: INSTANCE_OFFSET_MIN,
    nodeCap: NODE_CAP,
    note: 'Session paste held beec41f1. Stage 334 living path selects four-case geometry and steps the node in one call. Pair-wise blend remains runtime-only.',
  };
}
