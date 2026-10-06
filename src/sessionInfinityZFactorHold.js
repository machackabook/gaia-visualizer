/** Stage 454 — hold infinity z as scale * sin(theta) * cos(theta) / denom. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_Z_FACTOR_STAGE = 454;
export const INFINITY_Z_FACTOR_SESSION_HASH = 'beec41f1';
export const INFINITY_Z_FACTOR_LIVING_HASH = '7cd81012';
export const INFINITY_Z_FACTOR_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_INFINITY = [
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

export function infinityZFactor(major, theta) {
  const scale = major * 1.5;
  const denom = 1 + Math.sin(theta) * Math.sin(theta);
  const factor = Math.sin(theta) * Math.cos(theta);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * factor) / denom;
  return { scale, denom, factor, x, z, expected: (scale * Math.sin(theta) * Math.cos(theta)) / denom };
}

export function noteSessionInfinityZFactorHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const arm = (text.split("case 'infinity':")[1] || text).split('break;')[0];
  const zHeld = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const xHeld = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const yOffFactor = yLine.length > 0 && !/denom/.test(yLine) && !/scale/.test(yLine);
  const denomHeld = /denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(this\.theta\)\s*,\s*2\s*\)/.test(arm);
  const scaleHeld = /scale\s*=\s*major\s*\*\s*1\.5/.test(arm);
  const invented = INFINITY_Z_FACTOR_EXTRAS.filter((name) => hasCase(text, name));
  const sample = infinityZFactor(10, Math.PI / 4);
  const axis = infinityZFactor(10, 0);
  return {
    stage: INFINITY_Z_FACTOR_STAGE,
    session: INFINITY_Z_FACTOR_SESSION_HASH,
    living: INFINITY_Z_FACTOR_LIVING_HASH,
    pinned,
    zHeld,
    xHeld,
    yOffFactor,
    denomHeld,
    scaleHeld,
    sample,
    axis,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      zHeld &&
      xHeld &&
      yOffFactor &&
      denomHeld &&
      scaleHeld &&
      invented.length === 0 &&
      Math.abs(sample.z - sample.expected) < 1e-9 &&
      Math.abs(sample.z - 5) < 1e-12 &&
      Math.abs(sample.scale - 15) < 1e-12 &&
      Math.abs(sample.denom - 1.5) < 1e-12 &&
      Math.abs(sample.factor - 0.5) < 1e-12 &&
      Math.abs(axis.z) < 1e-12 &&
      Math.abs(sample.z - sample.x * Math.sin(Math.PI / 4)) < 1e-9,
    note: 'Infinity z stays scale * sin(theta) * cos(theta) / denom. y does not read scale or denom. Paste not rewritten.',
  };
}

export function compileSessionStage454(source) {
  const hold = noteSessionInfinityZFactorHold(source);
  return {
    current: INFINITY_Z_FACTOR_STAGE,
    session: INFINITY_Z_FACTOR_SESSION_HASH,
    living: INFINITY_Z_FACTOR_LIVING_HASH,
    paste: '2026-10-06 13:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 455, title: 'hold triangular tAngle snap to 2π/3 sectors' },
      { stage: 456, title: 'hold theta step as the only gravityPull product' },
      { stage: 457, title: 'hold infinity y identical to torus y, no scale or denom' },
    ],
  };
}
