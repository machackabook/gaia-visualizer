/** Stage 341 energy field. Session four-case switch stays off this module. */
export const ENERGY_STAGE = 341;
export const CHAT_KERNEL_ENERGY_MIN = 0.05;
export const CHAT_KERNEL_ENERGY_MAX = 4;
export const CHAT_KERNEL_FREEZE_BELOW = 0.12;

export function chatKernelEnergy(gravityPull = 1, toroidalWeave = 1) {
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  return Math.min(CHAT_KERNEL_ENERGY_MAX, Math.max(CHAT_KERNEL_ENERGY_MIN, pull * (0.5 + weave * 0.5)));
}

export function shouldFreezeChatKernel(energy) {
  const e = Number.isFinite(energy) ? energy : 0;
  return e < CHAT_KERNEL_FREEZE_BELOW;
}

/** Attach energy + freeze onto a stepped target without allocating a new object. */
export function attachChatKernelEnergy(stepped, state) {
  const dest = stepped || {};
  const energy = chatKernelEnergy(state && state.gravityPull, state && state.toroidalWeave);
  dest.energy = energy;
  dest.frozen = shouldFreezeChatKernel(energy);
  return dest;
}
