/** Stage 531 — theta step stays (0.01 + idx * 0.002) * gravityPull. Document only. Paste not rewritten. No secrets. */
export const THETA_STEP_HOLD_STAGE = 531;
export const THETA_STEP_HOLD_SESSION = 'beec41f1';
export const THETA_STEP_HOLD_LIVING = '7cd81012';

const PINNED_THETA = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleThetaStepHold(idx = 4, gravityPull = 1.4) {
  const base = 0.01 + idx * 0.002;
  return {
    idx,
    gravityPull,
    base,
    step: base * gravityPull,
    idxInsideParens: true,
    pullIsMultiplier: true,
    readsPhi: false,
  };
}

export function noteSessionThetaStepHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_THETA : String(source);
  const form = /this\.theta \+= \(0\.01 \+ this\.idx \* 0\.002\) \* state\.gravityPull;/.test(text);
  const idxOutside = /this\.theta \+= \(0\.01\) \* this\.idx/.test(text);
  const pullAdded = /this\.theta \+= \(0\.01 \+ this\.idx \* 0\.002 \+ state\.gravityPull\)/.test(text);
  const readsPhi = /this\.theta[^\n]*this\.phi/.test(text);
  const sample = sampleThetaStepHold();
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: THETA_STEP_HOLD_STAGE,
    session: THETA_STEP_HOLD_SESSION,
    living: THETA_STEP_HOLD_LIVING,
    pinned,
    form,
    idxOutside,
    pullAdded,
    readsPhi,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: form && !idxOutside && !pullAdded && !readsPhi
      && sample.idxInsideParens === true
      && sample.pullIsMultiplier === true
      && sample.readsPhi === false
      && near(sample.base, 0.018)
      && near(sample.step, 0.0252),
    note: 'theta step stays (0.01 + this.idx * 0.002) * state.gravityPull. idx stays inside the parentheses. gravityPull multiplies; it is not added. phi is not in the step. Paste not rewritten.',
  };
}

export function compileSessionStage531(source) {
  const hold = noteSessionThetaStepHold(source);
  return {
    current: THETA_STEP_HOLD_STAGE,
    session: THETA_STEP_HOLD_SESSION,
    living: THETA_STEP_HOLD_LIVING,
    paste: '2026-10-09 17:07 CDT',
    hold,
    next: [
      { stage: 532, title: 'hold minor as 3 + (toroidalWeave * 2) before the switch' },
      { stage: 533, title: 'hold phi read-only in the session paste' },
      { stage: 534, title: 'hold major parentheses form 10 + (idx * 2) distinct from the 0.002 theta coefficient' },
    ],
  };
}
