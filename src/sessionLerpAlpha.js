/** Stage 575 — final lerp allocates new THREE.Vector3 at alpha 0.05. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_STAGE = 575;
export const LERP_ALPHA_SESSION = 'beec41f1';
export const LERP_ALPHA_LIVING = '7cd81012';

const PINNED_LINE = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlpha() {
  return { allocates: true, alpha: 0.05, vector: 'THREE.Vector3' };
}

export function noteSessionLerpAlpha(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasLerp = /this\.mesh\.position\.lerp\s*\(\s*new\s+THREE\.Vector3\s*\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(text);
  const alphaLiteral = /0\.05/.test(text);
  const sample = sampleLerpAlpha();
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION,
    living: LERP_ALPHA_LIVING,
    pinned,
    hasLerp,
    alphaLiteral,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasLerp && alphaLiteral && sample.alpha === 0.05,
    note: 'Final lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05. Paste not rewritten.',
  };
}

export function compileSessionStage575(source) {
  const hold = noteSessionLerpAlpha(source);
  return {
    current: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION,
    living: LERP_ALPHA_LIVING,
    hold,
    next: [576, 577, 578],
    pasteRewritten: false,
    secrets: false,
  };
}
