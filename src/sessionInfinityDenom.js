/** Stage 472 — infinity denom stays 1 + sin(theta)^2 and is shared by x and z. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_DENOM_STAGE = 472;
export const INFINITY_DENOM_SESSION_HASH = 'beec41f1';
export const INFINITY_DENOM_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleInfinityDenom(theta) {
  const denom = 1 + Math.sin(theta) ** 2;
  return { theta, denom, sharedByXandZ: true, unreadByY: true };
}

function infinityBody(text) {
  const start = text.indexOf("case 'infinity'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  return start >= 0 && end > start ? text.slice(start, end) : '';
}

export function noteSessionInfinityDenom(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const body = infinityBody(text) || text;
  const formula = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)\s*;/.test(body);
  const xUses = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(body);
  const zUses = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(body);
  const yIgnores = !/y\s*=[^;]*\bdenom\b/.test(body);
  const sample = sampleInfinityDenom(Math.PI / 2);
  const expected = 1 + Math.sin(Math.PI / 2) ** 2;
  return {
    stage: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION_HASH,
    living: INFINITY_DENOM_LIVING_HASH,
    pinned,
    formula,
    xUses,
    zUses,
    yIgnores,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: formula && xUses && zUses && yIgnores && sample.denom === expected,
    note: 'infinity denom is 1 + sin(theta)^2. x and z divide by the same binding. y does not read denom. Paste not rewritten.',
  };
}

export function compileSessionStage472(source) {
  const hold = noteSessionInfinityDenom(source);
  return {
    current: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION_HASH,
    living: INFINITY_DENOM_LIVING_HASH,
    paste: '2026-10-07 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 473, title: 'hold torus tube as (major + minor * cos(phi)) on x and z' },
      { stage: 474, title: 'hold triangular sector snap as floor(theta / (2π/3)) * (2π/3)' },
      { stage: 475, title: 'hold infinity scale as major * 1.5, unread by the other three cases' },
    ],
  };
}
