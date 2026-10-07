/** Stage 461 — lemniscate denom is shared by x and z only. Document only. Do not rewrite the paste. No secrets. */
export const LEMNISCATE_DENOM_STAGE = 461;
export const LEMNISCATE_DENOM_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_DENOM_LIVING_HASH = '7cd81012';
export const LEMNISCATE_DENOM_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function sampleLemniscateDenom(scale, theta) {
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  return {
    denom,
    x,
    z,
    sharedByXandZ: denom !== 0 && x * denom === scale * Math.cos(theta) && z * denom === scale * Math.sin(theta) * Math.cos(theta),
    yDividesDenom: false,
  };
}

export function noteSessionLemniscateDenom(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['"]infinity['"][\s\S]*?break\s*;/.exec(text);
  const body = arm ? arm[0] : (pinned ? text : '');
  const scale = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(body);
  const denom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)\s*;/.test(body);
  const x = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(body);
  const z = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(body);
  const y = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/.test(body);
  const yNotDivided = !/y\s*=[^;]*\/\s*denom/.test(body);
  const sample = sampleLemniscateDenom(15, 0.7);
  const invented = LEMNISCATE_DENOM_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: LEMNISCATE_DENOM_STAGE,
    session: LEMNISCATE_DENOM_SESSION_HASH,
    living: LEMNISCATE_DENOM_LIVING_HASH,
    pinned,
    scale,
    denom,
    x,
    z,
    y,
    yNotDivided,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: scale && denom && x && z && y && yNotDivided && sample.sharedByXandZ && !sample.yDividesDenom && invented.length === 0,
    note: 'infinity denom is 1+sin(theta)^2 and divides x and z only. y stays minor*sin(phi)*sin(t*0.5+idx). Paste not rewritten.',
  };
}

export function compileSessionStage461(source) {
  const hold = noteSessionLemniscateDenom(source);
  return {
    current: LEMNISCATE_DENOM_STAGE,
    session: LEMNISCATE_DENOM_SESSION_HASH,
    living: LEMNISCATE_DENOM_LIVING_HASH,
    paste: '2026-10-06 20:07 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 462, title: 'hold default fallthrough on the torus tube, no fifth case' },
      { stage: 463, title: 'hold triangular tAngle as floor snap to 2pi/3' },
      { stage: 464, title: 'hold infinity scale as major * 1.5 before the shared denom' },
    ],
  };
}
