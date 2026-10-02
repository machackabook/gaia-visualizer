/** Stage 375 — session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_Y_STAGE = 375;
export const HAMILTONIAN_Y_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_Y_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_Y_RIPPLE = 2;
export const HAMILTONIAN_Y_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
  return new RegExp("case\\s*['\\\"]" + name + "['\\\"]").test(source || '');
}

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\\\"]" + name + "['\\\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionHamiltonianY(major, theta, t) {
  const R = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = R;
  const base = hScale * Math.sin(th * 3);
  const ripple = Math.sin(time) * HAMILTONIAN_Y_RIPPLE;
  return {
    hScale,
    base,
    ripple,
    y: base + ripple,
    usesPhi: false,
    usesMinor: false,
  };
}

export function noteSessionHamiltonianY(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'hamiltonian');
  const hasScale = /const\s+hScale\s*=\s*major/.test(body);
  const hasY = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)/.test(body);
  const noPhi = !/this\.phi/.test(body);
  const noMinor = !/\bminor\b/.test(body);
  const rest = sessionHamiltonianY(10, 0, 0);
  const crest = sessionHamiltonianY(10, Math.PI / 6, Math.PI / 2);
  const invented = HAMILTONIAN_Y_EXTRAS.filter((name) => hasCase(text, name));
  const restOk = Math.abs(rest.y) < 1e-12 && rest.hScale === 10;
  const crestOk = Math.abs(crest.y - 12) < 1e-12 && Math.abs(crest.ripple - 2) < 1e-12;
  return {
    stage: HAMILTONIAN_Y_STAGE,
    session: HAMILTONIAN_Y_SESSION_HASH,
    living: HAMILTONIAN_Y_LIVING_HASH,
    pinned,
    ripple: HAMILTONIAN_Y_RIPPLE,
    formula: 'y = hScale * sin(theta * 3) + sin(t) * 2',
    hasSessionScale: hasScale,
    hasSessionY: hasY,
    ignoresPhi: noPhi,
    ignoresMinor: noMinor,
    rest,
    crest,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && hasY && noPhi && noMinor && invented.length === 0 && restOk && crestOk,
    note: 'Session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2. Ripple amplitude is 2, not minor. Phi is unused. Paste not rewritten.',
  };
}
