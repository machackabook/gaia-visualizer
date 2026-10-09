/** Stage 521 — uGravity is a copy of gravityPull, not a second multiplier. Document only. Paste not rewritten. No secrets. */
export const GRAVITY_COPY_STAGE = 521;
export const GRAVITY_COPY_SESSION = 'beec41f1';
export const GRAVITY_COPY_LIVING = '7cd81012';

const PINNED_COPY = 'this.material.uniforms.uGravity.value = state.gravityPull;';
const PINNED_THETA = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleGravityCopy() {
  return {
    uniform: 'uGravity',
    source: 'state.gravityPull',
    thetaMultiplier: 'state.gravityPull',
    secondMultiplier: false,
  };
}

export function noteSessionGravityCopy(source) {
  const pinned = source == null;
  const text = pinned ? `${PINNED_COPY}\n${PINNED_THETA}` : String(source);
  const copyLine = (text.match(/uGravity\.value\s*=\s*[^;]+;/) || [''])[0];
  const thetaLine = (text.match(/this\.theta\s*\+=[^;]+;/) || [''])[0];
  const copiesPull = /state\.gravityPull/.test(copyLine);
  const thetaUsesPull = /state\.gravityPull/.test(thetaLine);
  const thetaUsesUniform = /uGravity/.test(thetaLine);
  const sample = sampleGravityCopy();
  return {
    stage: GRAVITY_COPY_STAGE,
    session: GRAVITY_COPY_SESSION,
    living: GRAVITY_COPY_LIVING,
    pinned,
    copiesPull,
    thetaUsesPull,
    thetaUsesUniform,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: copiesPull && thetaUsesPull && !thetaUsesUniform && sample.secondMultiplier === false,
    note: 'uGravity copies state.gravityPull. The theta step multiplies state.gravityPull, not uGravity. Paste not rewritten.',
  };
}

export function compileSessionStage521(source) {
  const hold = noteSessionGravityCopy(source);
  return {
    current: GRAVITY_COPY_STAGE,
    session: GRAVITY_COPY_SESSION,
    living: GRAVITY_COPY_LIVING,
    paste: '2026-10-09 11:07 CDT',
    hold,
    next: [
      { stage: 522, title: 'hold major idx term as idx * 2, distinct from the theta 0.002 term' },
      { stage: 523, title: 'hold minor as 3 + toroidalWeave * 2, unread by gravityPull' },
      { stage: 524, title: 'hold infinity scale as major * 1.5, unread by the gravity copy' },
    ],
  };
}
