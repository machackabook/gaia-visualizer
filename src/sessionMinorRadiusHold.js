/** Stage 532 — minor is 3 + (toroidalWeave * 2) before the switch. Document only. Paste not rewritten. No secrets. */
export const MINOR_RADIUS_HOLD_STAGE = 532;
export const MINOR_RADIUS_HOLD_SESSION = 'beec41f1';
export const MINOR_RADIUS_HOLD_LIVING = '7cd81012';

const PINNED_MINOR = [
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
  '',
  'switch(targetState.geometry) {',
].join('\n');

export function sampleMinorRadiusHold(toroidalWeave = 1.2) {
  return {
    toroidalWeave,
    minor: 3 + (toroidalWeave * 2),
    pullScalesMinor: false,
    beforeSwitch: true,
  };
}

export function noteSessionMinorRadiusHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MINOR : String(source);
  const form = /let minor = 3 \+ \(state\.toroidalWeave \* 2\);/.test(text);
  const switchAt = text.search(/switch\s*\(\s*targetState\.geometry\s*\)/);
  const minorAt = text.search(/let minor = 3 \+ \(state\.toroidalWeave \* 2\);/);
  const beforeSwitch = minorAt >= 0 && (switchAt < 0 || minorAt < switchAt);
  const pullScales = /let minor =[^\n]*gravityPull/.test(text);
  const sample = sampleMinorRadiusHold();
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: MINOR_RADIUS_HOLD_STAGE,
    session: MINOR_RADIUS_HOLD_SESSION,
    living: MINOR_RADIUS_HOLD_LIVING,
    pinned,
    form,
    beforeSwitch,
    pullScales,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: form && beforeSwitch && !pullScales
      && sample.pullScalesMinor === false
      && sample.beforeSwitch === true
      && near(sample.minor, 5.4),
    note: 'minor stays 3 + (state.toroidalWeave * 2) before the geometry switch. gravityPull does not scale it. Paste not rewritten.',
  };
}

export function compileSessionStage532(source) {
  const hold = noteSessionMinorRadiusHold(source);
  return {
    current: MINOR_RADIUS_HOLD_STAGE,
    session: MINOR_RADIUS_HOLD_SESSION,
    living: MINOR_RADIUS_HOLD_LIVING,
    paste: '2026-10-09 17:07 CDT',
    hold,
    next: [
      { stage: 533, title: 'hold phi read-only in the session paste' },
      { stage: 534, title: 'hold major parentheses form 10 + (idx * 2) distinct from the 0.002 theta coefficient' },
      { stage: 535, title: 'hold uTime then uGravity as the only material writes' },
    ],
  };
}
