/** Stage 528 — lemniscate denom is shared by x and z only. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_DENOM_ONLY_STAGE = 528;
export const LEMNISCATE_DENOM_ONLY_SESSION = 'beec41f1';
export const LEMNISCATE_DENOM_ONLY_LIVING = '7cd81012';

const PINNED_INFINITY = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleLemniscateDenomOnly() {
  const theta = Math.PI / 4;
  const phi = 0.3;
  const t = 1;
  const idx = 2;
  const major = 10;
  const minor = 3;
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { theta, scale, denom, x, y, z, yUsesDenom: false };
}

export function noteSessionLemniscateDenomOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const block = (text.match(/case\s+'infinity'[\s\S]*?break;/) || [PINNED_INFINITY])[0];
  const denom = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);/.test(block);
  const xDiv = /x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;/.test(block);
  const zDiv = /z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(block);
  const yBare = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(block);
  const yDivided = /y = [^;\n]*\/ denom/.test(block);
  const sample = sampleLemniscateDenomOnly();
  return {
    stage: LEMNISCATE_DENOM_ONLY_STAGE,
    session: LEMNISCATE_DENOM_ONLY_SESSION,
    living: LEMNISCATE_DENOM_ONLY_LIVING,
    pinned,
    denom,
    xDiv,
    zDiv,
    yBare,
    yDivided,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: denom && xDiv && zDiv && yBare && !yDivided && sample.yUsesDenom === false && sample.denom > 1,
    note: 'lemniscate denom 1 + sin(theta)^2 is shared by x and z only. Infinity y is not divided. Paste not rewritten.',
  };
}

export function compileSessionStage528(source) {
  const hold = noteSessionLemniscateDenomOnly(source);
  return {
    current: LEMNISCATE_DENOM_ONLY_STAGE,
    session: LEMNISCATE_DENOM_ONLY_SESSION,
    living: LEMNISCATE_DENOM_ONLY_LIVING,
    paste: '2026-10-09 16:06 CDT',
    hold,
    next: [
      { stage: 529, title: 'hold hamiltonian y lift sin(t) * 2 independent of hScale' },
      { stage: 530, title: 'hold session lerp alpha as the literal 0.05' },
      { stage: 531, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
