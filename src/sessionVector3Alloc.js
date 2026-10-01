/** Stage 363 — residual session Vector3 allocation note. Document only. Do not rewrite the paste. No secrets. */
export const VECTOR3_ALLOC_STAGE = 363;
export const VECTOR3_ALLOC_SESSION_HASH = 'beec41f1';
export const VECTOR3_ALLOC_LIVING_HASH = '7cd81012';
export const VECTOR3_ALLOC_ALPHA = 0.05;
export const VECTOR3_ALLOC_SESSION_CALL = 'lerp(new THREE.Vector3(x, y, z), 0.05)';
export const VECTOR3_ALLOC_LIVING_CALL = 'reuseSessionLerpTarget';
export const VECTOR3_ALLOC_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const VECTOR3_ALLOC_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_PASTE = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionVector3Alloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const allocates = /new\s+THREE\.Vector3\s*\(/.test(text);
  const alphaHeld = /0\.05/.test(text);
  const scratchInPaste = /reuseSessionLerpTarget|_kernelTarget/.test(text);
  const invented = VECTOR3_ALLOC_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: VECTOR3_ALLOC_STAGE,
    session: VECTOR3_ALLOC_SESSION_HASH,
    living: VECTOR3_ALLOC_LIVING_HASH,
    sessionCall: VECTOR3_ALLOC_SESSION_CALL,
    livingCall: VECTOR3_ALLOC_LIVING_CALL,
    alpha: VECTOR3_ALLOC_ALPHA,
    pinned,
    sessionAllocatesVector3: allocates,
    alphaHeld,
    livingReusesScratch: true,
    scratchInPaste,
    perFrameAlloc: allocates && !scratchInPaste,
    geometries: VECTOR3_ALLOC_GEOMETRIES.slice(),
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    secrets: false,
    ok: allocates && alphaHeld && !scratchInPaste && invented.length === 0,
    note: 'Session paste still allocates THREE.Vector3 inside update(t). Living path reuses a scratch target. Paste not rewritten. No new session case.',
  };
}
