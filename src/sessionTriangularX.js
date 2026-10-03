/** Stage 382 — session triangular x is major * cos(tAngle) + minor * cos(theta * 5). Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_X_STAGE = 382;
export const TRIANGULAR_X_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_X_LIVING_HASH = '7cd81012';
export const TRIANGULAR_X_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const TRIANGULAR_X_STEP = (Math.PI * 2) / 3;

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

export function sessionTriangularX(major, minor, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const th = Number.isFinite(theta) ? theta : 0;
  const step = TRIANGULAR_X_STEP;
  const tAngle = Math.floor(th / step) * step;
  const snap = Math.cos(tAngle);
  const ripple = Math.cos(th * 5);
  const x = R * snap + r * ripple;
  return {
    major: R,
    minor: r,
    theta: th,
    step,
    tAngle,
    snap,
    ripple,
    x,
    usesPhi: false,
    usesTime: false,
  };
}

export function noteSessionTriangularX(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const hasAngle = /const\s+tAngle\s*=\s*\(\s*Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\s*\)/.test(body);
  const hasX = /x\s*=\s*major\s*\*\s*Math\.cos\(tAngle\)\s*\+\s*minor\s*\*\s*Math\.cos\(this\.theta\s*\*\s*5\)/.test(body);
  const noPhiOnX = !/x\s*=[^;]*this\.phi/.test(body);
  const noTimeOnX = !/x\s*=[^;]*\bt\b/.test(body);
  const origin = sessionTriangularX(10, 3, 0);
  const ripple = sessionTriangularX(10, 3, Math.PI / 5);
  const vertex = sessionTriangularX(10, 3, (Math.PI * 2) / 3);
  const lane = sessionTriangularX(12, 5, 0);
  const invented = TRIANGULAR_X_EXTRAS.filter((name) => hasCase(text, name));
  const originOk = Math.abs(origin.x - 13) < 1e-12 && Math.abs(origin.tAngle) < 1e-12;
  const rippleOk = Math.abs(ripple.x - 7) < 1e-12 && Math.abs(ripple.tAngle) < 1e-12;
  const vertexOk = Math.abs(vertex.x + 6.5) < 1e-12 && Math.abs(vertex.tAngle - TRIANGULAR_X_STEP) < 1e-12;
  const laneOk = Math.abs(lane.x - 17) < 1e-12;
  return {
    stage: TRIANGULAR_X_STAGE,
    session: TRIANGULAR_X_SESSION_HASH,
    living: TRIANGULAR_X_LIVING_HASH,
    pinned,
    formula: 'x = major * cos(tAngle) + minor * cos(theta * 5)',
    hasSessionAngle: hasAngle,
    hasSessionX: hasX,
    ignoresPhiOnX: noPhiOnX,
    ignoresTimeOnX: noTimeOnX,
    origin,
    ripple,
    vertex,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasAngle && hasX && noPhiOnX && noTimeOnX && invented.length === 0 && originOk && rippleOk && vertexOk && laneOk,
    note: 'Session triangular x snaps tAngle to multiples of 2π/3 and adds minor * cos(theta * 5). Phi and t do not enter x. Paste not rewritten.',
  };
}
