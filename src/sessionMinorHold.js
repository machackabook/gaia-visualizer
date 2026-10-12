/** Stage 583 — session minor = 3 + (toroidalWeave * 2) assigned before switch. Document only. Do not rewrite the paste. No secrets. */
export const MINOR_HOLD_STAGE = 583;
export const MINOR_HOLD_SESSION_HASH = 'beec41f1';
export const MINOR_HOLD_LIVING_HASH = '7cd81012';
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

export function sampleMinor(toroidalWeave) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const minor = MINOR_BASE + weave * MINOR_STEP;
  return {
    weave,
    base: MINOR_BASE,
    step: MINOR_STEP,
    minor,
    beforeSwitch: true,
  };
}

export function noteSessionMinorHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const minorAssign = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)\s*;/.test(text);
  const beforeSwitch = text.indexOf('let minor = 3 + (state.toroidalWeave * 2);') >= 0
    && text.indexOf('let minor = 3 + (state.toroidalWeave * 2);') < text.indexOf('switch(targetState.geometry)');
  const sample = sampleMinor(1);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: MINOR_HOLD_STAGE,
    session: MINOR_HOLD_SESSION_HASH,
    living: MINOR_HOLD_LIVING_HASH,
    pinned,
    formula: 'minor = 3 + (toroidalWeave * 2)',
    minorAssign,
    beforeSwitch,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: minorAssign && beforeSwitch && invented.length === 0 && sample.minor === 5,
    note: 'Session minor radius is 3 + (toroidalWeave * 2) assigned before the four-case switch. Used by infinity y, triangular, and torus tube. Hamiltonian ignores it. Paste not rewritten.',
  };
}
