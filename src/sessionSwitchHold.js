/** Stage 387 — hold the four-case session switch unless the paste adds a case. Document only. No secrets. */
export const SWITCH_HOLD_STAGE = 387;
export const SWITCH_HOLD_SESSION_HASH = 'beec41f1';
export const SWITCH_HOLD_LIVING_HASH = '7cd81012';
export const SWITCH_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const SWITCH_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionSwitchHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const present = SWITCH_CASES.filter((name) => hasCase(text, name));
  const invented = SWITCH_EXTRAS.filter((name) => hasCase(text, name));
  const torusDefault = /case\s*['"]torus['"]\s*:\s*default\s*:/.test(text);
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  return {
    stage: SWITCH_HOLD_STAGE,
    session: SWITCH_HOLD_SESSION_HASH,
    living: SWITCH_HOLD_LIVING_HASH,
    pinned,
    required: SWITCH_CASES,
    present,
    inventedCases: invented,
    torusIsDefault: torusDefault,
    hasSwitch,
    sessionSwitchUntouched: invented.length === 0 && present.length === 4,
    pasteRewritten: false,
    secrets: false,
    ok: hasSwitch && torusDefault && present.length === 4 && invented.length === 0,
    note: 'Stage 387 holds infinity | hamiltonian | triangular | torus/default. Extras stay runtime-only. Paste not rewritten.',
  };
}
