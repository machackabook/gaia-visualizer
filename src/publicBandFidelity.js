/** Stage 359 — public-band fidelity sample. Session switch stays four-case. No secrets. */
import { publicKernelEnvelope, assertPublicEnvelope, PUBLIC_ENVELOPE_GEOMETRIES, PUBLIC_ENVELOPE_LERP, PUBLIC_ENVELOPE_PHI_WEAVE, PUBLIC_ENVELOPE_SESSION_HASH, PUBLIC_ENVELOPE_LIVING_HASH } from './publicKernelEnvelope.js';

export const FIDELITY_STAGE = 359;
export const FIDELITY_BAND = 'hamiltoniansingularity.ai';

function samplePoint(geometry, idx = 1) {
  const theta = 0.7 + idx * 0.15;
  const phi = 0.4;
  const t = 1.2;
  const major = 10 + idx * 2;
  const minor = 3 + 2;
  let x = 0;
  let y = 0;
  let z = 0;
  if (geometry === 'infinity') {
    const scale = major * 1.5;
    const denom = 1 + Math.pow(Math.sin(theta), 2);
    x = (scale * Math.cos(theta)) / denom;
    z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
    y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  } else if (geometry === 'hamiltonian') {
    x = major * Math.cos(theta * 3) * Math.cos(theta);
    z = major * Math.cos(theta * 3) * Math.sin(theta);
    y = major * Math.sin(theta * 3) + Math.sin(t) * 2;
  } else if (geometry === 'triangular') {
    const tAngle = Math.floor(theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
    x = major * Math.cos(tAngle) + minor * Math.cos(theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(theta * 5);
    y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
  } else {
    x = (major + minor * Math.cos(phi)) * Math.cos(theta);
    z = (major + minor * Math.cos(phi)) * Math.sin(theta);
    y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  }
  return {
    geometry,
    finite: Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z),
    x, y, z,
  };
}

export function samplePublicBandFidelity(input = {}) {
  const envelope = publicKernelEnvelope(input);
  const gate = assertPublicEnvelope(envelope);
  const points = PUBLIC_ENVELOPE_GEOMETRIES.map((name, i) => samplePoint(name, i + 1));
  const checks = {
    band: FIDELITY_BAND,
    envelopeOk: gate.ok,
    sessionHash: envelope.sessionHash === PUBLIC_ENVELOPE_SESSION_HASH,
    livingHash: envelope.livingHash === PUBLIC_ENVELOPE_LIVING_HASH,
    fourGeometries: envelope.geometries.length === 4 && envelope.geometries.every((g, i) => g === PUBLIC_ENVELOPE_GEOMETRIES[i]),
    lerp: envelope.lerp === PUBLIC_ENVELOPE_LERP,
    uniforms: envelope.uniforms.join(',') === 'uTime,uGravity',
    sessionAllocatesVector3: envelope.sessionAllocatesVector3 === true,
    livingReusesTarget: envelope.livingReusesTarget === true,
    phiAdvancedInSession: envelope.phiAdvancedInSession === false,
    phiWeaveLiving: envelope.phiWeaveLiving === PUBLIC_ENVELOPE_PHI_WEAVE,
    extrasInSession: envelope.extrasInSession === false,
    tokenAbsent: envelope.tokenInEnvelope === false && envelope.secrets === false,
    pointsFinite: points.every((p) => p.finite),
  };
  const failed = Object.keys(checks).filter((key) => checks[key] === false);
  return {
    stage: FIDELITY_STAGE,
    band: FIDELITY_BAND,
    ok: failed.length === 0,
    failed,
    checks,
    points,
    sessionSwitchUntouched: true,
    extrasOffSession: true,
    secrets: false,
  };
}
