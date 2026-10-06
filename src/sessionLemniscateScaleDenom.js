/** Stage 450 — hold infinity scale major*1.5 and denom 1+sin(theta)^2. Document only. Do not rewrite the paste. No secrets. */
export const LEMNISCATE_SCALE_DENOM_STAGE = 450;
export const LEMNISCATE_SCALE_DENOM_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_SCALE_DENOM_LIVING_HASH = '7cd81012';
export const LEMNISCATE_SCALE_DENOM_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function lemniscateScaleDenom(theta, major) {
  const scale = major * 1.5;
  const denom = 1 + Math.sin(theta) ** 2;
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  return { scale, denom, x, z, yUsesDenom: false };
}

export function noteSessionLemniscateScaleDenom(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const arm = (text.split("case 'infinity':")[1] || text).split('break;')[0];
  const scaleHeld = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(arm);
  const denomHeld = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(this\.theta\)\s*,\s*2\s*\)\s*;/.test(arm);
  const xHeld = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const zHeld = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const ySkipsDenom = yLine.length > 0 && !/denom/.test(yLine) && /minor\s*\*/.test(yLine);
  const invented = LEMNISCATE_SCALE_DENOM_EXTRAS.filter((name) => hasCase(text, name));
  const atZero = lemniscateScaleDenom(0, 10);
  const atQuarter = lemniscateScaleDenom(Math.PI / 4, 10);
  const atHalf = lemniscateScaleDenom(Math.PI / 2, 10);
  return {
    stage: LEMNISCATE_SCALE_DENOM_STAGE,
    session: LEMNISCATE_SCALE_DENOM_SESSION_HASH,
    living: LEMNISCATE_SCALE_DENOM_LIVING_HASH,
    pinned,
    scaleHeld,
    denomHeld,
    xHeld,
    zHeld,
    ySkipsDenom,
    atZero,
    atQuarter,
    atHalf,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      scaleHeld &&
      denomHeld &&
      xHeld &&
      zHeld &&
      ySkipsDenom &&
      invented.length === 0 &&
      atZero.scale === 15 &&
      atZero.denom === 1 &&
      atZero.x === 15 &&
      atZero.z === 0 &&
      Math.abs(atQuarter.denom - 1.5) < 1e-12 &&
      Math.abs(atHalf.denom - 2) < 1e-12 &&
      Math.abs(atHalf.x) < 1e-12 &&
      Math.abs(atHalf.z) < 1e-12,
    note: 'Infinity scale stays major * 1.5. Denom stays 1 + sin(theta)^2 on x and z only. y stays the shared tube. Paste not rewritten.',
  };
}

export function compileSessionStage450(source) {
  const hold = noteSessionLemniscateScaleDenom(source);
  return {
    current: LEMNISCATE_SCALE_DENOM_STAGE,
    session: LEMNISCATE_SCALE_DENOM_SESSION_HASH,
    living: LEMNISCATE_SCALE_DENOM_LIVING_HASH,
    paste: '2026-10-05 21:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
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
      {
        stage: 453,
        title: 'hold torus tube identity on x and z only',
        note: 'x^2 + z^2 = (major + minor * cos(phi))^2. y stays minor * sin(phi) * sin(t*0.5 + idx). Do not rewrite the paste.',
      },
    ],
  };
}
