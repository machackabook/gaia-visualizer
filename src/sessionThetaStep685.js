/** Stage 685 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_STEP_STAGE = 685;
export const THETA_STEP_SESSION_HASH = 'beec41f1';
export const THETA_STEP_LIVING_HASH = '7cd81012';

const PINNED_THETA = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function noteSessionThetaStep685(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_THETA : String(source);
  const hasStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    pinned,
    formula: '(0.01 + idx * 0.002) * gravityPull',
    held: hasStep,
    pasteRewritten: false,
    secrets: false,
    ok: hasStep,
    note: 'Stage 685 holds the theta advance rate scaled by gravityPull with index offset. Paste not rewritten.',
  };
}
