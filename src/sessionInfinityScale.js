/** Stage 464 — infinity scale is major * 1.5 before the shared denom. Document only. Do not rewrite the paste. No secrets. */
export const INF_SCALE_STAGE = 464;
export const INF_SCALE_SESSION_HASH = 'beec41f1';
export const INF_SCALE_LIVING_HASH = '7cd81012';
export const INF_SCALE_FACTOR = 1.5;

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleInfinityScale(major) {
  const scale = major * INF_SCALE_FACTOR;
  return {
    major,
    factor: INF_SCALE_FACTOR,
    scale,
    scaleBeforeDenom: scale === major * 1.5,
    yIgnoresScale: true,
  };
}

export function noteSessionInfinityScale(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['\"]infinity['\"][\s\S]*?break\s*;/.exec(text);
  const body = arm ? arm[0] : (pinned ? text : '');
  const scale = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(body);
  const denom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)\s*;/.test(body);
  const scaleBeforeDenom = body.indexOf('const scale = major * 1.5;') >= 0
    && body.indexOf('const scale = major * 1.5;') < body.indexOf('const denom');
  const x = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(body);
  const z = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom\s*;/.test(body);
  const y = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/.test(body);
  const yReadsScale = /y\s*=[^;]*\bscale\b/.test(body);
  const yReadsDenom = /y\s*=[^;]*\bdenom\b/.test(body);
  const sample = sampleInfinityScale(10);
  return {
    stage: INF_SCALE_STAGE,
    session: INF_SCALE_SESSION_HASH,
    living: INF_SCALE_LIVING_HASH,
    pinned,
    scale,
    denom,
    scaleBeforeDenom,
    x,
    z,
    y,
    yIgnoresScale: y && !yReadsScale && !yReadsDenom,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scale && denom && scaleBeforeDenom && x && z && y && !yReadsScale && !yReadsDenom && sample.scaleBeforeDenom && sample.yIgnoresScale,
    note: 'infinity scale is major * 1.5 and is assigned before the shared denom. denom is used by x and z only. y does not read scale or denom. Paste not rewritten.',
  };
}

export function compileSessionStage464(source) {
  const hold = noteSessionInfinityScale(source);
  return {
    current: INF_SCALE_STAGE,
    session: INF_SCALE_SESSION_HASH,
    living: INF_SCALE_LIVING_HASH,
    paste: '2026-10-06 23:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 465, title: 'hold torus y identical to infinity y, omitting the tube radius' },
      { stage: 466, title: 'hold lerp alpha as the literal 0.05, unscaled by gravityPull' },
      { stage: 467, title: 'hold lemniscate z as sin(theta) * cos(theta) over the same denom' },
    ],
  };
}
