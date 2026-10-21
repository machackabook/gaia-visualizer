/** Stage 787 — hold theta step (0.01 + idx * 0.002) * gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_STEP_787_STAGE = 787;
export const THETA_STEP_787_SESSION = 'beec41f1';
export const THETA_STEP_787_LIVING = '7cd81012';
export const THETA_BASE = 0.01;
export const THETA_IDX = 0.002;

const PINNED_SNIPPET = `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`;

export function sampleThetaStep787(idx, gravityPull) {
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const step = (THETA_BASE + idx * THETA_IDX) * pull;
  return { idx, pull, base: THETA_BASE, idxCoeff: THETA_IDX, step };
}

export function noteSessionThetaStep787(source) {
  const text = source == null ? PINNED_SNIPPET : String(source);
  const stepAssign = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const sample = sampleThetaStep787(0, 1);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: THETA_STEP_787_STAGE,
    session: THETA_STEP_787_SESSION,
    living: THETA_STEP_787_LIVING,
    formula: 'theta += (0.01 + idx * 0.002) * gravityPull',
    stepAssign,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: stepAssign && invented.length === 0 && Math.abs(sample.step - 0.01) < 1e-12,
    note: 'Stage 787 holds the session theta step (0.01 + idx * 0.002) * gravityPull after uniforms before geometry. Paste not rewritten.',
  };
}

export function compileSessionStage787(source) {
  const hold = noteSessionThetaStep787(source);
  return {
    current: THETA_STEP_787_STAGE,
    session: THETA_STEP_787_SESSION,
    living: THETA_STEP_787_LIVING,
    paste: '2026-10-21 connecting chat',
    hold,
    next: [
      { stage: 788, title: 'hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch' },
      { stage: 789, title: 'hold switch(targetState.geometry) as sole four-case dispatch' },
    ],
  };
}
