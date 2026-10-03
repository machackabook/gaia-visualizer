/** Stage 383 — session triangular z is major * sin(tAngle) + minor * sin(theta * 5). Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_Z_STAGE = 383;
export const TRIANGULAR_Z_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_Z_LIVING_HASH = '7cd81012';
export const TRIANGULAR_Z_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const TRIANGULAR_Z_STEP = (Math.PI * 2) / 3;

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
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionTriangularZ(major, minor, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const th = Number.isFinite(theta) ? theta : 0;
  const step = TRIANGULAR_Z_STEP;
  const tAngle = Math.floor(th / step) * step;
  const snap = Math.sin(tAngle);
  const ripple = Math.sin(th * 5);
  const z = R * snap + r * ripple;
  return {
    major: R,
    minor: r,
    theta: th,
    step,
    tAngle,
    snap,
    ripple,
    z,
    usesPhi: false,
    usesTime: false,
  };
}

export function noteSessionTriangularZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const hasAngle = /const\s+tAngle\s*=\s*\(\s*Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\s*\)/.test(body);
  const hasZ = /z\s*=\s*major\s*\*\s*Math\.sin\(tAngle\)\s*\+\s*minor\s*\*\s*Math\.sin\(this\.theta\s*\*\s*5\)/.test(body);
  const noPhiOnZ = !/z\s*=[^;]*this\.phi/.test(body);
  const noTimeOnZ = !/z\s*=[^;]*\bt\b/.test(body);
  const origin = sessionTriangularZ(10, 3, 0);
  const ripple = sessionTriangularZ(10, 3, Math.PI / 10);
  const vertex = sessionTriangularZ(10, 3, (Math.PI * 2) / 3);
  const lane = sessionTriangularZ(12, 5, 0);
  const invented = TRIANGULAR_Z_EXTRAS.filter((name) => hasCase(text, name));
  const vertexZ = (7 * Math.sqrt(3)) / 2;
  const originOk = Math.abs(origin.z) < 1e-12 && Math.abs(origin.tAngle) < 1e-12;
  const rippleOk = Math.abs(ripple.z - 3) < 1e-12 && Math.abs(ripple.tAngle) < 1e-12;
  const vertexOk = Math.abs(vertex.z - vertexZ) < 1e-12 && Math.abs(vertex.tAngle - TRIANGULAR_Z_STEP) < 1e-12;
  const laneOk = Math.abs(lane.z) < 1e-12;
  return {
    stage: TRIANGULAR_Z_STAGE,
    session: TRIANGULAR_Z_SESSION_HASH,
    living: TRIANGULAR_Z_LIVING_HASH,
    pinned,
    formula: 'z = major * sin(tAngle) + minor * sin(theta * 5)',
    hasSessionAngle: hasAngle,
    hasSessionZ: hasZ,
    ignoresPhiOnZ: noPhiOnZ,
    ignoresTimeOnZ: noTimeOnZ,
    origin,
    ripple,
    vertex,
    lane,
    vertexZ,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasAngle && hasZ && noPhiOnZ && noTimeOnZ && invented.length === 0 && originOk && rippleOk && vertexOk && laneOk,
    note: 'Session triangular z snaps tAngle to multiples of 2π/3 and adds minor * sin(theta * 5). Phi and t do not enter z. Paste not rewritten.',
  };
}
