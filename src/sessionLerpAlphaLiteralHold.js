/** Stage 530 — session lerp alpha stays the literal 0.05. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_LITERAL_STAGE = 530;
export const LERP_ALPHA_LITERAL_SESSION = 'beec41f1';
export const LERP_ALPHA_LITERAL_LIVING = '7cd81012';
export const LERP_ALPHA_LITERAL = 0.05;

const PINNED_LERP = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlphaLiteral() {
  return { alpha: LERP_ALPHA_LITERAL, gravityScalesAlpha: false, allocatesVector3: true };
}

export function noteSessionLerpAlphaLiteralHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LERP : String(source);
  const literal = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\);/.test(text);
  const scaled = /lerp\([^\n]*gravityPull/.test(text) || /lerp\([^\n]*toroidalWeave/.test(text);
  const sample = sampleLerpAlphaLiteral();
  return {
    stage: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    pinned,
    literal,
    scaled,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: literal && !scaled && sample.alpha === 0.05 && sample.gravityScalesAlpha === false && sample.allocatesVector3 === true,
    note: 'session lerp alpha stays the literal 0.05. Gravity does not scale it. The paste still allocates THREE.Vector3. Paste not rewritten.',
  };
}

export function compileSessionStage530(source) {
  const hold = noteSessionLerpAlphaLiteralHold(source);
  return {
    current: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    paste: '2026-10-09 16:06 CDT',
    hold,
    next: [
      { stage: 531, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 532, title: 'hold minor as 3 + toroidalWeave * 2 before the switch' },
      { stage: 533, title: 'hold phi read-only in the session paste' },
    ],
  };
}
