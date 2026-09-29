/**
 * Stage 335 — radial energy of an evaluated kernel step.
 * Living path only. Session four-case switch unchanged (beec41f1).
 */
export function chatKernelEnergy(step) {
  const x = Number.isFinite(step && step.x) ? step.x : 0;
  const y = Number.isFinite(step && step.y) ? step.y : 0;
  const z = Number.isFinite(step && step.z) ? step.z : 0;
  return Math.sqrt(x * x + y * y + z * z);
}

export function attachChatKernelEnergy(step) {
  if (!step) return step;
  step.energy = chatKernelEnergy(step);
  return step;
}
