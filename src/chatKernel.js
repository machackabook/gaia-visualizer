/**
 * Living chat-kernel contract — Stage 297.
 * CHAT_KERNEL_SESSION_SOURCE is the exact update(t) posted in the current session (hash beec41f1).
 * sourceHash is FNV-1a of CHAT_KERNEL_SOURCE (7cd81012).
 * Runtime extras: klein, hopf, figure8, trefoil.
 * Stage 297: session paste reconfirmed 2026-09-26 17:08 CDT. matchSessionPaste scans case labels.
 * Klein / hopf / figure8 / trefoil still not in the session switch.
 * GPU/TF auto path remains count > 1024. instanceOffset band 4096–16384.
 * CPU lerp reuses _target; session paste still allocates Vector3 (documented, not copied into hot path).
 */

export const STAGE = 297;
export const CHAT_KERNEL_LERP = 0.05;
export const CHAT_KERNEL_THETA_BASE = 0.01;
export const CHAT_KERNEL_THETA_IDX = 0.002;
export const CHAT_KERNEL_PHI_WEAVE = 0.007;
export const GPU_AUTO_THRESHOLD = 1024;
export const INSTANCE_OFFSET_MIN = 4096;
export const NODE_CAP = 16384;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_GEOMETRIES = ['torus', 'infinity', 'hamiltonian', 'triangular', 'klein', 'hopf', 'figure8', 'trefoil'];
export const CHAT_KERNEL_SOURCE_HASH = '7cd81012';
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
