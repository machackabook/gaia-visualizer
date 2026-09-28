/**
 * Living chat-kernel contract — Stage 314.
 * CHAT_KERNEL_SESSION_SOURCE is the exact update(t) posted in the current session (hash 67185cf3).
 * sourceHash is FNV-1a of CHAT_KERNEL_SOURCE (7cd81012 living evaluate path unchanged).
 * Runtime extras now folded into the session switch: klein, hopf, figure8, trefoil, mobius.
 * Stage 314: session paste enhanced 2026-09-27 20:07 CDT. matchSessionPaste scans case labels.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 * CPU lerp reuses _target; session paste still allocates Vector3 (documented, not copied into hot path).
 */

export const STAGE = 314;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const GPU_AUTO_THRESHOLD = 1024;
export const INSTANCE_OFFSET_MIN = 4096;
export const NODE_CAP = 16384;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'klein', 'figure8', 'hopf', 'trefoil', 'mobius', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = '67185cf3';
