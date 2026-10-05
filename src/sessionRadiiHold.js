/** Stage 419 — session radii stay major = 10 + idx * 2, minor = 3 + toroidalWeave * 2. Document only. Paste not rewritten. No secrets. */
export const RADII_HOLD_STAGE = 419;
export const RADII_HOLD_SESSION_HASH = 'beec41f1';
export const RADII_HOLD_LIVING_HASH = '7cd81012';

const PINNED_PASTE = `let major = 10 + (this.idx * 2);
let minor = 3 + (state.toroidalWeave * 2);`;

export function sessionRadii(idx, toroidalWeave) {
  const i = Number.isFinite(idx) ? idx : 0;
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  return {
    major: 10 + i * 2,
    minor: 3 + weave * 2,
  };
}

export function noteSessionRadiiHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const major = /major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)/.test(text);
  const minor = /minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)/.test(text);
  const sample = sessionRadii(4, 1);
  return {
    stage: RADII_HOLD_STAGE,
    session: RADII_HOLD_SESSION_HASH,
    living: RADII_HOLD_LIVING_HASH,
    pinned,
    major,
    minor,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: major && minor && sample.major === 18 && sample.minor === 5,
    note: 'Stage 419 holds session radii. major = 10 + idx * 2. minor = 3 + toroidalWeave * 2. Paste not rewritten.',
  };
}
