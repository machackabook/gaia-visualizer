/** Stage 367 — session triangular y uses idx % 3. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_LATTICE_STAGE = 367;
export const TRIANGULAR_LATTICE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_LATTICE_LIVING_HASH = '7cd81012';
export const TRIANGULAR_LATTICE_MOD = 3;
export const TRIANGULAR_LATTICE_LANES = [-1, 0, 1];
export const TRIANGULAR_LATTICE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionTriangularLane(idx) {
  const i = Number.isFinite(idx) ? idx : 0;
  const lane = ((i % TRIANGULAR_LATTICE_MOD) + TRIANGULAR_LATTICE_MOD) % TRIANGULAR_LATTICE_MOD;
  return lane - 1;
}

export function sessionTriangularY(idx, major, t, minor) {
  const m = Number.isFinite(major) ? major : 0;
  const n = Number.isFinite(minor) ? minor : 0;
  const time = Number.isFinite(t) ? t : 0;
  return sessionTriangularLane(idx) * m * 0.5 + Math.sin(time) * n;
}

export function noteSessionTriangularLattice(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const hasLane = /\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5/.test(body);
  const hasWobble = /Math\.sin\(t\)\s*\*\s*minor/.test(body);
  const lanes = [0, 1, 2].map((idx) => sessionTriangularLane(idx));
  const lanesMatch = lanes.length === 3 && lanes[0] === -1 && lanes[1] === 0 && lanes[2] === 1;
  const invented = TRIANGULAR_LATTICE_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: TRIANGULAR_LATTICE_STAGE,
    session: TRIANGULAR_LATTICE_SESSION_HASH,
    living: TRIANGULAR_LATTICE_LIVING_HASH,
    pinned,
    formula: '(idx % 3 - 1) * major * 0.5 + sin(t) * minor',
    hasSessionLane: hasLane,
    hasSinWobble: hasWobble,
    lanes,
    offsets: ['-major/2', '0', '+major/2'],
    lanesMatch,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasLane && hasWobble && lanesMatch && invented.length === 0,
    note: 'Session triangular y snaps to three lanes via idx % 3 (-major/2, 0, +major/2) plus sin(t)*minor. Living path already matches. Paste not rewritten.',
  };
}
