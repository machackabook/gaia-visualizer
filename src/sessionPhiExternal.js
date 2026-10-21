/** Stage 785 — session phi is referenced but never assigned inside the paste. External weave. Document only. Do not rewrite the paste. No secrets. */
export const PHI_EXTERNAL_STAGE = 785;
export const PHI_EXTERNAL_SESSION_HASH = 'beec41f1';
export const PHI_EXTERNAL_LIVING_HASH = '7cd81012';
export const PHI_EXTERNAL_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionPhiExternal(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const phiAssigned = /this\.phi\s*(\+|\-|\*|=)/.test(text);
  const phiReferenced = /this\.phi/.test(text);
  const invented = PHI_EXTERNAL_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: PHI_EXTERNAL_STAGE,
    session: PHI_EXTERNAL_SESSION_HASH,
    living: PHI_EXTERNAL_LIVING_HASH,
    pinned,
    phiReferenced,
    phiAssigned,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: phiReferenced && !phiAssigned && invented.length === 0,
    note: 'Stage 785 holds phi as an external weave. Referenced in torus/default and infinity y but never assigned inside the paste. Living path may advance phi separately. Paste not rewritten.',
  };
}
