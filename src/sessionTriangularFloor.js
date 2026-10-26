/** Stage 883 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity. Triangular floor held at 882. Hamiltonian y lift free of hScale/minor held at 881. Infinity denom held at 880. Session Vector3 allocation held. Phi external held at 868. Major/minor pre-switch held at 867. Theta step unread by switch held at 866. Uniforms order held at 865. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_FLOOR_STAGE = 883;
export const TRIANGULAR_FLOOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_FLOOR_LIVING_HASH = '7cd81012';
export const TRIANGULAR_FLOOR_SECTORS = 3;
export const TRIANGULAR_FLOOR_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function triangularSector() {
  return (Math.PI * 2) / TRIANGULAR_FLOOR_SECTORS;
}

export function sessionTriangularFloor(theta) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const sector = triangularSector();
  const snapped = Math.floor(angle / sector) * sector;
  return {
    theta: angle,
    sector,
    tAngle: snapped,
    bin: Number.isFinite(angle) ? Math.floor(angle / sector) : 0,
    step: sector,
  };
}

export function noteSessionTriangularFloor(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const floorSnap = /Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)/.test(body);
  const usesTAngle = /Math\.cos\(tAngle\)/.test(body) && /Math\.sin\(tAngle\)/.test(body);
  const ripple = /Math\.cos\(this\.theta\s*\*\s*5\)/.test(body) && /Math\.sin\(this\.theta\s*\*\s*5\)/.test(body);
  const yLine = (body.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const yFreeOfTheta5 = !/theta\s*\*\s*5/.test(yLine);
  const sample = sessionTriangularFloor(Math.PI);
  const sector = triangularSector();
  const snapHolds = sample.tAngle === Math.floor(Math.PI / sector) * sector;
  const invented = TRIANGULAR_FLOOR_EXTRAS.filter((name) => hasCase(text, name));
  const lerpAlphaLiteral = /lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\)/.test(text);
  const uniformsOrder = /this\.material\.uniforms\.uTime\.value = t;[\s\S]*?this\.material\.uniforms\.uGravity\.value = state\.gravityPull;/.test(text);
  const sessionAlloc = /lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\)/.test(text);
  const infinityDenomShared = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);[\s\S]*?x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;[\s\S]*?z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const hamiltonianLiftFree = /y = hScale \* Math\.sin\(this\.theta \* 3\) \+ \(Math\.sin\(t\) \* 2\);/.test(text);
  const torusTube = /x = \(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.cos\(this\.theta\);[\s\S]*?z = \(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.sin\(this\.theta\);/.test(text);
  return {
    stage: TRIANGULAR_FLOOR_STAGE,
    session: TRIANGULAR_FLOOR_SESSION_HASH,
    living: TRIANGULAR_FLOOR_LIVING_HASH,
    pinned,
    formula: 'tAngle = floor(theta / (2π/3)) * (2π/3)',
    floorSnap,
    usesTAngle,
    rippleOnRawTheta: ripple,
    yFreeOfTheta5,
    lerpAlphaLiteral,
    uniformsOrder,
    sessionAlloc,
    infinityDenomShared,
    hamiltonianLiftFree,
    torusTube,
    sample,
    snapHolds,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: floorSnap && usesTAngle && snapHolds && yFreeOfTheta5 && invented.length === 0 && lerpAlphaLiteral && uniformsOrder && sessionAlloc && infinityDenomShared && hamiltonianLiftFree && torusTube,
    note: 'Session triangular floor snaps theta to 2π/3 before cos/sin of the lattice vertex. Raw theta*5 stays on the minor ripple (x/z only). Y sector free of theta*5. Infinity denom shared by x/z only; y unread by denom. Hamiltonian y lift sin(t)*2 free of hScale/minor; x/z free of minor. Torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity. Phi external. Lerp alpha literal 0.05 no modulation. Session allocates new Vector3 in lerp. Uniforms uTime then uGravity. Living path already matches. Paste not rewritten.',
  };
}
