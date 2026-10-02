/** Stage 372 — session default falls through to the torus body. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_FALLTHROUGH_STAGE = 372;
export const TORUS_FALLTHROUGH_SESSION_HASH = 'beec41f1';
export const TORUS_FALLTHROUGH_LIVING_HASH = '7cd81012';
export const TORUS_FALLTHROUGH_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

const FALLTHROUGH = /case\s*['"]torus['"]\s*default\s*:/;
const BODY = /\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)\s*\*\s*Math\.cos\(this\.theta\)/;

export function sessionTorusBody(major, minor, phi, theta, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const p = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  const tube = r * Math.cos(p);
  return {
    x: (R + tube) * Math.cos(th),
    z: (R + tube) * Math.sin(th),
    y: r * Math.sin(p) * Math.sin(time * 0.5 + i),
  };
}

export function noteSessionTorusFallthrough(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const fallthrough = FALLTHROUGH.test(text);
  const body = BODY.test(text);
  const sample = sessionTorusBody(10, 3, 0, 0, 0, 0);
  const invented = TORUS_FALLTHROUGH_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: TORUS_FALLTHROUGH_STAGE,
    session: TORUS_FALLTHROUGH_SESSION_HASH,
    living: TORUS_FALLTHROUGH_LIVING_HASH,
    pinned,
    fallthrough,
    body,
    sample,
    unknownUsesDefault: true,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: fallthrough && body && invented.length === 0 && sample.x === 13 && sample.y === 0 && sample.z === 0,
    note: 'Session case torus falls through to default and shares one body. Unknown geometry uses that body. Phi is unread. Living path already matches. Paste not rewritten.',
  };
}
