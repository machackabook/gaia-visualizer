/** Stage 342 compiled next-stage queue. Session switch stays four-case (beec41f1). */

export const STAGE = 342;
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
export const CHAT_KERNEL_LIVING_HASH = '7cd81012';
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];

export const CHAT_KERNEL_NEXT_STAGES = [
  {
    stage: 343,
    title: 'authenticated ledger_pulse',
    note: 'Wire chatKernelLedgerEnvelope to Hive WS against live sheet counts. Token stays in secrets.',
  },
  {
    stage: 344,
    title: '19-panel weave sliders',
    note: 'NexusStudio / Stream sliders on the Quine weave bus.',
  },
  {
    stage: 345,
    title: 'TF/shader extras parity',
    note: 'klein / hopf / figure8 / trefoil / mobius remain runtime-only unless chat pastes them.',
  },
];

export function compileChatKernelNextStages() {
  return {
    current: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
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
