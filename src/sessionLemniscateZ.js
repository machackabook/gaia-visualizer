/** Stage 377 — session lemniscate z is (scale * sin(theta) * cos(theta)) / denom. Document only. Do not rewrite the paste. No secrets. */
export const LEMNISCATE_Z_STAGE = 377;
export const LEMNISCATE_Z_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_Z_LIVING_HASH = '7cd81012';
export const LEMNISCATE_Z_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionLemniscateZ(theta, major) {
  const a = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const scale = R * 1.5;
  const s = Math.sin(a);
  const c = Math.cos(a);
  const denom = 1 + s * s;
  const z = (scale * s * c) / denom;
  return {
    scale,
    denom,
    sin: s,
    cos: c,
    z,
    crosses: true,
    usesPhi: false,
    usesMinor: false,
  };
}

export function noteSessionLemniscateZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'infinity');
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(body);
  const hasDenom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)/.test(body);
  const hasZ = /z\s*=\s*\(scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\)\s*\/\s*denom/.test(body);
  const noPhiOnZ = !/z\s*=[^;]*this\.phi/.test(body);
  const rest = sessionLemniscateZ(0, 10);
  const lobe = sessionLemniscateZ(Math.PI / 4, 10);
  const node = sessionLemniscateZ(Math.PI / 2, 10);
  const cross = sessionLemniscateZ(-Math.PI / 4, 10);
  const invented = LEMNISCATE_Z_EXTRAS.filter((name) => hasCase(text, name));
  const restOk = Math.abs(rest.z) < 1e-12 && rest.denom === 1;
  const lobeOk = Math.abs(lobe.z - 5) < 1e-9 && Math.abs(lobe.denom - 1.5) < 1e-12 && lobe.scale === 15;
  const nodeOk = Math.abs(node.z) < 1e-12;
  const crossOk = Math.abs(cross.z + 5) < 1e-9;
  return {
    stage: LEMNISCATE_Z_STAGE,
    session: LEMNISCATE_Z_SESSION_HASH,
    living: LEMNISCATE_Z_LIVING_HASH,
    pinned,
    formula: 'z = (scale * sin(theta) * cos(theta)) / denom',
    hasSessionScale: hasScale,
    hasSessionDenom: hasDenom,
    hasSessionZ: hasZ,
    ignoresPhiOnZ: noPhiOnZ,
    usesMinor: false,
    rest,
    lobe,
    node,
    cross,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && hasDenom && hasZ && noPhiOnZ && invented.length === 0 && restOk && lobeOk && nodeOk && crossOk,
    note: 'Session infinity z is the Bernoulli figure-eight crossing (scale * sin(theta) * cos(theta)) / denom. Phi and minor do not enter z. Paste not rewritten.',
  };
}
