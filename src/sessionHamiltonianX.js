/** Stage 380 — session hamiltonian x is hScale * cos(theta * 3) * cos(theta). Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_X_STAGE = 380;
export const HAMILTONIAN_X_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_X_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_X_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
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

export function sessionHamiltonianX(major, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const hScale = R;
  const triple = Math.cos(th * 3);
  const single = Math.cos(th);
  const x = hScale * triple * single;
  return {
    major: R,
    hScale,
    triple,
    single,
    x,
    usesMinor: false,
    usesPhi: false,
    usesTime: false,
  };
}

export function noteSessionHamiltonianX(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'hamiltonian');
  const hasX = /x\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)/.test(body);
  const hasScale = /const\s+hScale\s*=\s*major/.test(body);
  const noMinorOnX = !/x\s*=[^;]*\bminor\b/.test(body);
  const noPhiOnX = !/x\s*=[^;]*this\.phi/.test(body);
  const noTimeOnX = !/x\s*=[^;]*\bt\b/.test(body);
  const pole = sessionHamiltonianX(10, 0);
  const waist = sessionHamiltonianX(10, Math.PI / 2);
  const third = sessionHamiltonianX(10, Math.PI / 3);
  const anti = sessionHamiltonianX(10, Math.PI);
  const lane = sessionHamiltonianX(12, 0);
  const invented = HAMILTONIAN_X_EXTRAS.filter((name) => hasCase(text, name));
  const poleOk = Math.abs(pole.x - 10) < 1e-12;
  const waistOk = Math.abs(waist.x) < 1e-12;
  const thirdOk = Math.abs(third.x + 5) < 1e-12;
  const antiOk = Math.abs(anti.x - 10) < 1e-12;
  const laneOk = Math.abs(lane.x - 12) < 1e-12;
  return {
    stage: HAMILTONIAN_X_STAGE,
    session: HAMILTONIAN_X_SESSION_HASH,
    living: HAMILTONIAN_X_LIVING_HASH,
    pinned,
    formula: 'x = hScale * cos(theta * 3) * cos(theta)',
    hasSessionX: hasX,
    hasSessionScale: hasScale,
    ignoresMinorOnX: noMinorOnX,
    ignoresPhiOnX: noPhiOnX,
    ignoresTimeOnX: noTimeOnX,
    pole,
    waist,
    third,
    anti,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasX && hasScale && noMinorOnX && noPhiOnX && noTimeOnX && invented.length === 0 && poleOk && waistOk && thirdOk && antiOk && laneOk,
    note: 'Session hamiltonian x is hScale * cos(theta * 3) * cos(theta) with hScale = major. Minor, phi, and t do not enter x. Paste not rewritten.',
  };
}
