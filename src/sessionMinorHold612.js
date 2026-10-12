/** Stage 612 — session minor = 3 + (toroidalWeave * 2) assigned before switch. Document only. Do not rewrite the paste. No secrets. */
export const MINOR_HOLD_612_STAGE = 612;
export const MINOR_HOLD_612_SESSION = 'beec41f1';
export const MINOR_HOLD_612_LIVING = '7cd81012';
export const MINOR_BASE = 3;
export const MINOR_STEP = 2;

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

export function sampleMinor(weave) {
  const minor = MINOR_BASE + (weave * MINOR_STEP);
  return {
    weave,
    base: MINOR_BASE,
    step: MINOR_STEP,
    minor,
    beforeSwitch: true,
  };
}

export function noteSessionMinorHold612(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const minorAssign = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)\s*;/.test(text);
  const beforeSwitch = text.indexOf('let minor = 3 + (state.toroidalWeave * 2);') >= 0
    && text.indexOf('let minor = 3 + (state.toroidalWeave * 2);') < text.indexOf('switch(targetState.geometry)');
  const sample = sampleMinor(1.2);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: MINOR_HOLD_612_STAGE,
    session: MINOR_HOLD_612_SESSION,
    living: MINOR_HOLD_612_LIVING,
    pinned,
    formula: 'minor = 3 + (toroidalWeave * 2)',
    minorAssign,
    beforeSwitch,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: minorAssign && beforeSwitch && invented.length === 0 && sample.minor === 5.4,
    note: 'Session minor radius is 3 + (toroidalWeave * 2) assigned before the four-case switch. Used by infinity y, triangular, and torus tube. Hamiltonian ignores minor. From stage 612 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage612(source) {
  const hold = noteSessionMinorHold612(source);
  return {
    current: MINOR_HOLD_612_STAGE,
    session: MINOR_HOLD_612_SESSION,
    living: MINOR_HOLD_612_LIVING,
    paste: '2026-10-12 18:09 CDT',
    hold,
    next: [
      { stage: 613, title: 'hold switch(targetState.geometry) sole four-case dispatch' },
      { stage: 614, title: 'hold phi read-only in shared y formulas' },
      { stage: 615, title: 'hold theta step (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
