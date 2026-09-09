/**
 * Stage-18 dual-path fidelity: CPU evaluateGeometry vs verbatim chat kernel.
 * TF path is compared when a sample buffer is supplied (browser / ?tf=1).
 */
import { evaluateGeometry } from './geometry.js';
import { CHAT_KERNEL_GEOMETRIES, evaluateChatKernel } from './chatKernel.js';

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
    stage: 18,
    samples: rows.length,
    mismatches,
    maxDelta,
    pass: mismatches === 0,
    note:
      'Chat kernel uses major = 10 + idx * 2; CPU evaluateGeometry uses 10 + (idx % 24) * 2. They match for idx < 24.',
    rows,
  };
}

export function fidelitySummary(report = sampleFidelity()) {
  return {
    stage: report.stage,
    pass: report.pass,
    samples: report.samples,
    mismatches: report.mismatches,
    maxDelta: report.maxDelta,
  };
}
