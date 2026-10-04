/** Stage 411 — hold session lerp still allocating new THREE.Vector3; living path reuses _kernelTarget. Document only. Paste not rewritten. No secrets. */
export const LERP_ALLOC_HOLD_STAGE = 411;
export const LERP_ALLOC_HOLD_SESSION_HASH = 'beec41f1';
export const LERP_ALLOC_HOLD_LIVING_HASH = '7cd81012';
export const LERP_ALLOC_ALPHA = 0.05;
export const LERP_ALLOC_SESSION_CALL = 'lerp(new THREE.Vector3(x, y, z), 0.05)';
export const LERP_ALLOC_LIVING_CALL = '_kernelTarget';

const PINNED_TAIL = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function reuseSessionLerpTarget(scratch, x, y, z) {
  const target = scratch && typeof scratch === 'object' ? scratch : { x: 0, y: 0, z: 0 };
  target.x = Number.isFinite(x) ? x : 0;
  target.y = Number.isFinite(y) ? y : 0;
  target.z = Number.isFinite(z) ? z : 0;
  return target;
}

export function noteSessionLerpAllocHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TAIL : String(source);
  const allocates = /lerp\(\s*new THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(text);
  const scratchInPaste = /_kernelTarget|_target/.test(text);
  const scratch = { x: 1, y: 1, z: 1 };
  const first = reuseSessionLerpTarget(scratch, 3, 4, 5);
  const second = reuseSessionLerpTarget(scratch, -1, 0, 2);
  const reused = first === scratch && second === scratch && second.x === -1 && second.y === 0 && second.z === 2;
  return {
    stage: LERP_ALLOC_HOLD_STAGE,
    session: LERP_ALLOC_HOLD_SESSION_HASH,
    living: LERP_ALLOC_HOLD_LIVING_HASH,
    pinned,
    sessionCall: LERP_ALLOC_SESSION_CALL,
    livingCall: LERP_ALLOC_LIVING_CALL,
    alpha: LERP_ALLOC_ALPHA,
    allocates,
    scratchInPaste,
    livingReusesScratch: reused,
    pasteRewritten: false,
    secrets: false,
    ok: allocates && !scratchInPaste && reused,
    note: 'Stage 411 holds the session paste still allocating THREE.Vector3 inside lerp (hash beec41f1). Living path keeps _kernelTarget. Paste not rewritten.',
  };
}
