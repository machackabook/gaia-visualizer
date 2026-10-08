/** Stage 488 — session lerp allocates new THREE.Vector3 at alpha 0.05. Document only. No secrets. */
export const LERP_ALLOC_STAGE = 488;
export const LERP_ALLOC_SESSION = 'beec41f1';
export const LERP_ALLOC_LIVING = '7cd81012';

const PINNED = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function noteSessionLerpAlloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const alloc = /this\.mesh\.position\.lerp\(new\s+THREE\.Vector3\(x,\s*y,\s*z\),\s*0\.05\)\s*;/.test(text);
  const alpha = /lerp\([^)]*,\s*0\.05\s*\)/.test(text);
  const livingReuse = /_kernelTarget/.test(text);
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION,
    living: LERP_ALLOC_LIVING,
    pinned,
    alloc,
    alpha,
    livingReuse,
    pasteRewritten: false,
    secrets: false,
    ok: alloc && alpha,
    note: 'session paste allocates new THREE.Vector3 inside lerp at alpha 0.05. Living path keeps _kernelTarget. Paste not rewritten.',
  };
}

export function compileSessionStage488(source) {
  const hold = noteSessionLerpAlloc(source);
  return {
    current: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION,
    living: LERP_ALLOC_LIVING,
    paste: '2026-10-07 22:06 CDT',
    hold,
    next: [
      { stage: 489, title: 'hold torus tube (major + minor * cos(phi)) on x and z only' },
      { stage: 490, title: 'hold hamiltonian lift sin(t) * 2 unread by hScale' },
      { stage: 491, title: 'hold minor = 3 + toroidalWeave * 2 as the only weave consumer in the radii block' },
    ],
  };
}
