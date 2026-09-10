/**
 * Stage 29 — persist / restore theta+phi seeds so geometry continuity survives reload.
 * Completes the work listed as "next stage 28" in STAGES.md.
 * Key is separate from stage-27 ledger snapshot.
 */
export const KERNEL_SNAPSHOT_KEY = 'gaia:stage29:kernel';

export function captureKernelSnapshot(nodes, extra = {}) {
  const theta = [];
  const phi = [];
  for (let i = 0; i < nodes.length; i++) {
    theta[i] = nodes[i].theta ?? 0;
    phi[i] = nodes[i].phi ?? 0;
  }
  return {
    stage: 29,
    at: Date.now(),
    count: nodes.length,
    theta,
    phi,
    ...extra,
  };
}

export function saveKernelSnapshot(snapshot) {
  if (typeof localStorage === 'undefined' || !snapshot) return false;
  try {
    localStorage.setItem(KERNEL_SNAPSHOT_KEY, JSON.stringify(snapshot));
    return true;
  } catch {
    return false;
  }
}

export function loadKernelSnapshot() {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KERNEL_SNAPSHOT_KEY);
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
