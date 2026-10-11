/** Stage 581 — hold final lerp session allocates Vector3 alpha 0.05. Document only. No secrets. */
export const LERP_ALLOC_STAGE = 581;
export const LERP_ALLOC_SESSION = 'beec41f1';
export const LERP_ALLOC_LIVING = '7cd81012';

const PINNED = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlloc() {
  return { allocates: true, alpha: 0.05, livingReuses: true };
}

export function noteSessionLerpAlloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const allocates = /new\s+THREE\.Vector3\s*\(\s*x\s*,\s*y\s*,\s*z\s*\)/.test(text);
  const alphaHeld = /0\.05/.test(text);
  const isLerp = /\.position\.lerp\(/.test(text);
  const scratchInPaste = /_kernelTarget|reuseSessionLerpTarget/.test(text);
  const sampleOk = allocates && alphaHeld && isLerp && !scratchInPaste;
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION,
    living: LERP_ALLOC_LIVING,
    pinned,
    allocates,
    alphaHeld,
    isLerp,
    scratchInPaste,
    sampleOk,
    pasteRewritten: false,
    secrets: false,
    ok: sampleOk,
    note: 'Session paste allocates new THREE.Vector3 inside lerp with alpha 0.05. Living path reuses scratch. Paste not rewritten.',
  };
}

export function compileSessionStage581(source) {
  const hold = noteSessionLerpAlloc(source);
  return {
    current: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION,
    living: LERP_ALLOC_LIVING,
    paste: '2026-10-11 16:08 CDT',
    hold,
    next: [
      { stage: 582, title: 'hold major = 10 + (idx * 2) before switch' },
      { stage: 583, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 584, title: 'hold theta step (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
