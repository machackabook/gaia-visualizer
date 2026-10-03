/** Stage 391 — hold major = 10 + idx * 2 and minor = 3 + toroidalWeave * 2. Document only. No secrets. */
export const RADII_HOLD_STAGE = 391;
export const RADII_HOLD_SESSION_HASH = 'beec41f1';
export const RADII_HOLD_LIVING_HASH = '7cd81012';

const PINNED_RADII = `let major = 10 + (this.idx * 2);
let minor = 3 + (state.toroidalWeave * 2);`;

export function sessionRadii(idx, toroidalWeave) {
  const i = Number.isFinite(idx) ? idx : 0;
  const w = Number.isFinite(toroidalWeave) ? toroidalWeave : 0;
  return {
    major: 10 + i * 2,
    minor: 3 + w * 2,
  };
}

export function noteSessionRadiiHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_RADII : String(source);
  const hasMajor = /major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)/.test(text);
  const hasMinor = /minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)/.test(text);
  const base = sessionRadii(0, 0);
  const lane = sessionRadii(1, 1);
  const weave = sessionRadii(4, 1.2);
  return {
    stage: RADII_HOLD_STAGE,
    session: RADII_HOLD_SESSION_HASH,
    living: RADII_HOLD_LIVING_HASH,
    pinned,
    formula: 'major = 10 + idx * 2; minor = 3 + toroidalWeave * 2',
    hasSessionMajor: hasMajor,
    hasSessionMinor: hasMinor,
    base,
    lane,
    weave,
    pasteRewritten: false,
    secrets: false,
    ok: hasMajor && hasMinor && base.major === 10 && base.minor === 3 && lane.major === 12 && lane.minor === 5 && Math.abs(weave.major - 18) < 1e-12 && Math.abs(weave.minor - 5.4) < 1e-12,
    note: 'Stage 391 holds the session radii. major is per lane. minor is the shared weave. Paste not rewritten.',
  };
}
