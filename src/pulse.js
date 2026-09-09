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

function acceptFrame(data, state) {
  const need = expectedToken();
  if (!need) return true;
  const got = data?.token || data?.detail?.token || '';
  if (got === need) return true;
  if (state) {
    state.unsignedRefused = (state.unsignedRefused || 0) + 1;
    state.lastUnsignedAt = Date.now();
  }
  return false;
}

function stampPulse(state, pulse) {
  state.gravityPull = mapPulseToGravity(pulse);
  state.lastPulse = state.gravityPull;
  state.lastPulseAt = Date.now();
}

export function stampLedger(state, ledger) {
  const src = ledger && typeof ledger === 'object' ? ledger : {};
  state.ledger = {
    topics: Number(src.topics ?? src.topicCount ?? 0) || 0,
    votes: Number(src.votes ?? src.voteSum ?? 0) || 0,
    bridges: Number(src.bridges ?? src.bridgeCount ?? 0) || 0,
    nodes: Number(src.nodes ?? src.nodeCount ?? 0) || 0,
    at: Date.now(),
  };
  return state.ledger;
}

function parsePeerList(raw) {
  if (!raw) return [];
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^https?:\/\//i.test(s));
}

export function bindRemoteContract(state, targetState) {
  const apply = (payload) => applyContract(payload, state, targetState);

  addEventListener('gaia:targetState', (ev) => {
    if (acceptFrame(ev.detail || {}, state)) apply(ev.detail);
  });
  addEventListener('gaia:pulse', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    stampPulse(state, ev.detail?.pulse ?? ev.detail);
    if (ev.detail?.ledger) stampLedger(state, ev.detail.ledger);
  });
  addEventListener('gaia:ledger', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    stampLedger(state, ev.detail?.ledger || ev.detail);
  });

  try {
    const bc = new BroadcastChannel(CHANNEL);
    bc.onmessage = (ev) => {
      const data = ev.data || {};
      if (!acceptFrame(data, state)) return;
      if (data.type === 'gaia:targetState' || data.geometry) apply(data.detail || data);
      if (data.type === 'gaia:pulse') {
        stampPulse(state, data.detail?.pulse ?? data.pulse);
        if (data.ledger || data.detail?.ledger) stampLedger(state, data.ledger || data.detail.ledger);
      }
      if (data.type === 'gaia:ledger' || data.ledger) {
        stampLedger(state, data.ledger || data.detail?.ledger || data);
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
          if (!acceptFrame({ ...data, token: data.token || token }, state)) return;
          if (data.type === 'gaia:pulse' || data.pulse != null) {
            stampPulse(state, data.pulse ?? data.detail?.pulse);
            if (data.ledger) stampLedger(state, data.ledger);
          } else if (data.type === 'gaia:ledger') {
            stampLedger(state, data.ledger || data);
          } else if (data.type !== 'gaia:positions') {
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

export function createPositionStreamer(nodes, { relay, peers, token, buffers } = {}) {
  let bc = null;
  try {
    bc = new BroadcastChannel(POS_CHANNEL);
  } catch {
    bc = null;
  }
  const peerUrls = parsePeerList(peers);
  let last = 0;
  return (t) => {
    if (t - last < 0.1) return;
    last = t;
    const list = buffers
      ? snapshotFromBuffers(buffers)
      : nodes.map((n) => {
          const p = n.position || n.mesh?.position || n.dummy?.position || { x: 0, y: 0, z: 0 };
          return {
            idx: n.idx,
            x: +p.x.toFixed(3),
            y: +p.y.toFixed(3),
            z: +p.z.toFixed(3),
          };
        });
    const payload = {
      type: 'gaia:positions',
      band: '192-network',
      t,
      nodes: list,
    };
    if (token) payload.token = token;
    if (bc) bc.postMessage(payload);
    dispatchEvent(new CustomEvent('gaia:positions', { detail: payload }));
    const targets = [relay, ...peerUrls].filter(Boolean);
    for (const url of targets) {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(token ? { 'x-gaia-token': token } : {}),
        },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  };
}

function snapshotFromBuffers(buffers) {
  const nodes = [];
  for (let i = 0; i < buffers.count; i++) {
    const o = i * 3;
    nodes.push({
      idx: i,
      x: +buffers.positions[o].toFixed(3),
      y: +buffers.positions[o + 1].toFixed(3),
      z: +buffers.positions[o + 2].toFixed(3),
    });
  }
  return nodes;
}
