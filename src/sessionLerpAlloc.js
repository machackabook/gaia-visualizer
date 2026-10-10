/** Stage 551 — hold lerp alpha as literal 0.05 and new THREE.Vector3 allocation inside the lerp call. Document only. Do not rewrite the paste. No secrets. */
export const LERP_ALLOC_STAGE = 551;
export const LERP_ALLOC_SESSION_HASH = 'beec41f1';
export const LERP_ALLOC_LIVING_HASH = '7cd81012';
export const LERP_ALPHA = 0.05;

const PINNED = [
  'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);',
].join('\n');

export function sampleLerpAlloc() {
  return {
    alpha: LERP_ALPHA,
    allocatesVector3: true,
    livingReusesTarget: true,
  };
}

export function noteSessionLerpAlloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const alloc = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\s*\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)\s*;/.test(text);
  const alphaLiteral = /0\.05/.test(text) && !/gravityPull/.test(text.match(/lerp\([^)]+\)/)?.[0] || '');
  const sample = sampleLerpAlloc();
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION_HASH,
    living: LERP_ALLOC_LIVING_HASH,
    pinned,
    alloc,
    alphaLiteral,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: alloc && alphaLiteral && sample.allocatesVector3,
    note: 'session paste allocates new THREE.Vector3 inside lerp and uses literal alpha 0.05. Living path reuses _kernelTarget. Paste not rewritten.',
  };
}

export function compileSessionStage551(source) {
  const hold = noteSessionLerpAlloc(source);
  return {
    current: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION_HASH,
    living: LERP_ALLOC_LIVING_HASH,
    paste: '2026-10-10 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 552, title: 'hold uniform write order uTime then uGravity' },
      { stage: 553, title: 'hold phi as read-only in session paste (no phi +=)' },
      { stage: 554, title: 'hold major and minor computed before switch' },
    ],
  };
}
