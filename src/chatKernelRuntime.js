/** Stage 314 runtime helpers for the living chat kernel. Session paste lives in chatKernel.js. */
export { STAGE, CHAT_KERNEL_LERP, CHAT_KERNEL_THETA_BASE, CHAT_KERNEL_THETA_IDX, CHAT_KERNEL_PHI_WEAVE, GPU_AUTO_THRESHOLD, INSTANCE_OFFSET_MIN, NODE_CAP, CHAT_KERNEL_CHAT_GEOMETRIES, CHAT_KERNEL_GEOMETRIES, CHAT_KERNEL_SOURCE_HASH, CHAT_KERNEL_SESSION_HASH, CHAT_KERNEL_SESSION_SOURCE } from './chatKernel.js';

export function fnv1a32Hex(source) {
  let h = 0x811c9dc5;
  for (let i = 0; i < source.length; i++) {
    h ^= source.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

export function hashChatKernelSource(source) {
  return fnv1a32Hex(source);
}

function caseInSource(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source);
}

export function matchSessionPaste(source) {
  return { stage: 314, hash: fnv1a32Hex(source || ''), expected: '67185cf3' };
}

export function advanceChatKernelAngles({ theta = 0, phi = 0, idx = 0, gravityPull = 1, toroidalWeave = 1 } = {}) {
  return {
    theta: theta + (0.01 + idx * 0.002) * gravityPull,
    phi: phi + 0.007 * toroidalWeave,
  };
}

export function chatKernelLerpAlpha(pull = 1, baseLerp = 0.05) {
  const p = Number.isFinite(pull) ? pull : 1;
  const b = Number.isFinite(baseLerp) ? baseLerp : 0.05;
  return Math.min(0.12, Math.max(0.02, b * Math.max(0.4, p)));
}
