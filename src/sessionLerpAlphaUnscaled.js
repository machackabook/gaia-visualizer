/** Stage 440 — lerp alpha stays 0.05 and is not scaled by gravityPull. Paste not rewritten. No secrets. */
export const LERP_ALPHA_STAGE = 440;
export const LERP_ALPHA_SESSION_HASH = 'beec41f1';
export const LERP_ALPHA_LIVING_HASH = '7cd81012';
export const LERP_ALPHA = 0.05;

export function noteSessionLerpAlphaUnscaled(source) {
  const pinned = source == null;
  const text = pinned
    ? 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);'
    : String(source);
  const call = (text.match(/position\.lerp\([^;]+;/) || [''])[0];
  const alphaLiteral = /,\s*0\.05\s*\)/.test(call);
  const notScaled = !/gravityPull/.test(call) && !/\*\s*0\.05|0\.05\s*\*/.test(call);
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    pinned,
    alpha: LERP_ALPHA,
    alphaLiteral,
    notScaled,
    pasteRewritten: false,
    secrets: false,
    ok: alphaLiteral && notScaled && LERP_ALPHA === 0.05,
    note: 'Stage 440 holds lerp alpha at 0.05, not scaled by gravityPull. Paste not rewritten.',
  };
}
