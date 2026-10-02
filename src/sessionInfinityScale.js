/** Stage 374 — session infinity scale is major * 1.5 with denom 1 + sin(theta)^2. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_SCALE_STAGE = 374;
export const INFINITY_SCALE_SESSION_HASH = 'beec41f1';
export const INFINITY_SCALE_LIVING_HASH = '7cd81012';
export const INFINITY_SCALE_FACTOR = 1.5;
export const INFINITY_SCALE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
  return new RegExp("case\\s*['\\\"]" + name + "['\\\"]").test(source || '');
}

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\\\"]" + name + "['\\\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionInfinityScale(major, theta) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const scale = R * INFINITY_SCALE_FACTOR;
  const denom = 1 + Math.pow(Math.sin(th), 2);
  return {
    scale,
    denom,
    x: (scale * Math.cos(th)) / denom,
    z: (scale * Math.sin(th) * Math.cos(th)) / denom,
  };
}

export function noteSessionInfinityScale(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const infinityBody = caseBody(text, 'infinity');
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(infinityBody);
  const hasDenom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)/.test(infinityBody);
  const divides = /\(scale\s*\*\s*Math\.cos\(this\.theta\)\)\s*\/\s*denom/.test(infinityBody);
  const sample = sessionInfinityScale(10, 0);
  const mid = sessionInfinityScale(10, Math.PI / 2);
  const invented = INFINITY_SCALE_EXTRAS.filter((name) => hasCase(text, name));
  const pole = Math.abs(sample.x - 15) < 1e-12 && Math.abs(sample.z) < 1e-12 && sample.denom === 1;
  const waist = Math.abs(mid.x) < 1e-12 && Math.abs(mid.z) < 1e-12 && Math.abs(mid.denom - 2) < 1e-12;
  return {
    stage: INFINITY_SCALE_STAGE,
    session: INFINITY_SCALE_SESSION_HASH,
    living: INFINITY_SCALE_LIVING_HASH,
    pinned,
    factor: INFINITY_SCALE_FACTOR,
    formula: 'scale = major * 1.5; denom = 1 + sin(theta)^2',
    hasSessionScale: hasScale,
    hasSessionDenom: hasDenom,
    dividesByDenom: divides,
    sample,
    mid,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && hasDenom && divides && invented.length === 0 && pole && waist,
    note: 'Session infinity scale is major * 1.5. Lemniscate denom is 1 + sin(theta)^2 and divides both x and z. Living path already matches. Paste not rewritten.',
  };
}
