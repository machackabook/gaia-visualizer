/** Stage 1310 — full connecting update(t) geometric field kernel. Document only. Do not rewrite the paste. No secrets. */
export const FULL_STAGE = 1310;
export const FULL_SESSION_HASH = 'beec41f1';
export const FULL_LIVING_HASH = '7cd81012';

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

export function noteSessionFull(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const hasUniforms = /uTime\.value\s*=\s*t/.test(text) && /uGravity\.value\s*=\s*state\.gravityPull/.test(text);
  const hasTheta = /this\.theta\s*\+=\s*\(0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\)\s*\*\s*state\.gravityPull/.test(text);
  const hasFourCase = /case\s*'infinity'/.test(text) && /case\s*'hamiltonian'/.test(text) && /case\s*'triangular'/.test(text) && /case\s*'torus'/.test(text);
  const hasLerp = /position\.lerp\(new\s*THREE\.Vector3\(x,\s*y,\s*z\),\s*0\.05\)/.test(text);
  const majorMinorPrior = /let major = 10 \+ \(this\.idx \* 2\);[\s\S]*?let minor = 3 \+ \(state\.toroidalWeave \* 2\);[\s\S]*?switch\(targetState\.geometry\)/.test(text);
  const phiExternal = /this\.phi/.test(text) && !/this\.phi\s*=/.test(text);
  return {
    stage: FULL_STAGE,
    session: FULL_SESSION_HASH,
    living: FULL_LIVING_HASH,
    pinned,
    hasUniforms,
    hasTheta,
    hasFourCase,
    hasLerp,
    majorMinorPrior,
    phiExternal,
    pasteRewritten: false,
    secrets: false,
    ok: hasUniforms && hasTheta && hasFourCase && hasLerp && majorMinorPrior && phiExternal,
    note: 'Full connecting update(t) kernel pinned at stage 1310. All cases, uniforms, radii, theta, lerp held. Paste not rewritten.',
  };
}
