/** Stage 506 — minor = 3 + toroidalWeave * 2 is assigned beside major, before the switch. Document only. Paste not rewritten. No secrets. */
export const MINOR_BEFORE_STAGE = 506;
export const MINOR_BEFORE_SESSION = 'beec41f1';
export const MINOR_BEFORE_LIVING = '7cd81012';

const PINNED = [
  '    let major = 10 + (this.idx * 2);',
  '    let minor = 3 + (state.toroidalWeave * 2);',
  '',
  '    switch(targetState.geometry) {',
].join('\n');

export function sampleMinorBeforeSwitch(idx = 4, weave = 1.5) {
  return {
    idx,
    weave,
    major: 10 + idx * 2,
    minor: 3 + weave * 2,
    besideMajor: true,
    assignedBeforeSwitch: true,
  };
}

export function noteSessionMinorBeforeSwitch(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const majorAt = text.search(/let\s+major\s*=\s*10\s*\+\s*\(this\.idx\s*\*\s*2\)\s*;/);
  const minorAt = text.search(/let\s+minor\s*=\s*3\s*\+\s*\(state\.toroidalWeave\s*\*\s*2\)\s*;/);
  const switchAt = text.search(/switch\s*\(\s*targetState\.geometry\s*\)/);
  const beside = majorAt >= 0 && minorAt > majorAt;
  const before = minorAt >= 0 && switchAt >= 0 && minorAt < switchAt;
  const sample = sampleMinorBeforeSwitch();
  return {
    stage: MINOR_BEFORE_STAGE,
    session: MINOR_BEFORE_SESSION,
    living: MINOR_BEFORE_LIVING,
    pinned,
    majorAt,
    minorAt,
    switchAt,
    beside,
    before,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: beside && before && sample.minor === 6 && sample.major === 18 && sample.assignedBeforeSwitch === true,
    note: 'minor = 3 + (state.toroidalWeave * 2) sits beside major and is assigned before the geometry switch. Paste not rewritten.',
  };
}

export function compileSessionStage506(source) {
  const hold = noteSessionMinorBeforeSwitch(source);
  return {
    current: MINOR_BEFORE_STAGE,
    session: MINOR_BEFORE_SESSION,
    living: MINOR_BEFORE_LIVING,
    paste: '2026-10-08 21:06 CDT',
    hold,
    next: [
      { stage: 507, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 508, title: 'hold uniform writes as uTime then uGravity only' },
      { stage: 509, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
    ],
  };
}
