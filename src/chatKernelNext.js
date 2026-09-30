/** Stage 345 compiled next-stage queue. Session switch stays four-case (beec41f1). */

export const STAGE = 345;
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
export const CHAT_KERNEL_LIVING_HASH = '7cd81012';
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_PANEL_COUNT = 19;

export const CHAT_KERNEL_NEXT_STAGES = [
  {
    stage: 346,
    title: 'TF/shader extras parity',
    note: 'klein / hopf / figure8 / trefoil / mobius remain runtime-only unless chat pastes them.',
  },
  {
    stage: 347,
    title: 'drive engram write-through',
    note: 'Persist compact ledger seed to Drive mesh without copying secrets.',
  },
  {
    stage: 348,
    title: 'quine HUD catalog bind',
    note: 'Bind 19-panel sliders into the living HUD catalog without touching the session switch.',
  },
];

export function chatKernelWeaveSliders(toroidalWeave = 1, gravityPull = 1) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const panels = [];
  for (let i = 0; i < CHAT_KERNEL_PANEL_COUNT; i++) {
    const lane = i % 4;
    const value = Math.min(2, Math.max(0, weave * (0.55 + lane * 0.12) * Math.max(0.4, pull)));
    panels.push({
      panel: i + 1,
      lane,
      geometry: CHAT_KERNEL_CHAT_GEOMETRIES[lane],
      value,
    });
  }
  return {
    stage: STAGE,
    count: CHAT_KERNEL_PANEL_COUNT,
    weave,
    pull,
    panels,
  };
}

export function compileChatKernelNextStages() {
  return {
    current: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    sliders: chatKernelWeaveSliders(),
    next: CHAT_KERNEL_NEXT_STAGES.map((row) => ({ ...row })),
  };
}

export function pairBlendChatKernelGeometries(from, to, blend = 0.5, out) {
  const a = Number.isFinite(blend) ? Math.min(1, Math.max(0, blend)) : 0.5;
  const dest = out || {};
  const fx = Number.isFinite(from && from.x) ? from.x : 0;
  const fy = Number.isFinite(from && from.y) ? from.y : 0;
  const fz = Number.isFinite(from && from.z) ? from.z : 0;
  const tx = Number.isFinite(to && to.x) ? to.x : fx;
  const ty = Number.isFinite(to && to.y) ? to.y : fy;
  const tz = Number.isFinite(to && to.z) ? to.z : fz;
  dest.x = fx + (tx - fx) * a;
  dest.y = fy + (ty - fy) * a;
  dest.z = fz + (tz - fz) * a;
  dest.blend = a;
  dest.pair = true;
  return dest;
}
