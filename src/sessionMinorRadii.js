/** Stage 449 — session minor radius is 3 + toroidalWeave * 2. Hamiltonian ignores minor. Document only. Do not rewrite the paste. No secrets. */
export const MINOR_RADII_STAGE = 449;
export const MINOR_RADII_SESSION_HASH = 'beec41f1';
export const MINOR_RADII_LIVING_HASH = '7cd81012';
export const MINOR_RADII_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_PASTE = `update(t) {
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

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function sessionMinorRadius(toroidalWeave) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const minor = 3 + weave * 2;
  return { weave, minor, formula: '3 + toroidalWeave * 2' };
}

export function noteSessionMinorRadii(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const declared = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)/.test(text);
  const infinityUses = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)/.test(text);
  const triangularUses = /Math\.cos\(this\.theta\s*\*\s*5\)/.test(text) && /Math\.sin\(t\)\s*\*\s*minor/.test(text);
  const torusUses = /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(text);
  const hamiltonianBody = (text.split("case 'hamiltonian':")[1] || '').split('break;')[0];
  const hamiltonianIgnores = hamiltonianBody.length > 0 && !/\bminor\b/.test(hamiltonianBody);
  const invented = MINOR_RADII_EXTRAS.filter((name) => hasCase(text, name));
  const sample = sessionMinorRadius(1);
  const quiet = sessionMinorRadius(0);
  return {
    stage: MINOR_RADII_STAGE,
    session: MINOR_RADII_SESSION_HASH,
    living: MINOR_RADII_LIVING_HASH,
    pinned,
    declared,
    infinityUses,
    triangularUses,
    torusUses,
    hamiltonianIgnores,
    sample,
    quiet,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    pasteRewritten: false,
    secrets: false,
    ok: declared && infinityUses && triangularUses && torusUses && hamiltonianIgnores && invented.length === 0 && sample.minor === 5 && quiet.minor === 3,
    note: 'Session minor is 3 + toroidalWeave * 2. Infinity y, triangular ripple/y, and the torus tube use it. Hamiltonian does not. Paste not rewritten.',
  };
}

export function compileSessionNextStages(source) {
  const hold = noteSessionMinorRadii(source);
  return {
    current: MINOR_RADII_STAGE,
    session: MINOR_RADII_SESSION_HASH,
    living: MINOR_RADII_LIVING_HASH,
    paste: '2026-10-05 17:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      {
        stage: 450,
        title: 'hold lemniscate denom 1 + sin(theta)^2',
        note: 'Infinity scale stays major * 1.5. Do not rewrite the paste.',
      },
      {
        stage: 451,
        title: 'hold hamiltonian y lift sin(t) * 2',
        note: 'y does not take hScale on the time term and does not take minor. Do not rewrite the paste.',
      },
      {
        stage: 452,
        title: 'hold triangular sector y without theta * 5',
        note: 'y is (idx % 3 - 1) * major * 0.5 + sin(t) * minor. Ripple stays on x/z. Do not rewrite the paste.',
      },
    ],
  };
}
