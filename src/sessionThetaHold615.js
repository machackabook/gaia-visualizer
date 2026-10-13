/** Stage 615 — hold theta step (0.01 + idx * 0.002) * gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_HOLD_615_STAGE = 615;
export const THETA_HOLD_615_SESSION = 'beec41f1';
export const THETA_HOLD_615_LIVING = '7cd81012';

const PINNED_THETA = `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`;

export function noteSessionThetaHold615(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_THETA : String(source);
  const hasThetaStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull/.test(text);
  return {
    stage: THETA_HOLD_615_STAGE,
    session: THETA_HOLD_615_SESSION,
    living: THETA_HOLD_615_LIVING,
    pinned,
    hasThetaStep,
    pasteRewritten: false,
    secrets: false,
    ok: hasThetaStep,
    note: 'Theta advances by (0.01 + idx * 0.002) * gravityPull. From stage 615 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage615(source) {
  const hold = noteSessionThetaHold615(source);
  return {
    current: THETA_HOLD_615_STAGE,
    session: THETA_HOLD_615_SESSION,
    living: THETA_HOLD_615_LIVING,
    paste: '2026-10-12 22:06 CDT',
    hold,
    next: [
      { stage: 616, title: 'hold final lerp session allocates Vector3 alpha 0.05' },
      { stage: 617, title: 'hold major = 10 + (idx * 2) unread by pull' },
      { stage: 618, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
    ],
  };
}
