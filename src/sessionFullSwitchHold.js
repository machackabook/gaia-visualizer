/** Stage 1106 — hold full four-case switch and lerp. Document only. Do not rewrite the paste. No secrets. */
export const FULL_SWITCH_HOLD_STAGE = 1106;
export const FULL_SWITCH_HOLD_SESSION_HASH = 'beec41f1';
export const FULL_SWITCH_HOLD_LIVING_HASH = '7cd81012';

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;

    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    
    let x, y, z;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);

    // Evaluate the target geometric state assigned by the LLM
    switch(targetState.geometry) {
        case 'infinity':
            // Lemniscate of Bernoulli mathematical mapping
            const scale = major * 1.5;
            const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
            
        case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
            
        case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;

        case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
    }

    // Smoothly interpolate current position to the new geometric state target
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function noteSessionFullSwitchHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasInfinity = /case\s*['"]infinity['"]/.test(text);
  const hasHamiltonian = /case\s*['"]hamiltonian['"]/.test(text);
  const hasTriangular = /case\s*['"]triangular['"]/.test(text);
  const hasTorus = /case\s*['"]torus['"]/.test(text);
  const hasLerp = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\)/.test(text);
  return {
    stage: FULL_SWITCH_HOLD_STAGE,
    session: FULL_SWITCH_HOLD_SESSION_HASH,
    living: FULL_SWITCH_HOLD_LIVING_HASH,
    pinned,
    hasInfinity,
    hasHamiltonian,
    hasTriangular,
    hasTorus,
    hasLerp,
    pasteRewritten: false,
    secrets: false,
    ok: hasInfinity && hasHamiltonian && hasTriangular && hasTorus && hasLerp,
    note: 'Stage 1106 holds the full four-case switch and 0.05 lerp. Paste not rewritten.',
  };
}
