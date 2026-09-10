/**
 * Stage 30/33/35 — persist / restore theta+phi seeds so geometry continuity survives reload.
 * Applied from main.js immediately after node construction (stage 35).
 * Keys remain gaia:stage29:kernel / gaia:stage30:kernel / gaia:stage33:kernel for backward compatibility.
 */
export const KERNEL_SNAPSHOT_KEY = 'gaia:stage29:kernel';
export const KERNEL_SNAPSHOT_KEY_30 = 'gaia:stage30:kernel';
export const KERNEL_SNAPSHOT_KEY_33 = 'gaia:stage33:kernel';
export const KERNEL_SNAPSHOT_KEY_35 = 'gaia:stage35:kernel';

export function captureKernelSnapshot(nodes, extra = {}) {
  const theta = [];
  const phi = [];
  for (let i = 0; i < nodes.length; i++) {
    theta[i] = nodes[i].theta ?? 0;
    phi[i] = nodes[i].phi ?? 0;
  }
  return {
    stage: extra.stage || 35,
    at: Date.now(),
    count: nodes.length,
    theta,
    phi,
    ...extra,
  };
}

export function compactKernelSeeds(snapshot, cap = 64) {
  if (!snapshot || !Array.isArray(snapshot.theta) || !Array.isArray(snapshot.phi)) return null;
  const n = Math.min(cap, snapshot.theta.length, snapshot.phi.length);
  return {
    stage: snapshot.stage || 35,
    at: snapshot.at || Date.now(),
    count: n,
    theta: snapshot.theta.slice(0, n),
    phi: snapshot.phi.slice(0, n),
  };
}

export function compactSeedsFromNodes(nodes, cap = 64) {
  if (!nodes?.length) return null;
  return compactKernelSeeds(captureKernelSnapshot(nodes), cap);
}

export function saveKernelSnapshot(snapshot) {
  if (typeof localStorage === 'undefined' || !snapshot) return false;
  try {
    const raw = JSON.stringify(snapshot);
    localStorage.setItem(KERNEL_SNAPSHOT_KEY, raw);
    localStorage.setItem(KERNEL_SNAPSHOT_KEY_30, raw);
    localStorage.setItem(KERNEL_SNAPSHOT_KEY_33, raw);
    localStorage.setItem(KERNEL_SNAPSHOT_KEY_35, raw);
    return true;
  } catch {
    return false;
  }
}

export function loadKernelSnapshot() {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw =
      localStorage.getItem(KERNEL_SNAPSHOT_KEY_35) ||
      localStorage.getItem(KERNEL_SNAPSHOT_KEY_33) ||
      localStorage.getItem(KERNEL_SNAPSHOT_KEY_30) ||
      localStorage.getItem(KERNEL_SNAPSHOT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.theta) || !Array.isArray(parsed.phi)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function applyKernelSnapshot(nodes, gpu, snapshot) {
  if (!snapshot || !nodes?.length) return 0;
  const n = Math.min(nodes.length, snapshot.theta.length, snapshot.phi.length);
  for (let i = 0; i < n; i++) {
    nodes[i].theta = snapshot.theta[i];
    nodes[i].phi = snapshot.phi[i];
    if (gpu?.theta) gpu.theta[i] = snapshot.theta[i];
    if (gpu?.phi) gpu.phi[i] = snapshot.phi[i];
  }
  return n;
}
