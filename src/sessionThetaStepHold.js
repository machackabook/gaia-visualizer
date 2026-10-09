/** Stage 507 — theta step is (0.01 + idx * 0.002) * gravityPull. Phi is not incremented. Document only. Paste not rewritten. No secrets. */
export const THETA_STEP_HOLD_STAGE = 507;
export const THETA_STEP_HOLD_SESSION = 'beec41f1';
export const THETA_STEP_HOLD_LIVING = '7cd81012';

const STEP = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleThetaStepHold(idx = 4, gravityPull = 1.4) {
  const step = (0.01 + idx * 0.002) * gravityPull;
  return {
    idx,
    gravityPull,
    step,
    phiIncremented: false,
  };
}

export function noteSessionThetaStepHold(source) {
  const pinned = source == null;
  const text = pinned ? STEP : String(source);
  const stepAt = text.indexOf(STEP);
  const phiAssign = /this\.phi\s*\+=/.test(text);
  const sample = sampleThetaStepHold();
  const product = Math.abs(sample.step - 0.0252) < 1e-12;
  return {
    stage: THETA_STEP_HOLD_STAGE,
    session: THETA_STEP_HOLD_SESSION,
    living: THETA_STEP_HOLD_LIVING,
    pinned,
    stepAt,
    phiAssign,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: stepAt >= 0 && phiAssign === false && product && sample.phiIncremented === false,
    note: 'theta advances by (0.01 + idx * 0.002) * gravityPull only. phi is not incremented. Paste not rewritten.',
  };
}

export function compileSessionStage507(source) {
  const hold = noteSessionThetaStepHold(source);
  return {
    current: THETA_STEP_HOLD_STAGE,
    session: THETA_STEP_HOLD_SESSION,
    living: THETA_STEP_HOLD_LIVING,
    paste: '2026-10-08 21:06 CDT',
    hold,
    next: [
      { stage: 508, title: 'hold uniform writes as uTime then uGravity only' },
      { stage: 509, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 510, title: 'hold triangular sector snap unread by the theta*5 weave' },
    ],
  };
}
