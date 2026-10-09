/** Stage 517 — theta step is the only angle write in the session paste. Document only. Paste not rewritten. No secrets. */
export const THETA_ONLY_ANGLE_WRITE_STAGE = 517;
export const THETA_ONLY_ANGLE_WRITE_SESSION = 'beec41f1';
export const THETA_ONLY_ANGLE_WRITE_LIVING = '7cd81012';

const PINNED = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleThetaOnlyAngleWrite() {
  return {
    writes: ['theta'],
    phiWrite: false,
    step: '(0.01 + this.idx * 0.002) * state.gravityPull',
  };
}

export function noteSessionThetaOnlyAngleWrite(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const thetaWrite = /this\.theta\s*\+=/.test(text);
  const phiWrite = /this\.phi\s*(\+=|=)/.test(text);
  const idxInside = text.includes('this.idx * 0.002');
  const sample = sampleThetaOnlyAngleWrite();
  return {
    stage: THETA_ONLY_ANGLE_WRITE_STAGE,
    session: THETA_ONLY_ANGLE_WRITE_SESSION,
    living: THETA_ONLY_ANGLE_WRITE_LIVING,
    pinned,
    thetaWrite,
    phiWrite,
    idxInside,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: thetaWrite && !phiWrite && idxInside && sample.phiWrite === false,
    note: 'theta += is the only angle write. phi is read by the tube and not assigned. Paste not rewritten.',
  };
}

export function compileSessionStage517(source) {
  const hold = noteSessionThetaOnlyAngleWrite(source);
  return {
    current: THETA_ONLY_ANGLE_WRITE_STAGE,
    session: THETA_ONLY_ANGLE_WRITE_SESSION,
    living: THETA_ONLY_ANGLE_WRITE_LIVING,
    paste: '2026-10-09 09:08 CDT',
    hold,
    next: [
      { stage: 518, title: 'hold gravityPull as the theta-step multiplier only' },
      { stage: 519, title: 'hold phi read-only in the session paste' },
      { stage: 520, title: 'hold idx term inside the theta step only' },
    ],
  };
}
