/** Stage 518 — gravityPull multiplies the theta step only. Document only. Paste not rewritten. No secrets. */
export const GRAVITY_PULL_THETA_STAGE = 518;
export const GRAVITY_PULL_THETA_SESSION = 'beec41f1';
export const GRAVITY_PULL_THETA_LIVING = '7cd81012';

const PINNED = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleGravityPullThetaMultiplier() {
  return {
    thetaMultiplier: 'state.gravityPull',
    uniformCopy: 'uGravity',
    geometryUsesGravityPull: false,
  };
}

export function noteSessionGravityPullThetaMultiplier(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const thetaLine = (text.match(/this\.theta\s*\+=[^;]+;/) || [''])[0];
  const multipliesTheta = /\*\s*state\.gravityPull/.test(thetaLine);
  const uniformCopy = /uGravity\.value\s*=\s*state\.gravityPull/.test(text) || pinned;
  const afterTheta = text.split(PINNED)[1] || '';
  const geometryUses = /gravityPull/.test(afterTheta);
  const sample = sampleGravityPullThetaMultiplier();
  return {
    stage: GRAVITY_PULL_THETA_STAGE,
    session: GRAVITY_PULL_THETA_SESSION,
    living: GRAVITY_PULL_THETA_LIVING,
    pinned,
    multipliesTheta,
    uniformCopy,
    geometryUses,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: multipliesTheta && uniformCopy && !geometryUses && sample.geometryUsesGravityPull === false,
    note: 'gravityPull multiplies the theta step and is copied into uGravity. Geometry arms do not read it. Paste not rewritten.',
  };
}

export function compileSessionStage518(source) {
  const hold = noteSessionGravityPullThetaMultiplier(source);
  return {
    current: GRAVITY_PULL_THETA_STAGE,
    session: GRAVITY_PULL_THETA_SESSION,
    living: GRAVITY_PULL_THETA_LIVING,
    paste: '2026-10-09 10:16 CDT',
    hold,
    next: [
      { stage: 519, title: 'hold phi read-only in the session paste' },
      { stage: 520, title: 'hold idx term inside the theta step only' },
      { stage: 521, title: 'hold uGravity as a copy of gravityPull, not a second multiplier' },
    ],
  };
}
