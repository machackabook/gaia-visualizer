/** Stage 1002 — session update(t) final lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05. Document only. Do not rewrite the paste. No secrets. */
export const LERP_VECTOR3_HOLD_STAGE = 1002;
export const LERP_VECTOR3_HOLD_SESSION = 'beec41f1';
export const LERP_VECTOR3_HOLD_LIVING = '7cd81012';

const PINNED_LERP = `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`;

export function noteSessionLerpVector3Hold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LERP : String(source);
  const lerpLine = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(text);
  const freshAlloc = /new\s+THREE\.Vector3/.test(text);
  const alphaLiteral = /0\.05/.test(text);
  return {
    stage: LERP_VECTOR3_HOLD_STAGE,
    session: LERP_VECTOR3_HOLD_SESSION,
    living: LERP_VECTOR3_HOLD_LIVING,
    pinned,
    lerpLine,
    freshAlloc,
    alphaLiteral,
    pasteRewritten: false,
    secrets: false,
    ok: lerpLine && freshAlloc && alphaLiteral,
    note: 'session final lerp allocates new THREE.Vector3(x, y, z) with literal alpha 0.05. Living path may reuse scratch without rewrite. Paste not rewritten.',
  };
}

export function compileSessionNextStages(source) {
  const hold = noteSessionLerpVector3Hold(source);
  return {
    current: LERP_VECTOR3_HOLD_STAGE,
    session: LERP_VECTOR3_HOLD_SESSION,
    living: LERP_VECTOR3_HOLD_LIVING,
    paste: '2026-11-01 21:08 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 1003, title: 'hold uniforms write order uTime then uGravity and sources' },
      { stage: 1004, title: 'hold full kernel as pinned session source; living path may optimize allocations without rewrite' },
      { stage: 1005, title: 'hold four-case switch as sole geometry dispatcher for the session paste' },
    ],
  };
}
