/** Stage 611 — session major = 10 + (idx * 2) assigned before switch. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_HOLD_611_STAGE = 611;
export const MAJOR_HOLD_611_SESSION = 'beec41f1';
export const MAJOR_HOLD_611_LIVING = '7cd81012';
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

export function noteSessionMajorHold611(source) {
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
    stage: MAJOR_HOLD_611_STAGE,
    session: MAJOR_HOLD_611_SESSION,
    living: MAJOR_HOLD_611_LIVING,
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
    note: 'Session major radius is 10 + (idx * 2) assigned before the four-case switch. Used by infinity scale, hamiltonian hScale, triangular, and torus. From stage 611 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage611(source) {
  const hold = noteSessionMajorHold611(source);
  return {
    current: MAJOR_HOLD_611_STAGE,
    session: MAJOR_HOLD_611_SESSION,
    living: MAJOR_HOLD_611_LIVING,
    paste: '2026-10-12 17:07 CDT',
    hold,
    next: [
      { stage: 612, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 613, title: 'hold switch(targetState.geometry) sole four-case dispatch' },
      { stage: 614, title: 'hold phi read-only in shared y formulas' },
    ],
  };
}
