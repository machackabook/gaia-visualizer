/** Stage 597 — hold sole four-case switch on targetState.geometry. Document only. Do not rewrite the paste. No secrets. */
export const SWITCH_HOLD_STAGE = 597;
export const SWITCH_HOLD_SESSION_HASH = 'beec41f1';
export const SWITCH_HOLD_LIVING_HASH = '7cd81012';
export const SWITCH_HOLD_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const SWITCH_HOLD_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
        case 'torus':
        default:
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
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
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  const cases = SWITCH_HOLD_CASES.filter((name) => hasCase(text, name));
  const invented = SWITCH_HOLD_EXTRAS.filter((name) => hasCase(text, name));
  const defaultFall = /case\s*['\"]torus['\"]\s*:\s*default\s*:/.test(text) || /case\s*['\"]torus['\"][\s\S]*?default\s*:/.test(text);
  return {
    stage: SWITCH_HOLD_STAGE,
    session: SWITCH_HOLD_SESSION_HASH,
    living: SWITCH_HOLD_LIVING_HASH,
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
    note: 'Stage 597 holds sole four-case switch on targetState.geometry. No fifth case. Paste not rewritten.',
  };
}
