/** Stage 373 — session triangular minor ripple keeps raw theta * 5. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_RIPPLE_STAGE = 373;
export const TRIANGULAR_RIPPLE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_RIPPLE_LIVING_HASH = '7cd81012';
export const TRIANGULAR_RIPPLE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
        case 'torus':
        default:
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

function hasCase(source, name) {
  return new RegExp("case\\s*['\\\"]" + name + "['\\\"]").test(source || '');
}

const RAW_RIPPLE = /minor\s*\*\s*Math\.cos\(this\.theta\s*\*\s*5\)[\s\S]*minor\s*\*\s*Math\.sin\(this\.theta\s*\*\s*5\)/;
const FLOORED_RIPPLE = /Math\.cos\(tAngle\s*\*\s*5\)|Math\.sin\(tAngle\s*\*\s*5\)/;
const SECTOR = /Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)/;

export function sessionTriangularRipple(major, minor, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const th = Number.isFinite(theta) ? theta : 0;
  const tAngle = Math.floor(th / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3);
  return {
    sector: tAngle,
    rippleX: r * Math.cos(th * 5),
    rippleZ: r * Math.sin(th * 5),
    x: R * Math.cos(tAngle) + r * Math.cos(th * 5),
    z: R * Math.sin(tAngle) + r * Math.sin(th * 5),
  };
}

export function noteSessionTriangularRipple(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const raw = RAW_RIPPLE.test(text);
  const floored = FLOORED_RIPPLE.test(text);
  const sector = SECTOR.test(text);
  const sample = sessionTriangularRipple(10, 3, Math.PI / 2);
  const invented = TRIANGULAR_RIPPLE_EXTRAS.filter((name) => hasCase(text, name));
  const rippleIndependent = Math.abs(sample.rippleX) < 1e-12 && Math.abs(sample.rippleZ - 3) < 1e-12;
  return {
    stage: TRIANGULAR_RIPPLE_STAGE,
    session: TRIANGULAR_RIPPLE_SESSION_HASH,
    living: TRIANGULAR_RIPPLE_LIVING_HASH,
    pinned,
    rawThetaTimesFive: raw,
    flooredRipple: floored,
    sectorFloor: sector,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: raw && !floored && sector && invented.length === 0 && rippleIndependent && sample.sector === 0,
    note: 'Session triangular minor ripple uses raw theta * 5. Only tAngle is floored to 2pi/3. Living path already matches. Paste not rewritten.',
  };
}
