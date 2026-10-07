/** Stage 466 — lerp alpha stays the literal 0.05, unscaled by gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const LERP_ALPHA_STAGE = 466;
export const LERP_ALPHA_SESSION_HASH = 'beec41f1';
export const LERP_ALPHA_LIVING_HASH = '7cd81012';

const LERP_LINE = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
  LERP_LINE,
].join('\n');

export function sampleLerpAlpha(gravityPull) {
  const alpha = 0.05;
  return {
    alpha,
    gravityPull,
    literal: alpha === 0.05,
    scaledByGravity: false,
  };
}

export function noteSessionLerpAlpha(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const literal = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(text);
  const scaled = /\.lerp\([\s\S]{0,180}gravityPull/.test(text);
  const allocates = /new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)/.test(text);
  const sample = sampleLerpAlpha(1);
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    pinned,
    literal,
    unscaled: literal && !scaled,
    allocates,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: literal && !scaled && allocates && sample.alpha === 0.05 && sample.literal && !sample.scaledByGravity,
    note: 'lerp alpha is the literal 0.05. gravityPull does not scale it. Paste still allocates Vector3 inside lerp. Paste not rewritten.',
  };
}

export function compileSessionStage466(source) {
  const hold = noteSessionLerpAlpha(source);
  return {
    current: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    paste: '2026-10-07 10:08 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 467, title: 'hold lemniscate z as sin(theta) * cos(theta) over the same denom' },
      { stage: 468, title: 'hold theta step as the product (0.01 + idx * 0.002) * gravityPull' },
      { stage: 469, title: 'hold uniform writes as uTime then uGravity, in that order' },
    ],
  };
}
