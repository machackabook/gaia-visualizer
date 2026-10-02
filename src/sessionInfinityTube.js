/** Stage 371 — session infinity y shares the torus tube formula. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_TUBE_STAGE = 371;
export const INFINITY_TUBE_SESSION_HASH = 'beec41f1';
export const INFINITY_TUBE_LIVING_HASH = '7cd81012';
export const INFINITY_TUBE_FORMULA = 'minor * sin(phi) * sin(t * 0.5 + idx)';
export const INFINITY_TUBE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

const TUBE = /minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/;

export function sessionInfinityTube(minor, phi, t, idx) {
  const m = Number.isFinite(minor) ? minor : 3;
  const p = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  return m * Math.sin(p) * Math.sin(time * 0.5 + i);
}

export function noteSessionInfinityTube(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const infinity = caseBody(text, 'infinity');
  const torus = caseBody(text, 'torus') || (text.split(/case\s*['"]torus['"]/)[1] || '');
  const infinityTube = TUBE.test(infinity);
  const torusTube = TUBE.test(torus);
  const sample = sessionInfinityTube(3, Math.PI / 2, 0, 1);
  const shared = infinityTube && torusTube;
  const invented = INFINITY_TUBE_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: INFINITY_TUBE_STAGE,
    session: INFINITY_TUBE_SESSION_HASH,
    living: INFINITY_TUBE_LIVING_HASH,
    pinned,
    formula: INFINITY_TUBE_FORMULA,
    infinityTube,
    torusTube,
    shared,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: shared && invented.length === 0 && sample === 3 * Math.sin(0.5 + 1),
    note: 'Session infinity y is the same tube term as torus default: minor * sin(phi) * sin(t * 0.5 + idx). Phi is unread. Living path already matches. Paste not rewritten.',
  };
}
