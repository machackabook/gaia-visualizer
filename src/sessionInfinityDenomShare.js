/** Stage 406 — hold infinity denom 1 + sin(theta)^2 shared by x and z, not applied to y. Document only. Paste not rewritten. No secrets. */
export const INFINITY_DENOM_SHARE_STAGE = 406;
export const INFINITY_DENOM_SHARE_SESSION_HASH = 'beec41f1';
export const INFINITY_DENOM_SHARE_LIVING_HASH = '7cd81012';

const PINNED_INFINITY = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function lemniscateSample(theta, phi, t, idx, major, minor) {
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { x, y, z, scale, denom, yUsesDenom: false };
}

export function noteSessionInfinityDenomShare(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const shared = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);[\s\S]*x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;[\s\S]*z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const yBare = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(text);
  const yDivided = /y = [^;\n]*\/ denom/.test(text);
  const sample = lemniscateSample(Math.PI / 4, 0.3, 1, 2, 10, 3);
  return {
    stage: INFINITY_DENOM_SHARE_STAGE,
    session: INFINITY_DENOM_SHARE_SESSION_HASH,
    living: INFINITY_DENOM_SHARE_LIVING_HASH,
    pinned,
    formula: 'denom = 1 + sin(theta)^2 shared by x and z; y is not divided',
    shared,
    yBare,
    yDivided,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: shared && yBare && !yDivided && sample.yUsesDenom === false && sample.denom > 1,
    note: 'Stage 406 holds the lemniscate denom on x and z only. Infinity y stays the shared weave lift. Paste not rewritten.',
  };
}
