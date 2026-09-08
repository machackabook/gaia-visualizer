import { GEOMETRIES } from './geometry.js';

export function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}

export function mapPulseToGravity(pulse, lo = 0.1, hi = 3) {
  const p = Number(pulse);
  if (!Number.isFinite(p)) return 1;
  return clamp(p, lo, hi);
}

export function parseTargetState(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  const geometry = GEOMETRIES.includes(src.geometry) ? src.geometry : 'torus';
  return {
    geometry,
    gravityPull: mapPulseToGravity(src.gravityPull ?? 1),
    toroidalWeave: clamp(Number(src.toroidalWeave ?? 1), 0, 4),
    lerp: clamp(Number(src.lerp ?? 0.05), 0.01, 0.4),
  };
}

/** Apply a contract object onto live state + targetState. */
export function applyContract(payload, state, targetState) {
  const parsed = parseTargetState(payload);
  targetState.geometry = parsed.geometry;
  state.gravityPull = parsed.gravityPull;
  state.toroidalWeave = parsed.toroidalWeave;
  state.lerp = parsed.lerp;
  return parsed;
}

/** Listen for window events and optional ?state= JSON query. */
export function bindRemoteContract(state, targetState) {
  addEventListener('gaia:targetState', (ev) => {
    applyContract(ev.detail, state, targetState);
  });
  addEventListener('gaia:pulse', (ev) => {
    state.gravityPull = mapPulseToGravity(ev.detail?.pulse ?? ev.detail);
  });
  try {
    const q = new URLSearchParams(location.search).get('state');
    if (q) applyContract(JSON.parse(q), state, targetState);
  } catch {
    /* ignore malformed query */
  }
}
