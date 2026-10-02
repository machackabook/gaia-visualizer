/** Stage 368 — session hamiltonian ignores phi and minor. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_IGNORE_STAGE = 368;
export const HAMILTONIAN_IGNORE_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_IGNORE_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_Y_OFFSET = 2;
export const HAMILTONIAN_IGNORE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
        case 'triangular':
            break;
        case 'torus':
        default:
            break;
    }
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

export function sessionHamiltonianPoint(theta, t, major) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = Number.isFinite(major) ? major : 0;
  return {
    x: hScale * Math.cos(angle * 3) * Math.cos(angle),
    z: hScale * Math.cos(angle * 3) * Math.sin(angle),
    y: hScale * Math.sin(angle * 3) + Math.sin(time) * HAMILTONIAN_Y_OFFSET,
    usesPhi: false,
    usesMinor: false,
    yOffset: HAMILTONIAN_Y_OFFSET,
  };
}

export function noteSessionHamiltonianIgnore(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'hamiltonian');
  const usesMajor = /const\s+hScale\s*=\s*major/.test(body);
  const hasCos = /Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)/.test(body);
  const hasSinZ = /Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)/.test(body);
  const hasY = /Math\.sin\(this\.theta\s*\*\s*3\)/.test(body) && /Math\.sin\(t\)\s*\*\s*2/.test(body);
  const mentionsPhi = /\bphi\b/.test(body);
  const mentionsMinor = /\bminor\b/.test(body);
  const invented = HAMILTONIAN_IGNORE_EXTRAS.filter((name) => hasCase(text, name));
  const sample = sessionHamiltonianPoint(0.4, 1.2, 14);
  return {
    stage: HAMILTONIAN_IGNORE_STAGE,
    session: HAMILTONIAN_IGNORE_SESSION_HASH,
    living: HAMILTONIAN_IGNORE_LIVING_HASH,
    pinned,
    formula: 'hScale=major; x=hScale*cos(3theta)*cos(theta); z=hScale*cos(3theta)*sin(theta); y=hScale*sin(3theta)+sin(t)*2',
    usesMajor,
    hasCos,
    hasSinZ,
    hasConstantYOffset: hasY,
    ignoresPhi: !mentionsPhi,
    ignoresMinor: !mentionsMinor,
    yOffset: HAMILTONIAN_Y_OFFSET,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: usesMajor && hasCos && hasSinZ && hasY && !mentionsPhi && !mentionsMinor && invented.length === 0 && sample.usesPhi === false && sample.usesMinor === false,
    note: 'Session hamiltonian uses major only. phi is unread. minor is unread. Y offset is the constant 2, not minor. Living path already matches. Paste not rewritten.',
  };
}
