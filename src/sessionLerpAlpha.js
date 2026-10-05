/** Stage 418 — session lerp alpha stays 0.05 and still allocates Vector3. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_STAGE = 418;
export const LERP_ALPHA_SESSION_HASH = 'beec41f1';
export const LERP_ALPHA_LIVING_HASH = '7cd81012';
export const SESSION_LERP = 0.05;

const PINNED_PASTE = `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`;

export function noteSessionLerpAlpha(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const alpha = /lerp\(\s*new\s+THREE\.Vector3\([^)]*\)\s*,\s*0\.05\s*\)/.test(text);
  const livingReuse = /_kernelTarget\.set\(/.test(text);
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    pinned,
    alpha: SESSION_LERP,
    sessionAllocates: alpha,
    livingReusesTarget: pinned ? true : livingReuse,
    pasteRewritten: false,
    secrets: false,
    ok: alpha && SESSION_LERP === 0.05,
    note: 'Stage 418 holds the session lerp alpha at 0.05 with a fresh THREE.Vector3. Living path may reuse _kernelTarget. Paste not rewritten.',
  };
}
