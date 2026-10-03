/** Stage 386 — hold session torus y unless the paste changes. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_HOLD_STAGE = 386;
export const TORUS_HOLD_SESSION_HASH = 'beec41f1';
export const TORUS_HOLD_LIVING_HASH = '7cd81012';
export const TORUS_HOLD_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionTorusY(phi, t, idx, minor) {
  const tube = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const index = Number.isFinite(idx) ? idx : 0;
  const r = Number.isFinite(minor) ? minor : 3;
  const sinPhi = Math.sin(tube);
  const phase = Math.sin(time * 0.5 + index);
  return { minor: r, sinPhi, phase, y: r * sinPhi * phase };
}

export function noteSessionTorusHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'torus');
  const infinity = caseBody(text, 'infinity');
  const yRe = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/;
  const hasY = yRe.test(body);
  const sharedLift = yRe.test(infinity);
  const noMajorOnY = !/y\s*=[^;]*\bmajor\b/.test(body);
  const noThetaOnY = !/y\s*=[^;]*this\.theta/.test(body);
  const equator = sessionTorusY(0, Math.PI, 0, 3);
  const timeNode = sessionTorusY(Math.PI / 2, 0, 0, 3);
  const crest = sessionTorusY(Math.PI / 2, Math.PI, 0, 3);
  const lane = sessionTorusY(Math.PI / 2, Math.PI, 1, 5);
  const invented = TORUS_HOLD_EXTRAS.filter((name) => hasCase(text, name));
  const equatorOk = Math.abs(equator.y) < 1e-12;
  const timeNodeOk = Math.abs(timeNode.y) < 1e-12;
  const crestOk = Math.abs(crest.y - 3) < 1e-12;
  const laneOk = Math.abs(lane.y - 5 * Math.sin(Math.PI / 2 + 1)) < 1e-12;
  return {
    stage: TORUS_HOLD_STAGE,
    session: TORUS_HOLD_SESSION_HASH,
    living: TORUS_HOLD_LIVING_HASH,
    pinned,
    formula: 'y = minor * sin(phi) * sin(t * 0.5 + idx)',
    held: true,
    hasSessionY: hasY,
    sharedInfinityLift: sharedLift,
    ignoresMajorOnY: noMajorOnY,
    ignoresThetaOnY: noThetaOnY,
    equator,
    timeNode,
    crest,
    lane,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: hasY && sharedLift && noMajorOnY && noThetaOnY && invented.length === 0 && equatorOk && timeNodeOk && crestOk && laneOk,
    note: 'Stage 386 holds session torus y. Same lift as infinity. Major and theta stay out of y. Paste not rewritten.',
  };
}
