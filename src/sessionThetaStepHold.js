/** Stage 1127 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch. Document only. Paste not rewritten. No secrets. */
export const THETA_STEP_STAGE = 1127;
export const THETA_STEP_SESSION = 'beec41f1';
export const THETA_STEP_LIVING = '7cd81012';

const PINNED = '    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleThetaStepHold() {
  return {
    formula: '(0.01 + this.idx * 0.002) * state.gravityPull',
    beforeSwitch: true,
    unreadByCases: true,
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
    ok: hasStep && sample.beforeSwitch && sample.unreadByCases,
    note: 'update(t) advances theta by (0.01 + idx*0.002)*gravityPull before switch; unread by case bodies. Paste not rewritten.',
  };
}

export function compileSessionStage1127(source) {
  const hold = noteSessionThetaStepHold(source);
  return {
    current: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION,
    living: THETA_STEP_LIVING,
    paste: '2026-11-08 01:10Z',
    hold,
    next: [
      { stage: 1128, title: 'hold major/minor declaration prior to switch (reaffirm)' },
      { stage: 1129, title: 'hold switch four-case (infinity | hamiltonian | triangular | torus/default) sole dispatch' },
      { stage: 1130, title: 'hold infinity lemniscate denom 1 + sin(theta)^2 scale *1.5' },
    ],
  };
}
