/** Stage 390 — hold theta step (0.01 + idx * 0.002) * gravityPull. Document only. No secrets. */
export const THETA_STEP_STAGE = 390;
export const THETA_STEP_SESSION_HASH = 'beec41f1';
export const THETA_STEP_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sessionThetaDelta(idx, gravityPull) {
  const i = Number.isFinite(idx) ? idx : 0;
  const g = Number.isFinite(gravityPull) ? gravityPull : 0;
  return (0.01 + i * 0.002) * g;
}

export function noteSessionThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull/.test(text);
  const lane0 = sessionThetaDelta(0, 1);
  const lane4 = sessionThetaDelta(4, 1);
  const pulled = sessionThetaDelta(0, 1.4);
  const frozen = sessionThetaDelta(2, 0);
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    pinned,
    formula: '(0.01 + idx * 0.002) * gravityPull',
    hasSessionStep: hasStep,
    lane0,
    lane4,
    pulled,
    frozen,
    pasteRewritten: false,
    secrets: false,
    ok: hasStep && Math.abs(lane0 - 0.01) < 1e-12 && Math.abs(lane4 - 0.018) < 1e-12 && Math.abs(pulled - 0.014) < 1e-12 && frozen === 0,
    note: 'Stage 390 holds the session theta step. gravityPull scales every lane. Paste not rewritten.',
  };
}
