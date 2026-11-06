/** Stage 1105 — hold torus/default tube (major + minor*cos(phi)) on x/z with y shared with infinity from current connecting chat paste. Prior: 1104 triangular. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_DEFAULT_STAGE = 1105;
export const TORUS_DEFAULT_SESSION_HASH = 'beec41f1';
export const TORUS_DEFAULT_LIVING_HASH = '7cd81012';
export const TORUS_DEFAULT_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionTorusDefault(major, minor, phi, theta, t, idx) {
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const tube = Number.isFinite(phi) ? phi : 0;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const i = Number.isFinite(idx) ? idx : 0;
  const tubeRadius = R + r * Math.cos(tube);
  const x = tubeRadius * Math.cos(th);
  const z = tubeRadius * Math.sin(th);
  const y = r * Math.sin(tube) * Math.sin(time * 0.5 + i);
  return {
    major: R,
    minor: r,
    phi: tube,
    theta: th,
    t: time,
    idx: i,
    tubeRadius,
    x,
    y,
    z,
  };
}

export function noteSessionTorusDefault(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'torus');
  const hasTubeX = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.cos\(this\.theta\)/.test(body);
  const hasTubeZ = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)\s*\)\s*\*\s*Math\.sin\(this\.theta\)/.test(body);
  const yShared = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(body);
  const infinityY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/.test(caseBody(text, 'infinity'));
  const sample = sessionTorusDefault(10, 3, 0, 0, 0, 0);
  const invented = TORUS_DEFAULT_EXTRAS.filter((name) => hasCase(text, name));
  const lerpAlphaLiteral = /lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\)/.test(text);
  const phiExternal = /this\.phi/.test(text) && !/this\.phi\s*=/.test(text);
  return {
    stage: TORUS_DEFAULT_STAGE,
    session: TORUS_DEFAULT_SESSION_HASH,
    living: TORUS_DEFAULT_LIVING_HASH,
    pinned,
    formula: 'x/z = (major + minor * cos(phi)) * cos/sin(theta); y = minor * sin(phi) * sin(t*0.5 + idx)',
    hasTubeX,
    hasTubeZ,
    ySharedWithInfinity: yShared && infinityY,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasTubeX && hasTubeZ && yShared && infinityY && invented.length === 0 && lerpAlphaLiteral && phiExternal,
    note: 'Torus/default tube held; y identity to infinity from current connecting chat paste of update(t). Prior triangular hold remains. Session paste remains untouched. Paste not rewritten.',
  };
}
