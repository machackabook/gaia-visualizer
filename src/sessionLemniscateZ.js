/** Stage 467 — lemniscate z stays sin(theta) * cos(theta) over the same denom. Document only. Do not rewrite the paste. No secrets. */
export const LEMNISCATE_Z_STAGE = 467;
export const LEMNISCATE_Z_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_Z_LIVING_HASH = '7cd81012';

const Z_LINE = 'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  Z_LINE,
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleLemniscateZ(scale, theta) {
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  return { scale, theta, denom, z, sharedDenom: true, product: true };
}

export function noteSessionLemniscateZ(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['"]infinity['"][\s\S]*?break\s*;/.exec(text);
  const infinity = arm ? arm[0] : '';
  const zLine = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(infinity);
  const shared = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)\s*;/.test(infinity)
    && /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(infinity);
  const yIgnores = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/.test(infinity)
    && !/y\s*=[^;]*denom/.test(infinity);
  const sample = sampleLemniscateZ(15, Math.PI / 4);
  return {
    stage: LEMNISCATE_Z_STAGE,
    session: LEMNISCATE_Z_SESSION_HASH,
    living: LEMNISCATE_Z_LIVING_HASH,
    pinned,
    zLine,
    sharedDenom: shared,
    yIgnoresDenom: yIgnores,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: zLine && shared && yIgnores && sample.sharedDenom && sample.product && sample.denom > 0,
    note: 'infinity z is scale * sin(theta) * cos(theta) over the same denom as x. y does not read denom. Paste not rewritten.',
  };
}

export function compileSessionStage467(source) {
  const hold = noteSessionLemniscateZ(source);
  return {
    current: LEMNISCATE_Z_STAGE,
    session: LEMNISCATE_Z_SESSION_HASH,
    living: LEMNISCATE_Z_LIVING_HASH,
    paste: '2026-10-07 10:08 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 468, title: 'hold theta step as the product (0.01 + idx * 0.002) * gravityPull' },
      { stage: 469, title: 'hold uniform writes as uTime then uGravity, in that order' },
      { stage: 470, title: 'hold minor as 3 + toroidalWeave * 2, unread by hamiltonian' },
    ],
  };
}
