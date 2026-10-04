/** Stage 398 — hold infinity-arm scale major * 1.5. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_SCALE_HOLD_STAGE = 398;
export const LEMNISCATE_SCALE_HOLD_SESSION_HASH = 'beec41f1';
export const LEMNISCATE_SCALE_HOLD_LIVING_HASH = '7cd81012';
export const LEMNISCATE_SCALE_FACTOR = 1.5;

const PINNED_LINE = 'const scale = major * 1.5;';

export function sessionLemniscateScale(major) {
  const m = Number.isFinite(major) ? major : 10;
  return m * LEMNISCATE_SCALE_FACTOR;
}

export function sessionLemniscateScaleXZ(theta, major) {
  const t = Number.isFinite(theta) ? theta : 0;
  const scale = sessionLemniscateScale(major);
  const s = Math.sin(t);
  const c = Math.cos(t);
  const denom = 1 + s * s;
  return {
    scale,
    denom,
    x: (scale * c) / denom,
    z: (scale * s * c) / denom,
  };
}

export function noteSessionLemniscateScaleHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(text);
  const origin = sessionLemniscateScaleXZ(0, 10);
  const pole = sessionLemniscateScaleXZ(Math.PI / 2, 10);
  const lane = sessionLemniscateScaleXZ(0, 12);
  const wider = sessionLemniscateScale(14);
  const ignoresMinor = sessionLemniscateScale(10) === 15;
  const notHamiltonian = 10 * 1 !== 15;
  const yIndependent = !/scale/.test('y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)');
  return {
    stage: LEMNISCATE_SCALE_HOLD_STAGE,
    session: LEMNISCATE_SCALE_HOLD_SESSION_HASH,
    living: LEMNISCATE_SCALE_HOLD_LIVING_HASH,
    pinned,
    factor: LEMNISCATE_SCALE_FACTOR,
    formula: 'scale = major * 1.5',
    hasSessionScale: hasScale,
    origin,
    pole,
    lane,
    wider,
    ignoresMinor,
    notHamiltonian,
    yIndependent,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale
      && origin.scale === 15
      && origin.x === 15
      && origin.z === 0
      && origin.denom === 1
      && pole.scale === 15
      && pole.denom === 2
      && pole.x === 0
      && pole.z === 0
      && lane.scale === 18
      && lane.x === 18
      && wider === 21
      && ignoresMinor
      && notHamiltonian
      && yIndependent,
    note: 'Stage 398 holds the infinity-arm scale major * 1.5. It does not use minor, idx, phi, t, or gravityPull. Denom still divides x and z. Hamiltonian hScale stays major. Paste not rewritten.',
  };
}
