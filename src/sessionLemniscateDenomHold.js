/** Stage 392 — hold infinity-arm denom 1 + sin(theta)^2. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_DENOM_HOLD_STAGE = 392;
export const LEMNISCATE_DENOM_HOLD_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_DENOM_HOLD_LIVING_HASH = '7cd81012';
export const LEMNISCATE_DENOM_FLOOR = 1;
export const LEMNISCATE_DENOM_CEILING = 2;

const PINNED_LINE = 'const denom = 1 + Math.pow(Math.sin(this.theta), 2);';

export function sessionLemniscateDenom(theta) {
  const t = Number.isFinite(theta) ? theta : 0;
  const s = Math.sin(t);
  return 1 + s * s;
}

export function sessionLemniscateXZ(theta, major) {
  const t = Number.isFinite(theta) ? theta : 0;
  const m = Number.isFinite(major) ? major : 10;
  const scale = m * 1.5;
  const denom = sessionLemniscateDenom(t);
  const c = Math.cos(t);
  const s = Math.sin(t);
  return {
    scale,
    denom,
    x: (scale * c) / denom,
    z: (scale * s * c) / denom,
  };
}

export function noteSessionLemniscateDenomHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasDenom = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)/.test(text);
  const origin = sessionLemniscateXZ(0, 10);
  const pole = sessionLemniscateXZ(Math.PI / 2, 10);
  const quarter = sessionLemniscateXZ(Math.PI / 4, 10);
  const lane = sessionLemniscateXZ(0, 12);
  const yIndependent = !/denom/.test('y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)');
  return {
    stage: LEMNISCATE_DENOM_HOLD_STAGE,
    session: LEMNISCATE_DENOM_HOLD_SESSION_HASH,
    living: LEMNISCATE_DENOM_HOLD_LIVING_HASH,
    pinned,
    formula: '1 + sin(theta)^2',
    hasSessionDenom: hasDenom,
    floor: LEMNISCATE_DENOM_FLOOR,
    ceiling: LEMNISCATE_DENOM_CEILING,
    origin,
    pole,
    quarter,
    lane,
    yIndependent,
    pasteRewritten: false,
    secrets: false,
    ok: hasDenom
      && origin.denom === 1
      && origin.x === 15
      && origin.z === 0
      && pole.denom === 2
      && pole.x === 0
      && pole.z === 0
      && Math.abs(quarter.denom - 1.5) < 1e-12
      && lane.scale === 18
      && lane.x === 18
      && yIndependent,
    note: 'Stage 392 holds the Bernoulli denom on the infinity arm. Range is [1, 2], so the division cannot hit zero. y does not use denom. Paste not rewritten.',
  };
}
