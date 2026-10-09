/** Stage 505 — major = 10 + idx * 2 is assigned before the switch. Document only. Paste not rewritten. No secrets. */
export const MAJOR_BEFORE_STAGE = 505;
export const MAJOR_BEFORE_SESSION = 'beec41f1';
export const MAJOR_BEFORE_LIVING = '7cd81012';

const PINNED = [
  '    let major = 10 + (this.idx * 2);',
  '    let minor = 3 + (state.toroidalWeave * 2);',
  '',
  '    switch(targetState.geometry) {',
].join('\n');

export function sampleMajorBeforeSwitch(idx = 4) {
  return {
    idx,
    major: 10 + idx * 2,
    assignedBeforeSwitch: true,
  };
}

export function noteSessionMajorBeforeSwitch(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const majorAt = text.search(/let\s+major\s*=\s*10\s*\+\s*\(this\.idx\s*\*\s*2\)\s*;/);
  const switchAt = text.search(/switch\s*\(\s*targetState\.geometry\s*\)/);
  const before = majorAt >= 0 && switchAt >= 0 && majorAt < switchAt;
  const sample = sampleMajorBeforeSwitch();
  return {
    stage: MAJOR_BEFORE_STAGE,
    session: MAJOR_BEFORE_SESSION,
    living: MAJOR_BEFORE_LIVING,
    pinned,
    majorAt,
    switchAt,
    before,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: before && sample.major === 18 && sample.assignedBeforeSwitch === true,
    note: 'major = 10 + (this.idx * 2) is assigned before the geometry switch. Paste not rewritten.',
  };
}

export function compileSessionStage505(source) {
  const hold = noteSessionMajorBeforeSwitch(source);
  return {
    current: MAJOR_BEFORE_STAGE,
    session: MAJOR_BEFORE_SESSION,
    living: MAJOR_BEFORE_LIVING,
    paste: '2026-10-08 20:09 CDT',
    hold,
    next: [
      { stage: 506, title: 'hold minor = 3 + toroidalWeave * 2 beside major, before the switch' },
      { stage: 507, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 508, title: 'hold uniform writes as uTime then uGravity only' },
    ],
  };
}
