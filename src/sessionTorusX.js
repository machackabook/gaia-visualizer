/** Stage 384 — session torus x is (major + minor * cos(phi)) * cos(theta). Document only. Do not rewrite the paste. No secrets. */
export const TORUS_X_STAGE = 384;
export const TORUS_X_SESSION_HASH = 'beec41f1';
export const TORUS_X_LIVING_HASH = '7cd81012';
export const TORUS_X_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionTorusX(major, minor, phi, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const tubeRadius = R + r * Math.cos(tube);
  const x = tubeRadius * Math.cos(th);
  return {
    major: R,
    minor: r,
    phi: tube,
    theta: th,
    tubeRadius,
    x,
    usesTime: false,
    usesIdx: false,
  };
}

export function noteSessionTorusX(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'torus');
  const hasX = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.cos\(this\.theta\)/.test(body);
  const noTimeOnX = !/x\s*=[^;]*\bt\b/.test(body);
  const noIdxOnX = !/x\s*=[^;]*this\.idx/.test(body);
  const equator = sessionTorusX(10, 3, 0, 0);
  const pole = sessionTorusX(10, 3, Math.PI / 2, 0);
  const quarter = sessionTorusX(10, 3, 0, Math.PI / 2);
  const inner = sessionTorusX(10, 3, Math.PI, 0);
  const lane = sessionTorusX(12, 5, 0, 0);
  const invented = TORUS_X_EXTRAS.filter((name) => hasCase(text, name));
  const equatorOk = Math.abs(equator.x - 13) < 1e-12;
  const poleOk = Math.abs(pole.x - 10) < 1e-12;
  const quarterOk = Math.abs(quarter.x) < 1e-12;
  const innerOk = Math.abs(inner.x - 7) < 1e-12;
  const laneOk = Math.abs(lane.x - 17) < 1e-12;
  return {
    stage: TORUS_X_STAGE,
    session: TORUS_X_SESSION_HASH,
    living: TORUS_X_LIVING_HASH,
    pinned,
    formula: 'x = (major + minor * cos(phi)) * cos(theta)',
    hasSessionX: hasX,
    ignoresTimeOnX: noTimeOnX,
    ignoresIdxOnX: noIdxOnX,
    equator,
    pole,
    quarter,
    inner,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasX && noTimeOnX && noIdxOnX && invented.length === 0 && equatorOk && poleOk && quarterOk && innerOk && laneOk,
    note: 'Session torus x is the tube radius (major + minor * cos(phi)) times cos(theta). t and idx do not enter x. Paste not rewritten.',
  };
}
