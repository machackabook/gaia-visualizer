/** Stage 1230 — session torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_STAGE = 1230;
export const TORUS_SESSION_HASH = 'beec41f1';
export const TORUS_LIVING_HASH = '7cd81012';

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
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function sessionTorus(major, minor, theta, phi, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const th = Number.isFinite(theta) ? theta : 0;
  const ph = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  const tube = R + r * Math.cos(ph);
  const x = tube * Math.cos(th);
  const z = tube * Math.sin(th);
  const y = r * Math.sin(ph) * Math.sin(time * 0.5 + i);
  return {
    major: R,
    minor: r,
    tube,
    x,
    z,
    y,
    sharedTubeXZ: true,
    yIdentityToInfinity: true,
  };
}

export function noteSessionTorus(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasTube = /x\s*=\s*\(major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\)/.test(text);
  const yShared = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(text);
  const check = sessionTorus(10, 3, 0, 0, 0, 0);
  return {
    stage: TORUS_STAGE,
    session: TORUS_SESSION_HASH,
    living: TORUS_LIVING_HASH,
    pinned,
    hasTube,
    yShared,
    check,
    pasteRewritten: false,
    secrets: false,
    ok: hasTube && yShared,
    note: 'Torus/default tube (major + minor*cos(phi)) shared by x/z. y identity to infinity. Paste not rewritten.',
  };
}
