/** Stage 616 — hold final lerp session allocates Vector3 alpha 0.05. Document only. Do not rewrite the paste. No secrets. */
export const LERP_ALLOC_616_STAGE = 616;
export const LERP_ALLOC_616_SESSION = 'beec41f1';
export const LERP_ALLOC_616_LIVING = '7cd81012';

const PINNED_LERP = `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`;

export function noteSessionLerpAlloc616(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LERP : String(source);
  const hasLerpAlloc = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\s*\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(text);
  return {
    stage: LERP_ALLOC_616_STAGE,
    session: LERP_ALLOC_616_SESSION,
    living: LERP_ALLOC_616_LIVING,
    pinned,
    hasLerpAlloc,
    pasteRewritten: false,
    secrets: false,
    ok: hasLerpAlloc,
    note: 'Final lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05. From stage 616 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage616(source) {
  const hold = noteSessionLerpAlloc616(source);
  return {
    current: LERP_ALLOC_616_STAGE,
    session: LERP_ALLOC_616_SESSION,
    living: LERP_ALLOC_616_LIVING,
    paste: '2026-10-13 15:06 CDT',
    hold,
    next: [
      { stage: 617, title: 'hold major = 10 + (idx * 2) unread by pull' },
      { stage: 618, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 619, title: 'hold infinity lemniscate denom shared by x and z' },
    ],
  };
}
