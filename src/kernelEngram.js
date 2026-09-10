/**
 * Stage 37–43 — compact kernel-seed engram.
 * Local persist + optional Hive POST /api/gaia/engram when ?relay= is set.
 * Stage 43: noteSourceHash stamps inboundHash so the HUD can sample fidelity.
 */
import { KERNEL_SOURCE_HASH } from './kernelMac.js';

export const ENGRAM_KEY = 'gaia:stage37:engram';
export const EXPECTED_SOURCE_HASH = KERNEL_SOURCE_HASH || 'beec41f1';

export function noteSourceHash(kernel, state) {
  if (!kernel || !state) return;
  const got = kernel.sourceHash;
  state.inboundHash = got == null ? '' : String(got);
  state.inboundHashAt = Date.now();
  if (!got) {
    state.hashMismatch = true;
    state.hashMismatchCount = (state.hashMismatchCount || 0) + 1;
    return;
  }
  if (got !== EXPECTED_SOURCE_HASH) {
    state.hashMismatch = true;
    state.hashMismatchCount = (state.hashMismatchCount || 0) + 1;
  } else {
    state.hashMismatch = false;
  }
}

export function dumpKernelEngram(kernel, extra = {}) {
  if (!kernel || !Array.isArray(kernel.theta) || !Array.isArray(kernel.phi)) return null;
  const engram = {
    type: extra.type || 'gaia:engram',
    stage: extra.stage || 43,
    sourceHash: kernel.sourceHash || extra.sourceHash || EXPECTED_SOURCE_HASH,
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

export function engramUrlFromRelay(relay) {
  if (!relay) return '';
  const s = String(relay);
  if (/\/api\/gaia\/positions\/?$/i.test(s)) return s.replace(/positions\/?$/i, 'engram');
  if (/\/api\/gaia\/?$/i.test(s)) return s.replace(/\/?$/, '/engram');
  if (/\/api\/gaia\/engram\/?$/i.test(s)) return s;
  return s.replace(/\/?$/, '/api/gaia/engram');
}

let lastEngramPost = 0;
export function postKernelEngram(engram, { relay, token } = {}) {
  if (!engram || !relay) return;
  const now = Date.now();
  if (now - lastEngramPost < 4000) return;
  lastEngramPost = now;
  const url = engramUrlFromRelay(relay);
  if (!url) return;
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(token ? { 'x-gaia-token': token } : {}),
    },
    body: JSON.stringify(engram),
  }).catch(() => {});
}
