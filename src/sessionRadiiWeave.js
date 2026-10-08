/** Stage 491 — minor = 3 + toroidalWeave * 2 is the only weave consumer in the radii block. Document only. No secrets. */
export const RADII_WEAVE_STAGE = 491;
export const RADII_WEAVE_SESSION = 'beec41f1';
export const RADII_WEAVE_LIVING = '7cd81012';

const PINNED = [
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
].join('\n');

export function sampleRadii(idx, weave) {
  const major = 10 + idx * 2;
  const minor = 3 + weave * 2;
  return {
    idx,
    weave,
    major,
    minor,
    majorReadsWeave: false,
  };
}

export function noteSessionRadiiWeave(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const switchAt = text.indexOf('switch');
  const radii = switchAt > 0 ? text.slice(0, switchAt) : text;
  const majorLine = (radii.match(/let\s+major\s*=[^;]+;/) || [''])[0];
  const minorLine = (radii.match(/let\s+minor\s*=[^;]+;/) || [''])[0];
  const majorOk = /major\s*=\s*10\s*\+\s*\(?\s*this\.idx\s*\*\s*2\s*\)?/.test(majorLine);
  const minorOk = /minor\s*=\s*3\s*\+\s*\(?\s*state\.toroidalWeave\s*\*\s*2\s*\)?/.test(minorLine);
  const majorUnread = majorLine.length > 0 && !/toroidalWeave/.test(majorLine);
  const weaveHits = radii.match(/toroidalWeave/g) || [];
  const onlyMinor = weaveHits.length === 1 && /toroidalWeave/.test(minorLine);
  const sampleIdle = sampleRadii(0, 0);
  const sampleWeave = sampleRadii(4, 1.5);
  const sampleOk = sampleIdle.minor === 3 && sampleIdle.major === 10
    && sampleWeave.minor === 6 && sampleWeave.major === 18;
  return {
    stage: RADII_WEAVE_STAGE,
    session: RADII_WEAVE_SESSION,
    living: RADII_WEAVE_LIVING,
    pinned,
    majorOk,
    minorOk,
    majorUnread,
    onlyMinor,
    sampleIdle,
    sampleWeave,
    pasteRewritten: false,
    secrets: false,
    ok: majorOk && minorOk && majorUnread && onlyMinor && sampleOk,
    note: 'Radii assign before the switch. major reads idx only. minor = 3 + toroidalWeave * 2 is the only weave consumer in that block. Paste not rewritten.',
  };
}

export function compileSessionStage491(source) {
  const hold = noteSessionRadiiWeave(source);
  return {
    current: RADII_WEAVE_STAGE,
    session: RADII_WEAVE_SESSION,
    living: RADII_WEAVE_LIVING,
    paste: '2026-10-08 09:08 CDT',
    hold,
    next: [
      { stage: 492, title: 'hold uTime then uGravity as the only material writes' },
      { stage: 493, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 494, title: 'hold triangular sector snap unread by the theta*5 weave' },
    ],
  };
}
