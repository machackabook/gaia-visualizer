/** Stage 431 — radii block: minor is the only toroidalWeave consumer. Document only. Paste not rewritten. No secrets. */
export const MINOR_WEAVE_STAGE = 431;
export const MINOR_WEAVE_SESSION_HASH = 'beec41f1';
export const MINOR_WEAVE_LIVING_HASH = '7cd81012';

const PINNED_RADII = 'let major = 10 + (this.idx * 2);\n    let minor = 3 + (state.toroidalWeave * 2);';

export function sessionMinorWeave(toroidalWeave, idx) {
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const i = Number.isFinite(idx) ? idx : 0;
  return {
    major: 10 + i * 2,
    minor: 3 + weave * 2,
    idx: i,
    toroidalWeave: weave,
    majorUsesWeave: false,
    minorUsesWeave: true,
  };
}

export function noteSessionMinorWeaveOnly(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_RADII : String(source);
  const radii = text.split('switch(targetState.geometry)')[0];
  const minorLine = /let minor = 3 \+ \(state\.toroidalWeave \* 2\);/.test(radii);
  const majorLine = /let major = 10 \+ \(this\.idx \* 2\);/.test(radii);
  const majorUsesWeave = /let major =[^;\n]*toroidalWeave/.test(radii);
  const weaveHits = (radii.match(/toroidalWeave/g) || []).length;
  const quiet = sessionMinorWeave(0, 4);
  const unit = sessionMinorWeave(1, 4);
  const woven = sessionMinorWeave(1.2, 4);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: MINOR_WEAVE_STAGE,
    session: MINOR_WEAVE_SESSION_HASH,
    living: MINOR_WEAVE_LIVING_HASH,
    pinned,
    formula: 'minor = 3 + toroidalWeave * 2; major = 10 + idx * 2 does not take toroidalWeave',
    minorLine,
    majorLine,
    majorUsesWeave,
    weaveHitsInRadii: weaveHits,
    quiet,
    unit,
    woven,
    pasteRewritten: false,
    secrets: false,
    ok: minorLine && majorLine && !majorUsesWeave && weaveHits === 1
      && quiet.minorUsesWeave === true && quiet.majorUsesWeave === false
      && near(quiet.minor, 3) && near(unit.minor, 5) && near(woven.minor, 5.4)
      && near(quiet.major, 18) && near(unit.major, 18) && near(woven.major, 18),
    note: 'Stage 431 holds minor as the only toroidalWeave consumer in the radii block. Major stays 10 + idx * 2. Paste not rewritten.',
  };
}
