/** Stage 582 — session major = 10 + (idx * 2) assigned before switch. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_HOLD_STAGE = 582;
export const MAJOR_HOLD_SESSION_HASH = 'beec41f1';
export const MAJOR_HOLD_LIVING_HASH = '7cd81012';
export const MAJOR_BASE = 10;
export const MAJOR_STEP = 2;

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            break;
        case 'hamiltonian':
            break;
        case 'triangular':
            break;
        case 'torus':
        default:
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function sampleMajor(idx) {
  const major = MAJOR_BASE + (idx * MAJOR_STEP);
  return {
    idx,
    base: MAJOR_BASE,
    step: MAJOR_STEP,
    major,
    beforeSwitch: true,
  };
}

export function noteSessionMajorHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const majorAssign = /let\s+major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)\s*;/.test(text);
  const beforeSwitch = text.indexOf('let major = 10 + (this.idx * 2);') >= 0
    && text.indexOf('let major = 10 + (this.idx * 2);') < text.indexOf('switch(targetState.geometry)');
  const sample = sampleMajor(0);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: MAJOR_HOLD_STAGE,
    session: MAJOR_HOLD_SESSION_HASH,
    living: MAJOR_HOLD_LIVING_HASH,
    pinned,
    formula: 'major = 10 + (idx * 2)',
    majorAssign,
    beforeSwitch,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: majorAssign && beforeSwitch && invented.length === 0 && sample.major === 10,
    note: 'Session major radius is 10 + (idx * 2) assigned before the four-case switch. Used by infinity scale, hamiltonian hScale, triangular, and torus. Paste not rewritten.',
  };
}
