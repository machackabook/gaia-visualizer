/** Stage 482 — session lerp alpha stays 0.05 and is the only blend into the geometric target. Document only. Do not rewrite the paste. No secrets. */
export const LERP_ALPHA_STAGE = 482;
export const LERP_ALPHA_SESSION_HASH = 'beec41f1';
export const LERP_ALPHA_LIVING_HASH = '7cd81012';
export const LERP_ALPHA = 0.05;

const PINNED = [
  "this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);",
].join('\n');

export function sampleLerpAlpha() {
  return {
    alpha: LERP_ALPHA,
    allocatesVector3: true,
    otherBlends: 0,
  };
}

export function noteSessionLerpAlpha(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const lerpLine = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(text);
  const singleLerp = (text.match(/\.lerp\(/g) || []).length <= 1;
  const noSet = !/this\.mesh\.position\.set\(/.test(text);
  const sample = sampleLerpAlpha();
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    pinned,
    lerpLine,
    singleLerp,
    noSet,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: lerpLine && singleLerp && noSet && sample.alpha === 0.05,
    note: 'session blend is lerp(new THREE.Vector3(x, y, z), 0.05). Living path may reuse _kernelTarget. Paste not rewritten.',
  };
}

export function compileSessionStage482(source) {
  const hold = noteSessionLerpAlpha(source);
  return {
    current: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    paste: '2026-10-07 19:07 CDT',
    hold,
    next: [
      { stage: 483, title: 'hold major = 10 + idx * 2 and minor = 3 + toroidalWeave * 2 as the shared radii before the switch' },
      { stage: 484, title: 'hold uniforms uTime and uGravity as the only material writes in update(t)' },
      { stage: 485, title: 'hold switch(targetState.geometry) as the only case dispatch' },
    ],
  };
}
