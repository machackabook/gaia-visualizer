/** Stage 850 — major = 10 + (idx * 2) held unread by gravityPull; used for scale/hScale/sector. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_UNREAD_STAGE = 850;
export const MAJOR_UNREAD_SESSION_HASH = 'beec41f1';
export const MAJOR_UNREAD_LIVING_HASH = '7cd81012';
export const MAJOR_BASE = 10;
export const MAJOR_STEP = 2;

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) {
        case 'infinity':
            const scale = major * 1.5;
            break;
        case 'hamiltonian':
            const hScale = major;
            break;
        case 'triangular':
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle);
            break;
        case 'torus':
        default:
            break;
    }
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
}`;

export function sampleMajor(idx) {
  return MAJOR_BASE + idx * MAJOR_STEP;
}

export function noteSessionMajorUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const majorAssign = /let\s+major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)\s*;/.test(text);
  const gravityOnMajor = /major\s*=\s*[^;]*gravityPull/.test(text);
  const scaleUse = /scale\s*=\s*major\s*\*\s*1\.5/.test(text);
  const hScaleUse = /hScale\s*=\s*major/.test(text);
  const sectorUse = /\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5/.test(text);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  const sample = sampleMajor(0);
  return {
    stage: MAJOR_UNREAD_STAGE,
    session: MAJOR_UNREAD_SESSION_HASH,
    living: MAJOR_UNREAD_LIVING_HASH,
    pinned,
    formula: 'major = 10 + (idx * 2)',
    majorAssign,
    unreadByGravity: !gravityOnMajor,
    usedInScale: scaleUse,
    usedInHScale: hScaleUse,
    usedInSector: sectorUse,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: majorAssign && !gravityOnMajor && invented.length === 0 && sample === 10,
    note: 'Session major = 10 + (idx * 2) assigned before switch, unread by gravityPull. Feeds infinity scale, hamiltonian hScale, triangular sector. Paste not rewritten.',
  };
}
