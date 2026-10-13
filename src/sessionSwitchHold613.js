/** Stage 613 — hold switch(targetState.geometry) sole four-case dispatch. Document only. Do not rewrite the paste. No secrets. */
export const SWITCH_HOLD_613_STAGE = 613;
export const SWITCH_HOLD_613_SESSION = 'beec41f1';
export const SWITCH_HOLD_613_LIVING = '7cd81012';
export const SWITCH_HOLD_613_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const SWITCH_HOLD_613_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function noteSessionSwitchHold613(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  const cases = SWITCH_HOLD_613_CASES.filter((name) => hasCase(text, name));
  const invented = SWITCH_HOLD_613_EXTRAS.filter((name) => hasCase(text, name));
  const defaultFall = /case\s*['\"]torus['\"]\s*:\s*default\s*:/.test(text) || /case\s*['\"]torus['\"][\s\S]*?default\s*:/.test(text);
  return {
    stage: SWITCH_HOLD_613_STAGE,
    session: SWITCH_HOLD_613_SESSION,
    living: SWITCH_HOLD_613_LIVING,
    pinned,
    hasSwitch,
    casesPresent: cases,
    soleFour: cases.length === 4,
    defaultFallsToTorus: defaultFall,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: hasSwitch && cases.length === 4 && invented.length === 0,
    note: 'Session switch is sole four-case dispatch on targetState.geometry. Infinity | hamiltonian | triangular | torus/default. No fifth case. From stage 613 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage613(source) {
  const hold = noteSessionSwitchHold613(source);
  return {
    current: SWITCH_HOLD_613_STAGE,
    session: SWITCH_HOLD_613_SESSION,
    living: SWITCH_HOLD_613_LIVING,
    paste: '2026-10-12 20:08 CDT',
    hold,
    next: [
      { stage: 614, title: 'hold phi read-only in shared y formulas' },
      { stage: 615, title: 'hold theta step (0.01 + idx * 0.002) * gravityPull' },
      { stage: 616, title: 'hold final lerp session allocates Vector3 alpha 0.05' },
    ],
  };
}
