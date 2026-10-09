/** Stage 515 — lemniscate scale is major * 1.5 and does not read minor. Document only. Paste not rewritten. No secrets. */
export const LEMNISCATE_SCALE_UNREAD_STAGE = 515;
export const LEMNISCATE_SCALE_UNREAD_SESSION = 'beec41f1';
export const LEMNISCATE_SCALE_UNREAD_LIVING = '7cd81012';

const PINNED = 'const scale = major * 1.5;';

export function sampleLemniscateScaleUnread() {
  return {
    scale: 'major * 1.5',
    readsMinor: false,
    readsPhi: false,
    case: 'infinity',
  };
}

export function noteSessionLemniscateScaleUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const line = text.split('\n').find((row) => row.includes('const scale = major * 1.5')) || '';
  const hasScale = line.includes('const scale = major * 1.5');
  const unreadByMinor = hasScale && !/\bminor\b/.test(line);
  const unreadByPhi = hasScale && !/\bphi\b/.test(line);
  const sample = sampleLemniscateScaleUnread();
  return {
    stage: LEMNISCATE_SCALE_UNREAD_STAGE,
    session: LEMNISCATE_SCALE_UNREAD_SESSION,
    living: LEMNISCATE_SCALE_UNREAD_LIVING,
    pinned,
    hasScale,
    unreadByMinor,
    unreadByPhi,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && unreadByMinor && unreadByPhi && sample.readsMinor === false,
    note: 'infinity scale stays major * 1.5. That line does not read minor or phi. Paste not rewritten.',
  };
}

export function compileSessionStage515(source) {
  const hold = noteSessionLemniscateScaleUnread(source);
  return {
    current: LEMNISCATE_SCALE_UNREAD_STAGE,
    session: LEMNISCATE_SCALE_UNREAD_SESSION,
    living: LEMNISCATE_SCALE_UNREAD_LIVING,
    paste: '2026-10-09 09:08 CDT',
    hold,
    next: [
      { stage: 516, title: 'hold lerp alpha as the literal 0.05' },
      { stage: 517, title: 'hold theta step as the only angle write' },
      { stage: 518, title: 'hold gravityPull as the theta-step multiplier only' },
    ],
  };
}
