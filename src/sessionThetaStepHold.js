/** Stage 1073 — theta step (0.01 + idx * 0.002) * gravityPull before major/minor. Document only. Paste not rewritten. No secrets. */
export const THETA_STEP_STAGE = 1073;
export const THETA_STEP_SESSION = 'beec41f1';
export const THETA_STEP_LIVING = '7cd81012';

const PINNED = '    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleThetaStepHold() {
  return {
    formula: '(0.01 + this.idx * 0.002) * state.gravityPull',
    beforeMajorMinor: true,
  };
}

export function noteSessionThetaStepHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const hasStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull/.test(text);
  const sample = sampleThetaStepHold();
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION,
    living: THETA_STEP_LIVING,
    pinned,
    hasStep,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasStep && sample.beforeMajorMinor,
    note: 'update(t) advances theta by (0.01 + idx*0.002)*gravityPull before major/minor. Paste not rewritten.',
  };
}

export function compileSessionStage1073(source) {
  const hold = noteSessionThetaStepHold(source);
  return {
    current: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION,
    living: THETA_STEP_LIVING,
    paste: '2026-11-05 15:10Z',
    hold,
    next: [
      { stage: 1074, title: 'hold major/minor pre-switch' },
      { stage: 1075, title: 'hold full four-case switch' },
      { stage: 1076, title: 'hold infinity lemniscate denom shared by x/z only' },
    ],
  };
}
