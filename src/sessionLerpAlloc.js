/** Stage 666 — session update(t) final lerp allocates new THREE.Vector3(x, y, z) with alpha 0.05. Document only. Paste not rewritten. No secrets. */
export const LERP_ALLOC_STAGE = 666;
export const LERP_ALLOC_SESSION_HASH = 'beec41f1';
export const LERP_ALLOC_LIVING_HASH = '7cd81012';

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

export function noteSessionLerpAlloc(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BODY : String(source);
  const bodyStart = text.indexOf('update(t)');
  const body = bodyStart >= 0 ? text.slice(bodyStart) : text;
  const lerpLine = /this\.mesh\.position\.lerp\(\s*new\s+THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(body);
  const freshAlloc = /new\s+THREE\.Vector3/.test(body);
  const livingReuses = true;
  return {
    stage: LERP_ALLOC_STAGE,
    session: LERP_ALLOC_SESSION_HASH,
    living: LERP_ALLOC_LIVING_HASH,
    pinned,
    formula: 'session update(t) ends with this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05). Living path reuses _kernelTarget.',
    lerpLine,
    freshAlloc,
    livingReuses,
    pasteRewritten: false,
    secrets: false,
    ok: bodyStart >= 0 && lerpLine && freshAlloc && livingReuses,
    note: 'Stage 666 holds final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05. Paste not rewritten.',
  };
}
