/**
 * Living chat-kernel contract — Stage 357.
 * Session paste 2026-10-01 09:07 CDT reconfirmed four base cases (infinity|hamiltonian|triangular|torus).
 * Stage 314 extras (klein, hopf, figure8, trefoil, mobius) remain in the living switch only.
 * Stage 357: reuseSessionLerpTarget (session lerp without per-frame Vector3). Next queue 358+.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 */

export {
  chatKernelEnergy,
  shouldFreezeChatKernel,
  attachChatKernelEnergy,
  CHAT_KERNEL_ENERGY_MIN,
  CHAT_KERNEL_ENERGY_MAX,
  CHAT_KERNEL_FREEZE_BELOW,
} from './chatKernelEnergy.js';

export {
  compileChatKernelNextStages,
  pairBlendChatKernelGeometries,
  chatKernelMemoryEngram,
  reuseSessionLerpTarget,
  SESSION_LERP,
  CHAT_KERNEL_NEXT_STAGES,
  CHAT_KERNEL_LIVING_HASH,
  CHAT_KERNEL_ENGRAM_FOLDER,
} from './chatKernelNext.js';

export const STAGE = 357;
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

export function confirmSessionKernel() {
  return {
    stage: STAGE,
    sessionHash: CHAT_KERNEL_SESSION_HASH,
    livingHash: CHAT_KERNEL_SOURCE_HASH,
    pinned: true,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    runtimeExtras: ['klein', 'hopf', 'figure8', 'trefoil', 'mobius', 'blend', 'scratchLerp'],
    gpuAutoThreshold: GPU_AUTO_THRESHOLD,
    instanceOffsetMin: INSTANCE_OFFSET_MIN,
    nodeCap: NODE_CAP,
    note: 'Session paste 2026-10-01 09:07 CDT held beec41f1. Stage 357 scratch lerp. Pair-wise blend remains runtime-only.',
  };
}
