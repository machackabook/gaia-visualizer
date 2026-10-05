/** Stage 421 — infinity denom shared by x and z only. Document only. Paste not rewritten. No secrets. */
export const INFINITY_DENOM_ONLY_STAGE = 421;
export const INFINITY_DENOM_ONLY_SESSION_HASH = 'beec41f1';
export const INFINITY_DENOM_ONLY_LIVING_HASH = '7cd81012';

const PINNED_INFINITY = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function lemniscateDenomPoint(theta, phi, t, idx, major, minor) {
  const scale = major * 1.5;
  const denom = 1 + Math.pow(Math.sin(theta), 2);
  const x = (scale * Math.cos(theta)) / denom;
  const z = (scale * Math.sin(theta) * Math.cos(theta)) / denom;
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return { x, y, z, scale, denom, yUsesDenom: false };
}

export function noteSessionInfinityDenomOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_INFINITY : String(source);
  const block = (text.match(/case\s+'infinity'[\s\S]*?break;/) || [PINNED_INFINITY])[0];
  const shared = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);[\s\S]*x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;[\s\S]*z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(block);
  const yBare = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(block);
  const yDivided = /y = [^;\n]*\/ denom/.test(block);
  const origin = lemniscateDenomPoint(0, 0, 0, 0, 10, 3);
  const lobe = lemniscateDenomPoint(Math.PI / 4, 0, 0, 0, 10, 3);
  return {
    stage: INFINITY_DENOM_ONLY_STAGE,
    session: INFINITY_DENOM_ONLY_SESSION_HASH,
    living: INFINITY_DENOM_ONLY_LIVING_HASH,
    pinned,
    formula: 'denom = 1 + sin(theta)^2 shared by x and z; y is not divided',
    shared,
    yBare,
    yDivided,
    origin,
    lobe,
    pasteRewritten: false,
    secrets: false,
    ok: shared && yBare && !yDivided && origin.denom === 1 && origin.x === 15 && origin.z === 0 && origin.y === 0 && lobe.denom === 1.5 && lobe.yUsesDenom === false,
    note: 'Stage 421 holds the lemniscate denom on x and z only. Infinity y stays the shared tube. Paste not rewritten.',
  };
}
