/** Stage 414 — hold infinity scale major * 1.5 before the lemniscate map. Document only. Paste not rewritten. No secrets. */
export const INFINITY_SCALE_BEFORE_MAP_STAGE = 414;
export const INFINITY_SCALE_BEFORE_MAP_SESSION_HASH = 'beec41f1';
export const INFINITY_SCALE_BEFORE_MAP_LIVING_HASH = '7cd81012';
export const INFINITY_SCALE_FACTOR = 1.5;

const PINNED_BLOCK = `const scale = major * 1.5;
const denom = 1 + Math.pow(Math.sin(this.theta), 2);
x = (scale * Math.cos(this.theta)) / denom;
z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;`;

export function infinityScaleBeforeMap(theta, major) {
  const t = Number.isFinite(theta) ? theta : 0;
  const R = Number.isFinite(major) ? major : 10;
  const scale = R * INFINITY_SCALE_FACTOR;
  const s = Math.sin(t);
  const c = Math.cos(t);
  const denom = 1 + s * s;
  return {
    scale,
    denom,
    majorUsedRaw: false,
    x: (scale * c) / denom,
    z: (scale * s * c) / denom,
  };
}

export function noteSessionInfinityScaleBeforeMap(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_BLOCK : String(source);
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(text);
  const xUsesScale = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom/.test(text);
  const zUsesScale = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(this\.theta\)\s*\*\s*Math\.cos\(this\.theta\)\s*\)\s*\/\s*denom/.test(text);
  const rawMajorOnX = /x\s*=\s*\(\s*major\s*\*\s*Math\.cos\(this\.theta\)/.test(text);
  const origin = infinityScaleBeforeMap(0, 10);
  const quarter = infinityScaleBeforeMap(Math.PI / 4, 10);
  const lane = infinityScaleBeforeMap(0, 12);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: INFINITY_SCALE_BEFORE_MAP_STAGE,
    session: INFINITY_SCALE_BEFORE_MAP_SESSION_HASH,
    living: INFINITY_SCALE_BEFORE_MAP_LIVING_HASH,
    pinned,
    factor: INFINITY_SCALE_FACTOR,
    formula: 'scale = major * 1.5; x,z use scale / denom',
    hasScale,
    xUsesScale,
    zUsesScale,
    rawMajorOnX,
    origin,
    quarter,
    lane,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && xUsesScale && zUsesScale && !rawMajorOnX
      && origin.scale === 15 && origin.x === 15 && origin.z === 0 && origin.denom === 1
      && near(quarter.denom, 1.5) && near(quarter.x, 15 * Math.SQRT1_2 / 1.5) && near(quarter.z, 7.5 / 1.5)
      && lane.scale === 18 && lane.x === 18 && origin.majorUsedRaw === false,
    note: 'Stage 414 holds the infinity arm scale major * 1.5 applied before the lemniscate division. Raw major is not the map radius. Hamiltonian hScale stays major. Paste not rewritten.',
  };
}
