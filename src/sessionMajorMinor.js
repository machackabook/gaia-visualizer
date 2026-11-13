/** Stage 1231 — session major/minor assignment prior to switch; phi external. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_MINOR_STAGE = 1231;
export const MAJOR_MINOR_SESSION_HASH = 'beec41f1';
export const MAJOR_MINOR_LIVING_HASH = '7cd81012';

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
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function sessionMajorMinor(idx, toroidalWeave) {
  const i = Number.isFinite(idx) ? idx : 0;
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 0;
  const major = 10 + (i * 2);
  const minor = 3 + (weave * 2);
  return {
    major,
    minor,
    assignedPriorToSwitch: true,
    phiExternal: true,
  };
}

export function noteSessionMajorMinor(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasMajor = /let\s+major\s*=\s*10\s*\+\s*\(this\.idx\s*\*\s*2\)/.test(text);
  const hasMinor = /let\s+minor\s*=\s*3\s*\+\s*\(state\.toroidalWeave\s*\*\s*2\)/.test(text);
  const priorToSwitch = text.indexOf('let major') < text.indexOf('switch(targetState.geometry)');
  const check = sessionMajorMinor(0, 0);
  return {
    stage: MAJOR_MINOR_STAGE,
    session: MAJOR_MINOR_SESSION_HASH,
    living: MAJOR_MINOR_LIVING_HASH,
    pinned,
    hasMajor,
    hasMinor,
    priorToSwitch,
    check,
    pasteRewritten: false,
    secrets: false,
    ok: hasMajor && hasMinor && priorToSwitch && check.major === 10 && check.minor === 3,
    note: 'Major and minor assigned prior to switch. Phi external. Paste not rewritten.',
  };
}
