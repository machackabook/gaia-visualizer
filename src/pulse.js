import { GEOMETRIES } from './geometry.js';
import { applyKernelSnapshot, compactSeedsFromNodes, saveKernelSnapshot } from './kernelSnapshot.js';

export const CHANNEL = 'gaia-weave';
export const POS_CHANNEL = 'gaia-positions';
export const SNAPSHOT_KEY = 'gaia:stage27:snapshot';

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
  persistSnapshot(state, targetState);
  return parsed;
}

export function persistSnapshot(state, targetState) {
  try {
    const snap = {
      stage: 27,
      gravityPull: state.gravityPull,
      lastPulse: state.lastPulse,
      lastPulseAt: state.lastPulseAt || 0,
      unsignedRefused: state.unsignedRefused || 0,
      ledger: state.ledger || { topics: 0, votes: 0, bridges: 0, nodes: 0, at: 0 },
      geometry: targetState?.geometry,
      toroidalWeave: state.toroidalWeave,
      blend: state.blend,
      lerp: state.lerp,
      savedAt: Date.now(),
    };
    localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snap));
    return snap;
  } catch {
    return null;
  }
}

export function restoreSnapshot(state, targetState) {
  try {
    const raw = localStorage.getItem(SNAPSHOT_KEY);
    if (!raw) return null;
    const snap = JSON.parse(raw);
    if (!snap || typeof snap !== 'object') return null;
    if (snap.ledger) {
      state.ledger = {
        topics: Number(snap.ledger.topics) || 0,
        votes: Number(snap.ledger.votes) || 0,
        bridges: Number(snap.ledger.bridges) || 0,
        nodes: Number(snap.ledger.nodes) || 0,
        at: Number(snap.ledger.at) || 0,
      };
    }
    if (snap.lastPulse != null) state.lastPulse = Number(snap.lastPulse);
    if (snap.lastPulseAt) state.lastPulseAt = Number(snap.lastPulseAt);
    if (snap.unsignedRefused) state.unsignedRefused = Number(snap.unsignedRefused) || 0;
    if (Number.isFinite(Number(snap.gravityPull))) state.gravityPull = mapPulseToGravity(snap.gravityPull);
    if (Number.isFinite(Number(snap.toroidalWeave))) state.toroidalWeave = clamp(Number(snap.toroidalWeave), 0, 4);
    if (Number.isFinite(Number(snap.blend))) state.blend = clamp(Number(snap.blend), 0, 1);
    if (Number.isFinite(Number(snap.lerp))) state.lerp = clamp(Number(snap.lerp), 0.01, 0.4);
    if (targetState && GEOMETRIES.includes(snap.geometry)) targetState.geometry = snap.geometry;
    state.snapshotRestored = true;
    state.snapshotAge = snap.lastPulseAt ? Date.now() - snap.lastPulseAt : 0;
    return snap;
  } catch {
    return null;
  }
}

export async function hydrateFromHealth(state, targetState, healthUrl) {
  if (!healthUrl) return null;
  try {
    const res = await fetch(healthUrl);
    if (!res.ok) return null;
    const body = await res.json();
    const ledger = body.ledger || body.gaia?.ledger;
    if (ledger) stampLedger(state, ledger);
    if (body.lastPulseAt) state.lastPulseAt = Number(body.lastPulseAt);
    if (body.lastPulse != null) {
      state.lastPulse = Number(body.lastPulse);
      state.gravityPull = mapPulseToGravity(body.lastPulse);
    }
    if (body.gaia?.geometry && targetState) targetState.geometry = body.gaia.geometry;
    if (body.kernel || body.gaia?.kernel) {
      state.pendingKernel = body.kernel || body.gaia.kernel;
      saveKernelSnapshot(state.pendingKernel);
    }
    persistSnapshot(state, targetState);
    return body;
  } catch {
    return null;
  }
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
    persistSnapshot(state);
  }
  return false;
}

function stampPulse(state, pulse, targetState) {
  state.gravityPull = mapPulseToGravity(pulse);
  state.lastPulse = state.gravityPull;
  state.lastPulseAt = Date.now();
  persistSnapshot(state, targetState);
}

export function stampLedger(state, ledger, targetState) {
  const src = ledger && typeof ledger === 'object' ? ledger : {};
  state.ledger = {
    topics: Number(src.topics ?? src.topicCount ?? 0) || 0,
    votes: Number(src.votes ?? src.voteSum ?? 0) || 0,
    bridges: Number(src.bridges ?? src.bridgeCount ?? 0) || 0,
    nodes: Number(src.nodes ?? src.nodeCount ?? 0) || 0,
    at: Date.now(),
  };
  persistSnapshot(state, targetState);
  return state.ledger;
}

function parsePeerList(raw) {
  if (!raw) return [];
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^https?:\/\//i.test(s));
}

function ingestKernel(data, state) {
  const kernel = data?.kernel || data?.detail?.kernel || (data?.type === 'gaia:kernel' ? data : null);
  if (!kernel || !Array.isArray(kernel.theta) || !Array.isArray(kernel.phi)) return null;
  state.pendingKernel = kernel;
  saveKernelSnapshot(kernel);
  if (state.nodes) applyKernelSnapshot(state.nodes, state.gpu, kernel);
  return kernel;
}

export function bindRemoteContract(state, targetState) {
  restoreSnapshot(state, targetState);
  const apply = (payload) => applyContract(payload, state, targetState);

  addEventListener('gaia:targetState', (ev) => {
    if (acceptFrame(ev.detail || {}, state)) apply(ev.detail);
  });
  addEventListener('gaia:pulse', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    stampPulse(state, ev.detail?.pulse ?? ev.detail, targetState);
    if (ev.detail?.ledger) stampLedger(state, ev.detail.ledger, targetState);
    if (ev.detail?.kernel) ingestKernel(ev.detail, state);
  });
  addEventListener('gaia:ledger', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    stampLedger(state, ev.detail?.ledger || ev.detail, targetState);
  });
  addEventListener('gaia:positions', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    if (ev.detail?.kernel) ingestKernel(ev.detail, state);
  });
  addEventListener('gaia:kernel', (ev) => {
    if (!acceptFrame(ev.detail || {}, state)) return;
    ingestKernel(ev.detail || ev, state);
  });

  try {
    const bc = new BroadcastChannel(CHANNEL);
    bc.onmessage = (ev) => {
      const data = ev.data || {};
      if (!acceptFrame(data, state)) return;
      if (data.type === 'gaia:targetState' || data.geometry) apply(data.detail || data);
      if (data.type === 'gaia:pulse') {
        stampPulse(state, data.detail?.pulse ?? data.pulse, targetState);
        if (data.ledger || data.detail?.ledger) stampLedger(state, data.ledger || data.detail.ledger, targetState);
        if (data.kernel || data.detail?.kernel) ingestKernel(data, state);
      }
      if (data.type === 'gaia:ledger' || data.ledger) {
        stampLedger(state, data.ledger || data.detail?.ledger || data, targetState);
      }
      if (data.type === 'gaia:kernel' || data.kernel) ingestKernel(data, state);
    };
  } catch {
    /* BroadcastChannel unavailable */
  }

  const params = new URLSearchParams(location.search);
  const wsUrl = params.get('pulse');
  const token = params.get('token') || '';
  const health = params.get('health');
  if (health) hydrateFromHealth(state, targetState, health);
  if (wsUrl && typeof WebSocket !== 'undefined') {
    try {
      const ws = new WebSocket(wsUrl);
      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          if (!acceptFrame({ ...data, token: data.token || token }, state)) return;
          if (data.type === 'gaia:pulse' || data.pulse != null) {
            stampPulse(state, data.pulse ?? data.detail?.pulse, targetState);
            if (data.ledger) stampLedger(state, data.ledger, targetState);
            if (data.kernel) ingestKernel(data, state);
          } else if (data.type === 'gaia:ledger') {
            stampLedger(state, data.ledger || data, targetState);
          } else if (data.type === 'gaia:positions') {
            if (data.kernel) ingestKernel(data, state);
          } else if (data.type === 'gaia:kernel') {
            ingestKernel(data, state);
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
      kernel: compactSeedsFromNodes(nodes, 64),
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
