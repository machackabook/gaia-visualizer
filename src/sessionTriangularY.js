/** Stage 376 — session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_Y_STAGE = 376;
export const TRIANGULAR_Y_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_Y_LIVING_HASH = '7cd81012';
export const TRIANGULAR_Y_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
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

export function sessionTriangularY(idx, major, minor, t) {
  const i = Number.isFinite(idx) ? idx : 0;
  const R = Number.isFinite(major) ? major : 10;
  const r = Number.isFinite(minor) ? minor : 3;
  const time = Number.isFinite(t) ? t : 0;
  const band = ((i % 3) + 3) % 3;
  const shelf = (band - 1) * R * 0.5;
  const ripple = Math.sin(time) * r;
  return {
    band,
    shelf,
    ripple,
    y: shelf + ripple,
    usesPhi: false,
    usesMinor: true,
  };
}

export function noteSessionTriangularY(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const body = caseBody(text, 'triangular');
  const hasSnap = /Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)/.test(body);
  const hasY = /y\s*=\s*\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(t\)\s*\*\s*minor/.test(body);
  const noPhi = !/this\.phi/.test(body);
  const rest = sessionTriangularY(1, 10, 3, 0);
  const low = sessionTriangularY(0, 10, 3, 0);
  const crest = sessionTriangularY(2, 10, 3, Math.PI / 2);
  const invented = TRIANGULAR_Y_EXTRAS.filter((name) => hasCase(text, name));
  const restOk = Math.abs(rest.y) < 1e-12 && rest.band === 1;
  const lowOk = Math.abs(low.y + 5) < 1e-12 && low.shelf === -5;
  const crestOk = Math.abs(crest.y - 8) < 1e-12 && crest.ripple === 3;
  return {
    stage: TRIANGULAR_Y_STAGE,
    session: TRIANGULAR_Y_SESSION_HASH,
    living: TRIANGULAR_Y_LIVING_HASH,
    pinned,
    formula: 'y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor',
    hasSessionSnap: hasSnap,
    hasSessionY: hasY,
    ignoresPhi: noPhi,
    usesMinor: true,
    rest,
    low,
    crest,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasSnap && hasY && noPhi && invented.length === 0 && restOk && lowOk && crestOk,
    note: 'Session triangular y is a 3-band shelf of (idx % 3 - 1) * major * 0.5 plus sin(t) * minor. Phi is unused. Paste not rewritten.',
  };
}
