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

function expectedToken() {
  try {
    return new URLSearchParams(location.search).get('token') || '';
  } catch {
    return '';
  }
}

function acceptFrame(data) {
  const need = expectedToken();
  if (!need) return true;
  const got = data?.token || data?.detail?.token || '';
  return got === need;
}

export function bindRemoteContract(state, targetState) {
  const apply = (payload) => applyContract(payload, state, targetState);

  addEventListener('gaia:targetState', (ev) => {
    if (acceptFrame(ev.detail || {})) apply(ev.detail);
  });
  addEventListener('gaia:pulse', (ev) => {
    if (!acceptFrame(ev.detail || {})) return;
    state.gravityPull = mapPulseToGravity(ev.detail?.pulse ?? ev.detail);
  });

  try {
    const bc = new BroadcastChannel(CHANNEL);
    bc.onmessage = (ev) => {
      const data = ev.data || {};
      if (!acceptFrame(data)) return;
      if (data.type === 'gaia:targetState' || data.geometry) apply(data.detail || data);
      if (data.type === 'gaia:pulse') {
        state.gravityPull = mapPulseToGravity(data.detail?.pulse ?? data.pulse);
      }
    };
  } catch {
    /* BroadcastChannel unavailable */
  }

  const params = new URLSearchParams(location.search);
  const wsUrl = params.get('pulse');
  const token = params.get('token') || '';
  if (wsUrl && typeof WebSocket !== 'undefined') {
    try {
      const ws = new WebSocket(wsUrl);
      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          if (!acceptFrame({ ...data, token: data.token || token })) return;
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
    const q = params.get('state');
    if (q) apply(JSON.parse(q));
  } catch {
    /* ignore malformed query */
  }
}

export function createPositionStreamer(nodes, { relay } = {}) {
  let bc = null;
  try {
    bc = new BroadcastChannel(POS_CHANNEL);
  } catch {
    bc = null;
  }
  let last = 0;
  return (t) => {
    if (t - last < 0.1) return;
    last = t;
    const payload = {
      type: 'gaia:positions',
      band: '192-network',
      t,
      nodes: nodes.map((n) => {
        const p = n.position || n.mesh?.position || n.dummy?.position || { x: 0, y: 0, z: 0 };
        return {
          idx: n.idx,
          x: +p.x.toFixed(3),
          y: +p.y.toFixed(3),
          z: +p.z.toFixed(3),
        };
      }),
    };
    if (bc) bc.postMessage(payload);
    dispatchEvent(new CustomEvent('gaia:positions', { detail: payload }));
    if (relay) {
      fetch(relay, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  };
}
