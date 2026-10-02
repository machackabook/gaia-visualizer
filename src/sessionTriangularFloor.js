/** Stage 370 — session triangular floor snaps theta to 2π/3. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_FLOOR_STAGE = 370;
export const TRIANGULAR_FLOOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_FLOOR_LIVING_HASH = '7cd81012';
export const TRIANGULAR_FLOOR_SECTORS = 3;
export const TRIANGULAR_FLOOR_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function triangularSector() {
  return (Math.PI * 2) / TRIANGULAR_FLOOR_SECTORS;
}

export function sessionTriangularFloor(theta) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const sector = triangularSector();
  const snapped = Math.floor(angle / sector) * sector;
  return {
    theta: angle,
    sector,
    tAngle: snapped,
    bin: Number.isFinite(angle) ? Math.floor(angle / sector) : 0,
    step: sector,
  };
}

export function noteSessionTriangularFloor(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const floorSnap = /Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)/.test(body);
  const usesTAngle = /Math\.cos\(tAngle\)/.test(body) && /Math\.sin\(tAngle\)/.test(body);
  const ripple = /Math\.cos\(this\.theta\s*\*\s*5\)/.test(body) && /Math\.sin\(this\.theta\s*\*\s*5\)/.test(body);
  const sample = sessionTriangularFloor(Math.PI);
  const sector = triangularSector();
  const snapHolds = sample.tAngle === Math.floor(Math.PI / sector) * sector;
  const invented = TRIANGULAR_FLOOR_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: TRIANGULAR_FLOOR_STAGE,
    session: TRIANGULAR_FLOOR_SESSION_HASH,
    living: TRIANGULAR_FLOOR_LIVING_HASH,
    pinned,
    formula: 'tAngle = floor(theta / (2π/3)) * (2π/3)',
    floorSnap,
    usesTAngle,
    rippleOnRawTheta: ripple,
    sample,
    snapHolds,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: floorSnap && usesTAngle && snapHolds && invented.length === 0,
    note: 'Session triangular floor snaps theta to 2π/3 before cos/sin of the lattice vertex. Raw theta*5 stays on the minor ripple. Living path already matches. Paste not rewritten.',
  };
}
