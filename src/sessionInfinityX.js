/** Stage 379 — session infinity x is (scale * cos(theta)) / denom. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_X_STAGE = 379;
export const INFINITY_X_SESSION_HASH = 'beec41f1';
export const INFINITY_X_LIVING_HASH = '7cd81012';
export const INFINITY_X_FACTOR = 1.5;
export const INFINITY_X_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
        case 'hamiltonian':
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

export function sessionInfinityX(major, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const scale = R * INFINITY_X_FACTOR;
  const denom = 1 + Math.pow(Math.sin(th), 2);
  const x = (scale * Math.cos(th)) / denom;
  return {
    major: R,
    scale,
    denom,
    x,
    usesMinor: false,
    usesPhi: false,
    usesTime: false,
  };
}

export function noteSessionInfinityX(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'infinity');
  const hasX = /x\s*=\s*\(scale\s*\*\s*Math\.cos\(this\.theta\)\)\s*\/\s*denom/.test(body);
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(body);
  const hasDenom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)/.test(body);
  const noMinorOnX = !/x\s*=[^;]*\bminor\b/.test(body);
  const noPhiOnX = !/x\s*=[^;]*this\.phi/.test(body);
  const noTimeOnX = !/x\s*=[^;]*\bt\b/.test(body);
  const pole = sessionInfinityX(10, 0);
  const waist = sessionInfinityX(10, Math.PI / 2);
  const anti = sessionInfinityX(10, Math.PI);
  const lane = sessionInfinityX(12, 0);
  const invented = INFINITY_X_EXTRAS.filter((name) => hasCase(text, name));
  const poleOk = Math.abs(pole.x - 15) < 1e-12 && pole.denom === 1;
  const waistOk = Math.abs(waist.x) < 1e-12 && Math.abs(waist.denom - 2) < 1e-12;
  const antiOk = Math.abs(anti.x + 15) < 1e-12 && anti.denom === 1;
  const laneOk = Math.abs(lane.x - 18) < 1e-12;
  return {
    stage: INFINITY_X_STAGE,
    session: INFINITY_X_SESSION_HASH,
    living: INFINITY_X_LIVING_HASH,
    pinned,
    formula: 'x = (scale * cos(theta)) / denom',
    hasSessionX: hasX,
    hasSessionScale: hasScale,
    hasSessionDenom: hasDenom,
    ignoresMinorOnX: noMinorOnX,
    ignoresPhiOnX: noPhiOnX,
    ignoresTimeOnX: noTimeOnX,
    pole,
    waist,
    anti,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasX && hasScale && hasDenom && noMinorOnX && noPhiOnX && noTimeOnX && invented.length === 0 && poleOk && waistOk && antiOk && laneOk,
    note: 'Session infinity x is (scale * cos(theta)) / denom with scale = major * 1.5 and denom = 1 + sin(theta)^2. Minor, phi, and t do not enter x. Paste not rewritten.',
  };
}
