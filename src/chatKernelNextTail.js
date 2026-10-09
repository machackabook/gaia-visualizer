/** Restored chat-kernel tail. Session switch stays four-case. Paste not rewritten. No secrets. */
import { reuseSessionLerpTarget, SESSION_LERP } from './sessionScratchLerp.js';
import { publicKernelEnvelope, assertPublicEnvelope } from './publicKernelEnvelope.js';
import { samplePublicBandFidelity } from './publicBandFidelity.js';
import { reportSessionPhiGap } from './sessionPhiGap.js';
import { sampleInstanceBandHealth } from './instanceBandHealth.js';
import { sampleWeaveSliderBind } from './weaveSliderBind.js';
import { noteSessionVector3Alloc } from './sessionVector3Alloc.js';
import { noteSessionMajorClamp } from './sessionMajorClamp.js';
import { noteSessionPhiStill } from './sessionPhiStill.js';
import { noteSessionInfinityYUnreadByScale } from './sessionInfinityYUnreadByScale.js';
import { noteSessionInfinityDenom } from './sessionInfinityDenom.js';
import { noteSessionTriangularLattice } from './sessionTriangularLattice.js';
import { noteSessionHamiltonianIgnore } from './sessionHamiltonianIgnore.js';
import { noteSessionTorusPhiReuse } from './sessionTorusPhiReuse.js';
import { noteSessionInfinityTube } from './sessionInfinityTube.js';
import { noteSessionTorusFallthrough } from './sessionTorusFallthrough.js';
import { noteSessionTriangularRipple } from './sessionTriangularRipple.js';
import { noteSessionInfinityScale } from './sessionInfinityScale.js';
import { noteSessionHamiltonianY } from './sessionHamiltonianY.js';
import { noteSessionTriangularY } from './sessionTriangularY.js';
import { noteSessionLemniscateZ } from './sessionLemniscateZ.js';
import { noteSessionTorusY } from './sessionTorusY.js';
import { noteSessionInfinityX } from './sessionInfinityX.js';
import { noteSessionHamiltonianX } from './sessionHamiltonianX.js';
import { noteSessionHamiltonianZ } from './sessionHamiltonianZ.js';
import { noteSessionTriangularX } from './sessionTriangularX.js';
import { noteSessionTriangularZ } from './sessionTriangularZ.js';
import { noteSessionTorusX } from './sessionTorusX.js';
import { noteSessionTorusZ } from './sessionTorusZ.js';
import { noteSessionTriangularFloor } from './sessionTriangularFloor.js';
import { chatKernelStage505Notes } from './chatKernelStage505Bind.js';
import {
  STAGE,
  CHAT_KERNEL_SESSION_HASH,
  CHAT_KERNEL_LIVING_HASH,
  CHAT_KERNEL_CHAT_GEOMETRIES,
  CHAT_KERNEL_RUNTIME_EXTRAS,
  CHAT_KERNEL_PANEL_COUNT,
  CHAT_KERNEL_HUD_BUS,
  CHAT_KERNEL_PUBLIC_BAND,
  CHAT_KERNEL_PUBLIC_BAND_READY,
  CHAT_KERNEL_ENGRAM_FOLDER,
  GPU_AUTO_THRESHOLD,
  NODE_CAP,
  INSTANCE_OFFSET_MIN,
  CHAT_KERNEL_NEXT_STAGES,
  STAGE_FLAGS,
} from './chatKernelNext.js';

export function chatKernelFourGovernors() {
  return {
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    gpu: GPU_AUTO_THRESHOLD,
    cap: NODE_CAP,
    instanceOffsetMin: INSTANCE_OFFSET_MIN,
    sessionLerp: SESSION_LERP,
    ...STAGE_FLAGS,
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
    geometry: src.geometry || 'hamiltonian',
    energy,
    frozen,
    secrets: false,
    tokenInEnvelope: false,
    ...STAGE_FLAGS,
    ready: !frozen,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 506,
  };
}

export function chatKernelExtrasParity() {
  return {
    stage: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    sessionCases: CHAT_KERNEL_CHAT_GEOMETRIES.slice(),
    extras: CHAT_KERNEL_RUNTIME_EXTRAS.map((name, i) => ({
      name,
      id: i + 4,
      path: 'runtime-only',
      vector3HotPath: false,
      gpuTfParity: true,
    })),
    note: 'Stage 505: lift, lerp alpha, and major-before-switch add no new case. Extras still off the session switch.',
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

export function chatKernelWeaveSliders(toroidalWeave = 1, gravityPull = 1) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const panels = [];
  for (let i = 0; i < CHAT_KERNEL_PANEL_COUNT; i++) {
    const lane = i % 4;
    const value = Math.min(2, Math.max(0, weave * (0.55 + lane * 0.12) * Math.max(0.4, pull)));
    panels.push({ panel: i + 1, lane, geometry: CHAT_KERNEL_CHAT_GEOMETRIES[lane], value });
  }
  return { stage: STAGE, count: CHAT_KERNEL_PANEL_COUNT, weave, pull, panels };
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
  const stage505 = chatKernelStage505Notes(sessionSource);
  return {
    current: STAGE,
    session: CHAT_KERNEL_SESSION_HASH,
    living: CHAT_KERNEL_LIVING_HASH,
    geometries: CHAT_KERNEL_CHAT_GEOMETRIES.slice(),
    governors: chatKernelFourGovernors(),
    extras: chatKernelExtrasParity(),
    sliders: chatKernelWeaveSliders(),
    hud,
    weaveBind,
    weaveBindOk: weaveBind.ok,
    vector3AllocOk: noteSessionVector3Alloc(sessionSource).ok,
    majorClampOk: noteSessionMajorClamp(sessionSource).ok,
    phiStillOk: noteSessionPhiStill(sessionSource).ok,
    infinityYUnreadOk: noteSessionInfinityYUnreadByScale(sessionSource).ok,
    infinityDenomOk: noteSessionInfinityDenom(sessionSource).ok,
    triangularLatticeOk: noteSessionTriangularLattice(sessionSource).ok,
    hamiltonianIgnoreOk: noteSessionHamiltonianIgnore(sessionSource).ok,
    torusPhiReuseOk: noteSessionTorusPhiReuse(sessionSource).ok,
    triangularFloorOk: noteSessionTriangularFloor(sessionSource).ok,
    infinityTubeOk: noteSessionInfinityTube(sessionSource).ok,
    torusFallthroughOk: noteSessionTorusFallthrough(sessionSource).ok,
    triangularRippleOk: noteSessionTriangularRipple(sessionSource).ok,
    infinityScaleOk: noteSessionInfinityScale(sessionSource).ok,
    hamiltonianYOk: noteSessionHamiltonianY(sessionSource).ok,
    triangularYOk: noteSessionTriangularY(sessionSource).ok,
    lemniscateZOk: noteSessionLemniscateZ(sessionSource).ok,
    torusYOk: noteSessionTorusY(sessionSource).ok,
    infinityXOk: noteSessionInfinityX(sessionSource).ok,
    hamiltonianXOk: noteSessionHamiltonianX(sessionSource).ok,
    hamiltonianZOk: noteSessionHamiltonianZ(sessionSource).ok,
    triangularXOk: noteSessionTriangularX(sessionSource).ok,
    triangularZOk: noteSessionTriangularZ(sessionSource).ok,
    torusXOk: noteSessionTorusX(sessionSource).ok,
    torusZOk: noteSessionTorusZ(sessionSource).ok,
    stage505,
    hamiltonianLiftUnreadOk: stage505.hamiltonianLiftUnreadOk,
    lerpAlphaHoldOk: stage505.lerpAlphaHoldOk,
    majorBeforeSwitchOk: stage505.majorBeforeSwitchOk,
    envelope,
    envelopeOk: assertPublicEnvelope(envelope).ok,
    fidelity,
    fidelityOk: fidelity.ok,
    phiGap,
    phiGapOk: phiGap.ok,
    instanceBand: band,
    instanceBandOk: band.ok,
    scratchLerp: typeof reuseSessionLerpTarget === 'function',
    next: CHAT_KERNEL_NEXT_STAGES.map((row) => ({ ...row })),
  };
}

export function chatKernelHeartbeatMutation(scan) {
  const src = scan || {};
  const gov = chatKernelFourGovernors();
  const stage505 = chatKernelStage505Notes();
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
    geometries: CHAT_KERNEL_CHAT_GEOMETRIES.slice(),
    extrasOffSession: true,
    gpuTfParity: true,
    ...STAGE_FLAGS,
    hamiltonianLiftUnreadOk: stage505.hamiltonianLiftUnreadOk,
    lerpAlphaHoldOk: stage505.lerpAlphaHoldOk,
    majorBeforeSwitchOk: stage505.majorBeforeSwitchOk,
    frozen: !!src.frozen,
    energy: Number.isFinite(src.energy) ? src.energy : null,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 506,
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
    geometry: src.geometry || 'hamiltonian',
    sheetCount,
    sheetMatch,
    authenticated,
    ready: authenticated && !frozen && (expectedSheetCount === null || sheetMatch),
    tokenInEnvelope: false,
    ...STAGE_FLAGS,
    next: CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 506,
  };
}
