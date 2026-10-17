/** Stage 684 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05. Document only. Do not rewrite the paste. No secrets. */
export const LERP_ALLOC_STAGE = 684;
export const LERP_ALLOC_SESSION_HASH = 'beec41f1';
export const LERP_ALLOC_LIVING_HASH = '7cd81012';
export const SESSION_LERP_ALPHA = 0.05;

const PINNED_LERP = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function noteSessionLerpAlloc684(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LERP : String(source);
  const hasAlloc = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\s*\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(text);
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION_HASH,
    living: LERP_ALLOC_LIVING_HASH,
    pinned,
    alpha: SESSION_LERP_ALPHA,
    allocatesFreshVector3: hasAlloc,
    pasteRewritten: false,
    secrets: false,
    ok: hasAlloc,
    note: 'Stage 684 holds the session lerp that allocates a fresh THREE.Vector3(x, y, z) with literal alpha 0.05. Living path may reuse a target. Paste not rewritten.',
  };
}
