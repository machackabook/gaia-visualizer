/** Stage 504 — session lerp alpha stays the literal 0.05. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_HOLD_STAGE = 504;
export const LERP_ALPHA_HOLD_SESSION = 'beec41f1';
export const LERP_ALPHA_HOLD_LIVING = '7cd81012';
export const LERP_ALPHA_LITERAL = 0.05;

const PINNED = '    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlphaHold() {
  return {
    alpha: LERP_ALPHA_LITERAL,
    alphaReadsGravity: false,
    allocatesVector3: true,
  };
}

export function noteSessionLerpAlphaHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const lerpLine = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x,\s*y,\s*z\),\s*0\.05\)\s*;/.exec(text);
  const alphaReadsGravity = lerpLine ? /gravityPull|uGravity/.test(lerpLine[0]) : true;
  const sample = sampleLerpAlphaHold();
  return {
    stage: LERP_ALPHA_HOLD_STAGE,
    session: LERP_ALPHA_HOLD_SESSION,
    living: LERP_ALPHA_HOLD_LIVING,
    pinned,
    lerpLine: !!lerpLine,
    alphaReadsGravity,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: !!lerpLine && !alphaReadsGravity && sample.alpha === 0.05 && sample.alphaReadsGravity === false,
    note: 'Session lerp alpha is the literal 0.05. gravityPull does not scale it. Paste still allocates new THREE.Vector3. Paste not rewritten.',
  };
}

export function compileSessionStage504(source) {
  const hold = noteSessionLerpAlphaHold(source);
  return {
    current: LERP_ALPHA_HOLD_STAGE,
    session: LERP_ALPHA_HOLD_SESSION,
    living: LERP_ALPHA_HOLD_LIVING,
    paste: '2026-10-08 20:09 CDT',
    hold,
    next: [
      { stage: 505, title: 'hold major = 10 + idx * 2 assigned before the switch' },
      { stage: 506, title: 'hold minor = 3 + toroidalWeave * 2 beside major, before the switch' },
      { stage: 507, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
