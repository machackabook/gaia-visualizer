/** Stage 497 — session lerp alpha stays the literal 0.05 and is not scaled by gravityPull, weave, or t. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_LITERAL_STAGE = 497;
export const LERP_ALPHA_LITERAL_SESSION = 'beec41f1';
export const LERP_ALPHA_LITERAL_LIVING = '7cd81012';
export const LERP_ALPHA_LITERAL = 0.05;

const PINNED = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlphaLiteral() {
  return {
    alpha: LERP_ALPHA_LITERAL,
    scaledByGravity: false,
    scaledByWeave: false,
    scaledByTime: false,
    allocatesVector3: true,
  };
}

export function noteSessionLerpAlphaLiteral(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const call = (text.match(/this\.mesh\.position\.lerp\([^;]+;/) || [''])[0];
  const literalLine = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(call);
  const notScaled = !/gravityPull|toroidalWeave|\*\s*0\.05|0\.05\s*\*/.test(call);
  const singleLerp = (text.match(/\.lerp\(/g) || []).length <= 1;
  const noSet = !/this\.mesh\.position\.set\(/.test(text);
  const sample = sampleLerpAlphaLiteral();
  return {
    stage: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    pinned,
    literalLine,
    notScaled,
    singleLerp,
    noSet,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: literalLine && notScaled && singleLerp && noSet && sample.alpha === 0.05,
    note: 'session blend is lerp(new THREE.Vector3(x, y, z), 0.05). Alpha is the literal 0.05, unread by gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage497(source) {
  const hold = noteSessionLerpAlphaLiteral(source);
  return {
    current: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    paste: '2026-10-08 13:06 CDT',
    hold,
    next: [
      { stage: 498, title: 'hold lemniscate scale as major * 1.5, unread by minor' },
      { stage: 499, title: 'hold default as sharing the torus tube, not a fifth session case' },
      { stage: 500, title: 'hold phi still: session paste does not increment phi' },
    ],
  };
}
