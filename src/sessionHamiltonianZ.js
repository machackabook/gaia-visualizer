/** Stage 381 — session hamiltonian z is hScale * cos(theta * 3) * sin(theta). Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_Z_STAGE = 381;
export const HAMILTONIAN_Z_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_Z_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_Z_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionHamiltonianZ(major, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const hScale = R;
  const triple = Math.cos(th * 3);
  const single = Math.sin(th);
  const z = hScale * triple * single;
  return {
    major: R,
    hScale,
    triple,
    single,
    z,
    usesMinor: false,
    usesPhi: false,
    usesTime: false,
  };
}

export function noteSessionHamiltonianZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'hamiltonian');
  const hasZ = /z\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)/.test(body);
  const hasScale = /const\s+hScale\s*=\s*major/.test(body);
  const noMinorOnZ = !/z\s*=[^;]*\bminor\b/.test(body);
  const noPhiOnZ = !/z\s*=[^;]*this\.phi/.test(body);
  const noTimeOnZ = !/z\s*=[^;]*\bt\b/.test(body);
  const pole = sessionHamiltonianZ(10, 0);
  const waist = sessionHamiltonianZ(10, Math.PI / 2);
  const sixth = sessionHamiltonianZ(10, Math.PI / 6);
  const third = sessionHamiltonianZ(10, Math.PI / 3);
  const anti = sessionHamiltonianZ(10, Math.PI);
  const lane = sessionHamiltonianZ(12, Math.PI / 3);
  const invented = HAMILTONIAN_Z_EXTRAS.filter((name) => hasCase(text, name));
  const poleOk = Math.abs(pole.z) < 1e-12;
  const waistOk = Math.abs(waist.z) < 1e-12;
  const sixthOk = Math.abs(sixth.z) < 1e-12;
  const thirdOk = Math.abs(third.z + 5 * Math.sqrt(3)) < 1e-12;
  const antiOk = Math.abs(anti.z) < 1e-12;
  const laneOk = Math.abs(lane.z + 6 * Math.sqrt(3)) < 1e-12;
  return {
    stage: HAMILTONIAN_Z_STAGE,
    session: HAMILTONIAN_Z_SESSION_HASH,
    living: HAMILTONIAN_Z_LIVING_HASH,
    pinned,
    formula: 'z = hScale * cos(theta * 3) * sin(theta)',
    hasSessionZ: hasZ,
    hasSessionScale: hasScale,
    ignoresMinorOnZ: noMinorOnZ,
    ignoresPhiOnZ: noPhiOnZ,
    ignoresTimeOnZ: noTimeOnZ,
    pole,
    waist,
    sixth,
    third,
    anti,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasZ && hasScale && noMinorOnZ && noPhiOnZ && noTimeOnZ && invented.length === 0 && poleOk && waistOk && sixthOk && thirdOk && antiOk && laneOk,
    note: 'Session hamiltonian z is hScale * cos(theta * 3) * sin(theta) with hScale = major. Minor, phi, and t do not enter z. Paste not rewritten.',
  };
}
