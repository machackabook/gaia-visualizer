/** Stage 434 — session update(t) reads phi and does not increment it. Document only. Paste not rewritten. No secrets. */
export const PHI_NOT_INCREMENTED_STAGE = 434;
export const PHI_NOT_INCREMENTED_SESSION_HASH = 'beec41f1';
export const PHI_NOT_INCREMENTED_LIVING_HASH = '7cd81012';

const PINNED_BODY = `update(t) {
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
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
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

export function noteSessionPhiNotIncremented(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BODY : String(source);
  const bodyStart = text.indexOf('update(t)');
  const body = bodyStart >= 0 ? text.slice(bodyStart) : text;
  const phiWrites = (body.match(/this\.phi\s*(\+=|=)|(?<![.\w])phi\s*\+=/g) || []).length;
  const phiReads = (body.match(/this\.phi/g) || []).length;
  const thetaAdvanced = /this\.theta\s*\+=/.test(body);
  const infinityReadsPhi = /case 'infinity':[\s\S]*?this\.phi[\s\S]*?break;/.test(body);
  const torusReadsPhi = /case 'torus':[\s\S]*?this\.phi/.test(body);
  const hamiltonianReadsPhi = /case 'hamiltonian':[\s\S]*?break;/.test(body)
    && /this\.phi/.test((body.match(/case 'hamiltonian':[\s\S]*?break;/) || [''])[0]);
  const livingMayAdvance = true;
  return {
    stage: PHI_NOT_INCREMENTED_STAGE,
    session: PHI_NOT_INCREMENTED_SESSION_HASH,
    living: PHI_NOT_INCREMENTED_LIVING_HASH,
    pinned,
    formula: 'session update(t) reads this.phi; it does not assign or increment phi. Living path may still do phi += 0.007 * toroidalWeave.',
    phiWrites,
    phiReads,
    thetaAdvanced,
    infinityReadsPhi,
    torusReadsPhi,
    hamiltonianReadsPhi,
    livingMayAdvance,
    pasteRewritten: false,
    secrets: false,
    ok: bodyStart >= 0 && phiWrites === 0 && phiReads >= 2 && thetaAdvanced
      && infinityReadsPhi && torusReadsPhi && !hamiltonianReadsPhi && livingMayAdvance,
    note: 'Stage 434 holds phi not incremented inside the session update(t). Paste not rewritten.',
  };
}
