/** Stage 385 — session torus z is (major + minor * cos(phi)) * sin(theta). Document only. Do not rewrite the paste. No secrets. */
export const TORUS_Z_STAGE = 385;
export const TORUS_Z_SESSION_HASH = 'beec41f1';
export const TORUS_Z_LIVING_HASH = '7cd81012';
export const TORUS_Z_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionTorusZ(major, minor, phi, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const tubeRadius = R + r * Math.cos(tube);
  const z = tubeRadius * Math.sin(th);
  return {
    major: R,
    minor: r,
    phi: tube,
    theta: th,
    tubeRadius,
    z,
    usesTime: false,
    usesIdx: false,
  };
}

export function noteSessionTorusZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'torus');
  const hasZ = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.sin\(this\.theta\)/.test(body);
  const noTimeOnZ = !/z\s*=[^;]*\bt\b/.test(body);
  const noIdxOnZ = !/z\s*=[^;]*this\.idx/.test(body);
  const equator = sessionTorusZ(10, 3, 0, 0);
  const pole = sessionTorusZ(10, 3, Math.PI / 2, 0);
  const quarter = sessionTorusZ(10, 3, 0, Math.PI / 2);
  const inner = sessionTorusZ(10, 3, Math.PI, 0);
  const lane = sessionTorusZ(12, 5, 0, Math.PI / 2);
  const threeQuarter = sessionTorusZ(10, 3, 0, (3 * Math.PI) / 2);
  const invented = TORUS_Z_EXTRAS.filter((name) => hasCase(text, name));
  const equatorOk = Math.abs(equator.z) < 1e-12;
  const poleOk = Math.abs(pole.z) < 1e-12;
  const quarterOk = Math.abs(quarter.z - 13) < 1e-12;
  const innerOk = Math.abs(inner.z) < 1e-12;
  const laneOk = Math.abs(lane.z - 17) < 1e-12;
  const threeQuarterOk = Math.abs(threeQuarter.z + 13) < 1e-12;
  return {
    stage: TORUS_Z_STAGE,
    session: TORUS_Z_SESSION_HASH,
    living: TORUS_Z_LIVING_HASH,
    pinned,
    formula: 'z = (major + minor * cos(phi)) * sin(theta)',
    hasSessionZ: hasZ,
    ignoresTimeOnZ: noTimeOnZ,
    ignoresIdxOnZ: noIdxOnZ,
    equator,
    pole,
    quarter,
    inner,
    lane,
    threeQuarter,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasZ && noTimeOnZ && noIdxOnZ && invented.length === 0 && equatorOk && poleOk && quarterOk && innerOk && laneOk && threeQuarterOk,
    note: 'Session torus z is the tube radius (major + minor * cos(phi)) times sin(theta). t and idx do not enter z. Paste not rewritten.',
  };
}
