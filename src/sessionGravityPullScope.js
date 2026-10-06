/** Stage 456 — gravityPull multiplies the theta step only. Document only. Do not rewrite the paste. No secrets. */
export const GRAVITY_SCOPE_STAGE = 456;
export const GRAVITY_SCOPE_SESSION_HASH = 'beec41f1';
export const GRAVITY_SCOPE_LIVING_HASH = '7cd81012';
export const GRAVITY_SCOPE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
  'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionGravityPullScope(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const timeAt = text.indexOf('uTime');
  const gravAt = text.indexOf('uGravity');
  const uniformOrder = timeAt >= 0 && gravAt > timeAt;
  const thetaOnly =
    /this\.theta\s*\+=\s*\(0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const majorLine = (text.match(/let\s+major\s*=\s*[^;]+;/) || [''])[0];
  const minorLine = (text.match(/let\s+minor\s*=\s*[^;]+;/) || [''])[0];
  const lerpLine = (text.match(/lerp\([^)]*\)\s*;/) || [''])[0];
  const majorClean = /let\s+major\s*=\s*10\s*\+\s*\(this\.idx\s*\*\s*2\)\s*;/.test(majorLine) && !/gravityPull/.test(majorLine);
  const minorClean =
    /let\s+minor\s*=\s*3\s*\+\s*\(state\.toroidalWeave\s*\*\s*2\)\s*;/.test(minorLine) && !/gravityPull/.test(minorLine);
  const lerpClean = /lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(lerpLine) && !/gravityPull/.test(lerpLine);
  const uniformAssign = /uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  const invented = GRAVITY_SCOPE_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: GRAVITY_SCOPE_STAGE,
    session: GRAVITY_SCOPE_SESSION_HASH,
    living: GRAVITY_SCOPE_LIVING_HASH,
    pinned,
    uniformOrder,
    uniformAssign,
    thetaOnly,
    majorClean,
    minorClean,
    lerpClean,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: uniformOrder && uniformAssign && thetaOnly && majorClean && minorClean && lerpClean && invented.length === 0,
    note: 'gravityPull writes uGravity and multiplies the theta step only. major, minor, and lerp alpha 0.05 stay free of it. Paste not rewritten.',
  };
}

export function compileSessionStage456(source) {
  const hold = noteSessionGravityPullScope(source);
  return {
    current: GRAVITY_SCOPE_STAGE,
    session: GRAVITY_SCOPE_SESSION_HASH,
    living: GRAVITY_SCOPE_LIVING_HASH,
    paste: '2026-10-06 16:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 457, title: 'hold infinity y identical to torus y, no scale or denom' },
      { stage: 458, title: 'hold major and minor assigned before the geometry switch' },
      { stage: 459, title: 'hold hamiltonian y lift sin(t)*2 independent of hScale' },
    ],
  };
}
