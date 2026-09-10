/**
 * Stage 37 — compact kernel-seed engram.
 * Local persistence now; Hive can copy window.__GAIA_ENGRAM__ into
 * Drive folder CRYPTIC-HEARTBEAT-NEXUS-ROOT.
 */
export const ENGRAM_KEY = 'gaia:stage37:engram';

export function dumpKernelEngram(kernel, extra = {}) {
  if (!kernel || !Array.isArray(kernel.theta) || !Array.isArray(kernel.phi)) return null;
  const engram = {
    stage: extra.stage || 38,
    sourceHash: kernel.sourceHash || extra.sourceHash || 'beec41f1',
    at: Date.now(),
    count: kernel.count ?? Math.min(kernel.theta.length, kernel.phi.length),
    theta: kernel.theta,
    phi: kernel.phi,
    hmac: kernel.hmac,
    ...extra,
  };
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ENGRAM_KEY, JSON.stringify(engram));
    }
  } catch {
    /* quota */
  }
  if (typeof window !== 'undefined') window.__GAIA_ENGRAM__ = engram;
  return engram;
}

export function loadKernelEngram() {
  if (typeof window !== 'undefined' && window.__GAIA_ENGRAM__) return window.__GAIA_ENGRAM__;
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ENGRAM_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
