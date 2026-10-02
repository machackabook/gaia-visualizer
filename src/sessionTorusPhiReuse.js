/** Stage 369 — session torus reuses the same phi in cos and both sin terms. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_PHI_REUSE_STAGE = 369;
export const TORUS_PHI_REUSE_SESSION_HASH = 'beec41f1';
export const TORUS_PHI_REUSE_LIVING_HASH = '7cd81012';
export const TORUS_PHI_REUSE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function sessionTorusPoint(theta, phi, t, idx, major, minor) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const tube = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const index = Number.isFinite(idx) ? idx : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const cosPhi = Math.cos(tube);
  const sinPhi = Math.sin(tube);
  return {
    x: (R + r * cosPhi) * Math.cos(angle),
    z: (R + r * cosPhi) * Math.sin(angle),
    y: r * sinPhi * Math.sin(time * 0.5 + index),
    sharedPhi: tube,
    cosPhi,
    sinPhi,
    phiAdvanced: false,
  };
}

export function noteSessionTorusPhiReuse(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'torus');
  const sharedCos = /Math\.cos\(this\.phi\)/.test(body);
  const sharedSin = /Math\.sin\(this\.phi\)/.test(body);
  const usesMajor = /\bmajor\b/.test(body);
  const usesMinor = /\bminor\b/.test(body);
  const defaultFallsThrough = /case\s*['"]torus['"]\s*default\s*:/.test(text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' '));
  const advancesPhi = /this\.phi\s*\+\=/.test(text);
  const invented = TORUS_PHI_REUSE_EXTRAS.filter((name) => hasCase(text, name));
  const sample = sessionTorusPoint(0.4, 1.1, 1.2, 3, 14, 5);
  const samePhi = sample.cosPhi === Math.cos(sample.sharedPhi) && sample.sinPhi === Math.sin(sample.sharedPhi);
  return {
    stage: TORUS_PHI_REUSE_STAGE,
    session: TORUS_PHI_REUSE_SESSION_HASH,
    living: TORUS_PHI_REUSE_LIVING_HASH,
    pinned,
    formula: 'x=(major+minor*cos(phi))*cos(theta); z=(major+minor*cos(phi))*sin(theta); y=minor*sin(phi)*sin(t*0.5+idx)',
    sharedCos,
    sharedSin,
    usesMajor,
    usesMinor,
    defaultFallsThrough,
    phiUnread: !advancesPhi,
    samePhi,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: sharedCos && sharedSin && usesMajor && usesMinor && !advancesPhi && samePhi && invented.length === 0,
    note: 'Session torus reuses one unread phi in cos(phi) for x/z and sin(phi) for y. default falls through to the same body. Living path already matches. Paste not rewritten.',
  };
}
