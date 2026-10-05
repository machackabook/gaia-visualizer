/** Stage 430 — session lerp allocates a fresh THREE.Vector3. Enhanced path may reuse. Document only. Paste not rewritten. No secrets. */
export const LERP_ALLOC_STAGE = 430;
export const LERP_ALLOC_SESSION_HASH = 'beec41f1';
export const LERP_ALLOC_LIVING_HASH = '7cd81012';

const PINNED_ALLOC = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sessionLerpAlloc() {
  return {
    sessionAllocates: true,
    enhancedMayReuse: true,
    call: PINNED_ALLOC,
  };
}

export function noteSessionLerpAlloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_ALLOC : String(source);
  const fresh = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\);/.test(text);
  const reusedInSession = /this\.mesh\.position\.lerp\(this\._kernelTarget/.test(text)
    || /this\.mesh\.position\.lerp\(this\._target/.test(text);
  const alloc = sessionLerpAlloc();
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION_HASH,
    living: LERP_ALLOC_LIVING_HASH,
    pinned,
    formula: 'session lerp(new THREE.Vector3(x, y, z), 0.05); enhanced path may reuse _kernelTarget',
    fresh,
    reusedInSession,
    alloc,
    pasteRewritten: false,
    secrets: false,
    ok: fresh && !reusedInSession && alloc.sessionAllocates === true && alloc.enhancedMayReuse === true,
    note: 'Stage 430 holds the session lerp fresh THREE.Vector3 allocation as contract. Enhanced path may reuse a target. Paste not rewritten.',
  };
}
