/**
 * Stage-18 dual-path fidelity + stage-31 chat-four isolation + stage-42 hash-mismatch sample.
 * CPU evaluateGeometry vs verbatim chat kernel.
 */
import { evaluateGeometry } from './geometry.js';
import {
  CHAT_KERNEL_CHAT_GEOMETRIES,
  CHAT_KERNEL_GEOMETRIES,
  CHAT_KERNEL_SOURCE_HASH,
  STAGE,
  evaluateChatKernel,
} from './chatKernel.js';

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function sampleFidelity({
  geometries = CHAT_KERNEL_GEOMETRIES,
  samples = 24,
  t = 1.25,
  weave = 1,
  idxCap = 12,
  eps = 1e-6,
} = {}) {
  const rows = [];
  let maxDelta = 0;
  let mismatches = 0;

  for (const geometry of geometries) {
    for (let i = 0; i < samples; i++) {
      const idx = i % idxCap;
      const theta = i * 0.37;
      const phi = i * 0.19;
      const cpu = evaluateGeometry({
        theta,
        phi,
        t,
        idx,
        gravityPull: 1,
        toroidalWeave: weave,
        geometry,
      });
      const chat = evaluateChatKernel({
        theta,
        phi,
        t,
        idx,
        toroidalWeave: weave,
        geometry,
      });
      const delta = dist(cpu, chat);
      maxDelta = Math.max(maxDelta, delta);
      const ok = delta <= eps;
      if (!ok) mismatches += 1;
      rows.push({ geometry, idx, theta, phi, delta, ok, cpu, chat });
    }
  }

  return {
    stage: STAGE,
    samples: rows.length,
    mismatches,
    maxDelta,
    pass: mismatches === 0,
    geometries: geometries.slice(),
    note:
      'Chat kernel uses major = 10 + idx * 2; CPU evaluateGeometry uses 10 + (idx % 24) * 2. They match for idx < 24.',
    rows,
  };
}

export function sampleChatGeometries(opts = {}) {
  return sampleFidelity({
    ...opts,
    geometries: opts.geometries || CHAT_KERNEL_CHAT_GEOMETRIES,
  });
}

export function sampleFidelityOnHashMismatch(inboundHash, opts = {}) {
  const expected = opts.expectedHash || CHAT_KERNEL_SOURCE_HASH;
  const inbound = inboundHash == null ? '' : String(inboundHash);
  if (inbound && inbound === expected) {
    return { stage: STAGE, match: true, skipped: true, expected, inbound };
  }
  const report = sampleChatGeometries(opts);
  return {
    ...report,
    match: false,
    skipped: false,
    expected,
    inbound: inbound || null,
    reason: inbound ? 'sourceHash mismatch' : 'missing sourceHash',
  };
}

export function fidelitySummary(report = sampleFidelity()) {
  return {
    stage: report.stage,
    pass: report.pass,
    samples: report.samples,
    mismatches: report.mismatches,
    maxDelta: report.maxDelta,
    geometries: report.geometries,
    match: report.match,
    skipped: report.skipped,
  };
}
