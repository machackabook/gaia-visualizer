/** Stage 1180 — session infinity x/z use lemniscate denom exclusive; y identity to torus. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_STAGE = 1180;
export const INFINITY_SESSION_HASH = 'beec41f1';
export const INFINITY_LIVING_HASH = '7cd81012';

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

export function sessionInfinity(major, theta, phi, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const ph = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  const scale = R * 1.5;
  const denom = 1 + Math.pow(Math.sin(th), 2);
  const x = (scale * Math.cos(th)) / denom;
  const z = (scale * Math.sin(th) * Math.cos(th)) / denom;
  const minor = 3; // default for check
  const y = minor * Math.sin(ph) * Math.sin(time * 0.5 + i);
  return {
    major: R,
    scale,
    denom,
    x,
    z,
    y,
    usesDenomOnXZ: true,
    yUnreadByDenom: true,
  };
}

export function noteSessionInfinity(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasDenom = /denom\s*=\s*1\s*\+\s*Math\.pow\(Math\.sin\(this\.theta\),\s*2\)/.test(text);
  const xzUseDenom = /x\s*=\s*\([^)]*\)\s*\/\s*denom/.test(text) && /z\s*=\s*\([^)]*\)\s*\/\s*denom/.test(text);
  const yNoDenom = !/y\s*=[^;]*denom/.test(text);
  const check = sessionInfinity(10, 0, 0, 0, 0);
  const denomOk = Math.abs(check.denom - 1) < 1e-12;
  return {
    stage: INFINITY_STAGE,
    session: INFINITY_SESSION_HASH,
    living: INFINITY_LIVING_HASH,
    pinned,
    hasDenom,
    xzUseDenom,
    yNoDenom,
    check,
    denomOk,
    pasteRewritten: false,
    secrets: false,
    ok: hasDenom && xzUseDenom && yNoDenom && denomOk,
    note: 'Infinity lemniscate denom exclusive to x/z. y = minor * sin(phi) * sin(t*0.5 + idx). Paste not rewritten.',
  };
}
