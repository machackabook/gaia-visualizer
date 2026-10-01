/** Stage 365 — session phi still not advanced. Document only. Do not rewrite the paste. No secrets. */
export const PHI_STILL_STAGE = 365;
export const PHI_STILL_SESSION_HASH = 'beec41f1';
export const PHI_STILL_LIVING_HASH = '7cd81012';
export const PHI_STILL_LIVING_STEP = 0.007;
export const PHI_STILL_READ_CASES = ['infinity', 'torus'];
export const PHI_STILL_IGNORE_CASES = ['hamiltonian', 'triangular'];
export const PHI_STILL_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const PHI_STILL_READ_COUNT = 4;

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
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

export function noteSessionPhiStill(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const advancesPhi = /this\.phi\s*\+=/.test(text) || /phi\s*\+=\s*0\.007/.test(text);
  const assignsPhi = /this\.phi\s*=/.test(text);
  const reads = text.match(/this\.phi/g);
  const readCount = reads ? reads.length : 0;
  const infinityBody = caseBody(text, 'infinity');
  const hamiltonianBody = caseBody(text, 'hamiltonian');
  const triangularBody = caseBody(text, 'triangular');
  const torusBody = caseBody(text, 'torus');
  const invented = PHI_STILL_EXTRAS.filter((name) => hasCase(text, name));
  const framesPerTurn = (Math.PI * 2) / PHI_STILL_LIVING_STEP;
  return {
    stage: PHI_STILL_STAGE,
    session: PHI_STILL_SESSION_HASH,
    living: PHI_STILL_LIVING_HASH,
    pinned,
    sessionAdvancesPhi: advancesPhi,
    sessionAssignsPhi: assignsPhi,
    phiReadCount: readCount,
    expectedReadCount: PHI_STILL_READ_COUNT,
    infinityReadsPhi: /this\.phi/.test(infinityBody),
    torusReadsPhi: /this\.phi/.test(torusBody),
    hamiltonianIgnoresPhi: hamiltonianBody.length > 0 && !/this\.phi/.test(hamiltonianBody),
    triangularIgnoresPhi: triangularBody.length > 0 && !/this\.phi/.test(triangularBody),
    livingPhiStep: 'phi += 0.007 * toroidalWeave',
    livingStep: PHI_STILL_LIVING_STEP,
    framesPerTurnAtWeave1: framesPerTurn,
    geometriesReadingPhi: PHI_STILL_READ_CASES.slice(),
    geometriesIgnoringPhi: PHI_STILL_IGNORE_CASES.slice(),
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok:
      !advancesPhi &&
      !assignsPhi &&
      readCount === PHI_STILL_READ_COUNT &&
      /this\.phi/.test(infinityBody) &&
      /this\.phi/.test(torusBody) &&
      !/this\.phi/.test(hamiltonianBody) &&
      !/this\.phi/.test(triangularBody) &&
      invented.length === 0,
    note: 'Session paste reads this.phi four times (infinity y, torus cos/sin/sin) and never steps it. Hamiltonian and triangular ignore phi. Living path already steps phi += 0.007 * toroidalWeave. Paste not rewritten. No new session case.',
  };
}
