/** Stage 462 — default fallthrough is the torus tube. No fifth case. Document only. Do not rewrite the paste. No secrets. */
export const TORUS_DEFAULT_STAGE = 462;
export const TORUS_DEFAULT_SESSION_HASH = 'beec41f1';
export const TORUS_DEFAULT_LIVING_HASH = '7cd81012';
export const TORUS_DEFAULT_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const TORUS_DEFAULT_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];

const PINNED = [
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function sampleTorusDefaultTube(major, minor, phi, theta) {
  const tube = major + minor * Math.cos(phi);
  const x = tube * Math.cos(theta);
  const z = tube * Math.sin(theta);
  return {
    tube,
    x,
    z,
    sharedTube: x === tube * Math.cos(theta) && z === tube * Math.sin(theta),
    yOmitsTube: true,
  };
}

export function noteSessionTorusDefaultTube(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['"]torus['"][\s\S]*?break\s*;/.exec(text);
  const body = arm ? arm[0] : (pinned ? text : '');
  const fused = /case\s*['"]torus['"]\s*:\s*default\s*:/.test(body);
  const x = /x\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*;/.test(body);
  const z = /z\s*=\s*\(\s*major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)\s*\)\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*;/.test(body);
  const y = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/.test(body);
  const invented = TORUS_DEFAULT_EXTRAS.filter((name) => hasCase(text, name));
  const sample = sampleTorusDefaultTube(12, 5, 0.4, 1.1);
  return {
    stage: TORUS_DEFAULT_STAGE,
    session: TORUS_DEFAULT_SESSION_HASH,
    living: TORUS_DEFAULT_LIVING_HASH,
    pinned,
    fusedDefault: fused,
    x,
    z,
    y,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: fused && x && z && y && invented.length === 0 && sample.sharedTube && sample.yOmitsTube,
    note: 'default falls through the torus tube. No fifth case. Tube radius major+minor*cos(phi) is shared by x and z only. Paste not rewritten.',
  };
}

export function compileSessionStage462(source) {
  const hold = noteSessionTorusDefaultTube(source);
  return {
    current: TORUS_DEFAULT_STAGE,
    session: TORUS_DEFAULT_SESSION_HASH,
    living: TORUS_DEFAULT_LIVING_HASH,
    paste: '2026-10-06 21:07 CDT',
    geometries: TORUS_DEFAULT_CASES,
    hold,
    next: [
      { stage: 463, title: 'hold triangular tAngle as floor snap to 2pi/3' },
      { stage: 464, title: 'hold infinity scale as major * 1.5 before the shared denom' },
      { stage: 465, title: 'hold torus y identical to infinity y, omitting the tube radius' },
    ],
  };
}
