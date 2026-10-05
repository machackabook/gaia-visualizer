/** Stage 428 — session major stays 10 + idx * 2 and does not scale with gravityPull. Document only. Paste not rewritten. No secrets. */
export const MAJOR_STAGE = 428;
export const MAJOR_SESSION_HASH = 'beec41f1';
export const MAJOR_LIVING_HASH = '7cd81012';

const PINNED_MAJOR = 'let major = 10 + (this.idx * 2);';

export function sessionMajor(idx, gravityPull) {
  const i = Number.isFinite(idx) ? idx : 0;
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  return {
    major: 10 + i * 2,
    idx: i,
    gravityPull: pull,
    majorUsesGravityPull: false,
  };
}

export function noteSessionMajorUnscaled(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MAJOR : String(source);
  const majorLine = /let major = 10 \+ \(this\.idx \* 2\);/.test(text);
  const majorScaled = /let major =[^;\n]*gravityPull/.test(text);
  const idle = sessionMajor(0, 0);
  const unit = sessionMajor(4, 1);
  const doubled = sessionMajor(4, 2);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: MAJOR_STAGE,
    session: MAJOR_SESSION_HASH,
    living: MAJOR_LIVING_HASH,
    pinned,
    formula: 'major = 10 + idx * 2; does not take gravityPull',
    majorLine,
    majorScaled,
    idle,
    unit,
    doubled,
    pasteRewritten: false,
    secrets: false,
    ok: majorLine && !majorScaled
      && near(idle.major, 10) && idle.majorUsesGravityPull === false
      && near(unit.major, 18) && near(doubled.major, 18)
      && near(unit.major, doubled.major),
    note: 'Stage 428 holds major at 10 + idx * 2. gravityPull still scales the theta step and is written to uGravity. It does not scale major. Paste not rewritten.',
  };
}
