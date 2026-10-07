/** Stage 471 — major stays 10 + idx * 2 and is assigned before the switch. Document only. No secrets. */
export const MAJOR_RADIUS_STAGE = 471;
export const MAJOR_RADIUS_SESSION_HASH = 'beec41f1';
export const MAJOR_RADIUS_LIVING_HASH = '7cd81012';

const PINNED = [
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
  'switch(targetState.geometry) {',
].join('\n');

export function sampleMajorRadius(idx) {
  const major = 10 + idx * 2;
  return { idx, major, base: 10, idxScale: 2, beforeSwitch: true };
}

export function noteSessionMajorRadius(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const formula = /let\s+major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)\s*;/.test(text);
  const majorAt = text.search(/let\s+major\s*=\s*10\s*\+/);
  const switchAt = text.indexOf('switch(targetState.geometry)');
  const beforeSwitch = majorAt >= 0 && switchAt > majorAt;
  const sample = sampleMajorRadius(4);
  const expected = 10 + 4 * 2;
  return {
    stage: MAJOR_RADIUS_STAGE,
    session: MAJOR_RADIUS_SESSION_HASH,
    living: MAJOR_RADIUS_LIVING_HASH,
    pinned,
    formula,
    beforeSwitch,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: formula && beforeSwitch && sample.major === expected,
    note: 'major is 10 + idx * 2 and is assigned before the geometry switch. Paste not rewritten.',
  };
}

export function compileSessionStage471(source) {
  const hold = noteSessionMajorRadius(source);
  return {
    current: MAJOR_RADIUS_STAGE,
    session: MAJOR_RADIUS_SESSION_HASH,
    living: MAJOR_RADIUS_LIVING_HASH,
    paste: '2026-10-07 11:07 CDT',
    hold,
    next: [
      { stage: 472, title: 'hold infinity denom as 1 + sin(theta)^2, shared by x and z' },
      { stage: 473, title: 'hold torus tube as (major + minor * cos(phi)) on x and z' },
      { stage: 474, title: 'hold triangular sector snap as floor(theta / (2π/3)) * (2π/3)' },
    ],
  };
}
