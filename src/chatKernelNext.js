/** Stage 362 compiled next-stage queue. Session switch stays four-case (beec41f1). Connecting chat 2026-10-01 14:06 CDT. */
import { reuseSessionLerpTarget, SESSION_LERP } from './sessionScratchLerp.js';
import { publicKernelEnvelope, assertPublicEnvelope } from './publicKernelEnvelope.js';
import { samplePublicBandFidelity } from './publicBandFidelity.js';
import { reportSessionPhiGap } from './sessionPhiGap.js';
import { sampleInstanceBandHealth } from './instanceBandHealth.js';
import { sampleWeaveSliderBind } from './weaveSliderBind.js';

export { reuseSessionLerpTarget, SESSION_LERP, publicKernelEnvelope, assertPublicEnvelope, samplePublicBandFidelity, reportSessionPhiGap, sampleInstanceBandHealth, sampleWeaveSliderBind };

export const STAGE = 362;
export const CHAT_KERNEL_SESSION_HASH = 'beec41f1';
export const CHAT_KERNEL_LIVING_HASH = '7cd81012';
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const CHAT_KERNEL_RUNTIME_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const CHAT_KERNEL_PANEL_COUNT = 19;
export const CHAT_KERNEL_HUD_BUS = 'quine-weave';
export const CHAT_KERNEL_PUBLIC_BAND = 'hamiltoniansingularity.ai';
export const CHAT_KERNEL_PUBLIC_BAND_READY = true;
export const CHAT_KERNEL_ENGRAM_FOLDER = 'CRYPTIC-HEARTBEAT-NEXUS-ROOT';
export const GPU_AUTO_THRESHOLD = 1024;
export const NODE_CAP = 16384;
export const INSTANCE_OFFSET_MIN = 4096;

export const CHAT_KERNEL_NEXT_STAGES = [
  {
    stage: 363,
    title: 'residual session Vector3 allocation note',
    note: 'Document that the session paste still allocates THREE.Vector3. Do not invent a session case.',
  },
  {
    stage: 364,
    title: 'session major-clamp gap at node cap',
    note: 'Document major = 10 + idx * 2 at 16384. Living path already clamps. Do not rewrite the paste.',
  },
  {
    stage: 365,
    title: 'session phi still not advanced',
    note: 'Document that the session paste does not step phi. Living path already does. Do not rewrite the paste.',
  },
];

export function chatKernelFourGovernors() {
  return {
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    gpu: GPU_AUTO_THRESHOLD,
    cap: NODE_CAP,
    instanceOffsetMin: INSTANCE_OFFSET_MIN,
    sessionLerp: SESSION_LERP,
    scratchLerp: true,
    publicEnvelope: true,
    fidelitySample: true,
    phiGapReport: true,
    instanceBand: true,
    weaveBind: true,
  };
}

export function chatKernelMemoryEngram(scan) {
  const src = scan || {};
  const energy = Number.isFinite(src.energy) ? src.energy : null;
  const frozen = src.frozen != null ? !!src.frozen : (energy != null && energy < 0.12);
  return {
    event: 'memory_engram',
    stage: STAGE,
    folder: CHAT_KERNEL_ENGRAM_FOLDER,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    geometry: src.geometry || 'torus',
    energy,
    frozen,
    secrets: false,
    tokenInEnvelope: false,
    scratchLerp: true,
    publicEnvelope: true,
    fidelitySample: true,
    phiGapReport: true,
    instanceBand: true,
    weaveBind: true,
    ready: !frozen,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 363,
  };
}

export function chatKernelExtrasParity() {
  return {
    stage: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    sessionCases: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    extras: CHAT_KERNEL_RUNTIME_EXTRAS.map((name, i) => ({
      name,
      id: i + 4,
      path: 'runtime-only',
      vector3HotPath: false,
      gpuTfParity: true,
    })),
    note: 'Stage 362: weave-slider bind has no new case. Extras still off the session switch.',
  };
}

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

export function chatKernelHudCatalogBind(toroidalWeave = 1, gravityPull = 1) {
  const sliders = chatKernelWeaveSliders(toroidalWeave, gravityPull);
  return {
    stage: STAGE,
    bus: CHAT_KERNEL_HUD_BUS,
    band: CHAT_KERNEL_PUBLIC_BAND,
    bandReady: CHAT_KERNEL_PUBLIC_BAND_READY,
    publicBand: CHAT_KERNEL_PUBLIC_BAND,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    sessionSwitchUntouched: true,
    catalog: sliders.panels.map((panel) => ({
      id: 'hud-' + panel.panel,
      label: panel.geometry + ' lane ' + panel.lane,
      min: 0,
      max: 2,
      step: 0.01,
      value: panel.value,
      geometry: panel.geometry,
      lane: panel.lane,
    })),
    count: CHAT_KERNEL_PANEL_COUNT,
  };
}

export function compileChatKernelNextStages(sessionSource) {
  const envelope = publicKernelEnvelope();
  const fidelity = samplePublicBandFidelity();
  const phiGap = reportSessionPhiGap(sessionSource);
  const band = sampleInstanceBandHealth();
  const hud = chatKernelHudCatalogBind();
  const weaveBind = sampleWeaveSliderBind(hud.catalog, hud.band);
  return {
    current: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    governors: chatKernelFourGovernors(),
    extras: chatKernelExtrasParity(),
    sliders: chatKernelWeaveSliders(),
    hud,
    weaveBind,
    weaveBindOk: weaveBind.ok,
    heartbeat: chatKernelHeartbeatMutation(),
    ledger: chatKernelLedgerPulseScan(),
    engram: chatKernelMemoryEngram(),
    scratchLerp: typeof reuseSessionLerpTarget === 'function',
    envelope,
    envelopeOk: assertPublicEnvelope(envelope).ok,
    fidelity,
    fidelityOk: fidelity.ok,
    phiGap,
    phiGapOk: phiGap.ok,
    instanceBand: band,
    instanceBandOk: band.ok,
    next: CHAT_KERNEL_NEXT_STAGES.map((row) => ({ ...row })),
  };
}

export function chatKernelHeartbeatMutation(scan) {
  const src = scan || {};
  const gov = chatKernelFourGovernors();
  const band = sampleInstanceBandHealth();
  const hud = chatKernelHudCatalogBind();
  const weaveBind = sampleWeaveSliderBind(hud.catalog, hud.band);
  return {
    event: 'heartbeat_mutation',
    stage: STAGE,
    session: gov.session,
    living: gov.living,
    gpu: gov.gpu,
    cap: gov.cap,
    governors: gov,
    http: true,
    ws: true,
    geometries: [...CHAT_KERNEL_CHAT_GEOMETRIES],
    extrasOffSession: true,
    gpuTfParity: true,
    scratchLerp: true,
    publicEnvelope: true,
    fidelitySample: true,
    phiGapReport: true,
    instanceBandOk: band.ok,
    weaveBindOk: weaveBind.ok,
    frozen: !!src.frozen,
    energy: Number.isFinite(src.energy) ? src.energy : null,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 363,
  };
}

export function chatKernelLedgerPulseScan(scan) {
  const src = scan || {};
  const energy = Number.isFinite(src.energy) ? src.energy : null;
  const frozen = src.frozen != null ? !!src.frozen : (energy != null && energy < 0.12);
  const sheetCount = Number.isFinite(src.sheetCount) ? src.sheetCount : null;
  const expectedSheetCount = Number.isFinite(src.expectedSheetCount) ? src.expectedSheetCount : null;
  const sheetMatch = sheetCount !== null && expectedSheetCount !== null && sheetCount === expectedSheetCount;
  const authenticated = !!src.authenticated;
  return {
    event: 'ledger_pulse',
    stage: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    energy,
    frozen,
    geometry: src.geometry || 'torus',
    sheetCount,
    sheetMatch,
    authenticated,
    ready: authenticated && !frozen && (expectedSheetCount === null || sheetMatch),
    tokenInEnvelope: false,
    fidelitySample: true,
    phiGapReport: true,
    instanceBand: true,
    weaveBind: true,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 363,
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
