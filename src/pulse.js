import { GEOMETRIES } from './geometry.js';

export const CHANNEL = 'gaia-weave';
export const POS_CHANNEL = 'gaia-positions';

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
    blend: clamp(Number(src.blend ?? 0.5), 0, 1),
  };
}

export function applyContract(payload, state, targetState) {
  const parsed = parseTargetState(payload);
  targetState.geometry = parsed.geometry;
  state.gravityPull = parsed.gravityPull;
  state.toroidalWeave = parsed.toroidalWeave;
  state.lerp = parsed.lerp;
  state.blend = parsed.blend;
  return parsed;
}

export function bindRemoteContract(state, targetState) {
  const apply = (payload) => applyContract(payload, state, targetState);

  addEventListener('gaia:targetState', (ev) => apply(ev.detail));
  addEventListener('gaia:pulse', (ev) => {
    state.gravityPull = mapPulseToGravity(ev.detail?.pulse ?? ev.detail);
  });

  try {
    const bc = new BroadcastChannel(CHANNEL);
    bc.onmessage = (ev) => {
      const data = ev.data || {};
      if (data.type === 'gaia:targetState' || data.geometry) apply(data.detail || data);
      if (data.type === 'gaia:pulse') {
        state.gravityPull = mapPulseToGravity(data.detail?.pulse ?? data.pulse);
      }
    };
  } catch {
    /* BroadcastChannel unavailable */
  }

  const wsUrl = new URLSearchParams(location.search).get('pulse');
  if (wsUrl && typeof WebSocket !== 'undefined') {
    try {
      const ws = new WebSocket(wsUrl);
      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          if (data.type === 'gaia:pulse' || data.pulse != null) {
            state.gravityPull = mapPulseToGravity(data.pulse ?? data.detail?.pulse);
          } else {
            apply(data.detail || data);
          }
        } catch { /* ignore */ }
      };
    } catch { /* ignore */ }
  }

  try {
    const q = new URLSearchParams(location.search).get('state');
    if (q) apply(JSON.parse(q));
  } catch {
    /* ignore malformed query */
  }
}

export function createPositionStreamer(nodes) {
  let bc = null;
  try {
    bc = new BroadcastChannel(POS_CHANNEL);
  } catch {
    return () => {};
  }
  let last = 0;
  return (t) => {
    if (t - last < 0.1) return;
    last = t;
    const payload = {
      type: 'gaia:positions',
      band: '192-network',
      t,
      nodes: nodes.map((n) => ({
        idx: n.idx,
        x: +n.mesh.position.x.toFixed(3),
        y: +n.mesh.position.y.toFixed(3),
        z: +n.mesh.position.z.toFixed(3),
      })),
    };
    bc.postMessage(payload);
    dispatchEvent(new CustomEvent('gaia:positions', { detail: payload }));
  };
}
