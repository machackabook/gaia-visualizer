/** Stage 366 — session infinity denom always >= 1. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_DENOM_STAGE = 366;
export const INFINITY_DENOM_SESSION_HASH = 'beec41f1';
export const INFINITY_DENOM_LIVING_HASH = '7cd81012';
export const INFINITY_DENOM_FLOOR = 1;
export const INFINITY_DENOM_CEILING = 2;
export const INFINITY_DENOM_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionInfinityDenom(theta) {
  const t = Number.isFinite(theta) ? theta : 0;
  const s = Math.sin(t);
  return 1 + s * s;
}

export function noteSessionInfinityDenom(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const infinityBody = caseBody(text, 'infinity');
  const hasDenom = /1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)/.test(infinityBody);
  const divides = /\/\s*denom/.test(infinityBody);
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i <= 64; i++) {
    const d = sessionInfinityDenom((i / 64) * Math.PI * 2);
    if (d < min) min = d;
    if (d > max) max = d;
  }
  const invented = INFINITY_DENOM_EXTRAS.filter((name) => hasCase(text, name));
  const neverZero = min >= INFINITY_DENOM_FLOOR && max <= INFINITY_DENOM_CEILING + 1e-12;
  return {
    stage: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION_HASH,
    living: INFINITY_DENOM_LIVING_HASH,
    pinned,
    formula: '1 + sin(theta)^2',
    hasSessionDenom: hasDenom,
    dividesByDenom: divides,
    floor: INFINITY_DENOM_FLOOR,
    ceiling: INFINITY_DENOM_CEILING,
    sampledMin: min,
    sampledMax: max,
    neverZero,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasDenom && divides && neverZero && invented.length === 0,
    note: 'Session infinity denom is 1 + sin(theta)^2, so it stays in [1, 2] and the lemniscate division cannot hit zero. Paste not rewritten. No new session case.',
  };
}
