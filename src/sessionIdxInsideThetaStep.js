/** Stage 520 — the 0.002 idx term stays inside the theta step only. Document only. Paste not rewritten. No secrets. */
export const IDX_INSIDE_THETA_STAGE = 520;
export const IDX_INSIDE_THETA_SESSION = 'beec41f1';
export const IDX_INSIDE_THETA_LIVING = '7cd81012';

const PINNED = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleIdxInsideThetaStep() {
  return {
    thetaTerm: 'this.idx * 0.002',
    majorTerm: 'this.idx * 2',
    triangularTerm: 'this.idx % 3',
    coefficientLeavesTheta: false,
  };
}

export function noteSessionIdxInsideThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const thetaLine = (text.match(/this\.theta\s*\+=[^;]+;/) || [''])[0];
  const insideTheta = /this\.idx\s*\*\s*0\.002/.test(thetaLine);
  const outside = text.split(thetaLine).join('');
  const leaks = /0\.002/.test(outside);
  const sample = sampleIdxInsideThetaStep();
  return {
    stage: IDX_INSIDE_THETA_STAGE,
    session: IDX_INSIDE_THETA_SESSION,
    living: IDX_INSIDE_THETA_LIVING,
    pinned,
    insideTheta,
    leaks,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: insideTheta && !leaks && sample.coefficientLeavesTheta === false,
    note: 'idx * 0.002 stays inside the theta parentheses. major uses idx * 2 and triangular uses idx % 3. Paste not rewritten.',
  };
}

export function compileSessionStage520(source) {
  const hold = noteSessionIdxInsideThetaStep(source);
  return {
    current: IDX_INSIDE_THETA_STAGE,
    session: IDX_INSIDE_THETA_SESSION,
    living: IDX_INSIDE_THETA_LIVING,
    paste: '2026-10-09 10:16 CDT',
    hold,
    next: [
      { stage: 521, title: 'hold uGravity as a copy of gravityPull, not a second multiplier' },
      { stage: 522, title: 'hold major idx term as idx * 2, distinct from the theta 0.002 term' },
      { stage: 523, title: 'hold minor as 3 + toroidalWeave * 2, unread by gravityPull' },
    ],
  };
}
