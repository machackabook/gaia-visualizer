/** Stage 606 — session paste allocates new THREE.Vector3 inside lerp with alpha 0.05. Document only. Paste not rewritten. No secrets. */
export const PASTE_LERP_STAGE = 606;
export const PASTE_LERP_SESSION = 'beec41f1';
export const PASTE_LERP_LIVING = '7cd81012';

const PINNED = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function samplePasteLerp() {
  return {
    allocatesNewVector3: true,
    alpha: 0.05,
    livingUsesKernelTarget: true,
  };
}

export function noteSessionPasteLerp(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const hasLerp = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\);/.test(text);
  const sample = samplePasteLerp();
  return {
    stage: PASTE_LERP_STAGE,
    session: PASTE_LERP_SESSION,
    living: PASTE_LERP_LIVING,
    pinned,
    hasLerp,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasLerp && sample.alpha === 0.05,
    note: 'Chat paste allocates new THREE.Vector3 inside position.lerp with alpha 0.05. Living path reuses _kernelTarget. Paste not rewritten.',
  };
}

export function compileSessionStage606(source) {
  const hold = noteSessionPasteLerp(source);
  return {
    current: PASTE_LERP_STAGE,
    session: PASTE_LERP_SESSION,
    living: PASTE_LERP_LIVING,
    paste: '2026-10-12 11:09 CDT',
    hold,
    next: [
      { stage: 607, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 608, title: 'hold theta step multiplier as state.gravityPull' },
      { stage: 609, title: 'hold uniforms written uTime then uGravity' },
    ],
  };
}
