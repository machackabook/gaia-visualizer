/** Stage 519 — phi is read by the tube and not assigned in the session paste. Document only. Paste not rewritten. No secrets. */
export const PHI_READ_ONLY_STAGE = 519;
export const PHI_READ_ONLY_SESSION = 'beec41f1';
export const PHI_READ_ONLY_LIVING = '7cd81012';

const PINNED_READS = [
  'minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)',
  '(major + minor * Math.cos(this.phi))',
];

export function samplePhiReadOnlyPaste() {
  return {
    reads: ['infinity.y', 'torus.xz', 'torus.y'],
    writes: [],
    livingMayAdvancePhi: true,
  };
}

export function noteSessionPhiReadOnlyPaste(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_READS.join('\n') : String(source);
  const readsPhi = /this\.phi/.test(text);
  const writesPhi = /this\.phi\s*(\+=|=)/.test(text);
  const sample = samplePhiReadOnlyPaste();
  return {
    stage: PHI_READ_ONLY_STAGE,
    session: PHI_READ_ONLY_SESSION,
    living: PHI_READ_ONLY_LIVING,
    pinned,
    readsPhi,
    writesPhi,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: readsPhi && !writesPhi && sample.writes.length === 0,
    note: 'phi is read by the infinity/torus tube. The session paste does not assign phi. Living path may still advance phi outside this paste.',
  };
}

export function compileSessionStage519(source) {
  const hold = noteSessionPhiReadOnlyPaste(source);
  return {
    current: PHI_READ_ONLY_STAGE,
    session: PHI_READ_ONLY_SESSION,
    living: PHI_READ_ONLY_LIVING,
    paste: '2026-10-09 10:16 CDT',
    hold,
    next: [
      { stage: 520, title: 'hold idx term inside the theta step only' },
      { stage: 521, title: 'hold uGravity as a copy of gravityPull, not a second multiplier' },
      { stage: 522, title: 'hold major idx term as idx * 2, distinct from the theta 0.002 term' },
    ],
  };
}
