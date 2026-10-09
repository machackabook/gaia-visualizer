/** Stage 523 — minor is 3 + toroidalWeave * 2, unread by gravityPull. Document only. Paste not rewritten. No secrets. */
export const MINOR_UNREAD_STAGE = 523;
export const MINOR_UNREAD_SESSION = 'beec41f1';
export const MINOR_UNREAD_LIVING = '7cd81012';

const PINNED_MINOR = 'let minor = 3 + (state.toroidalWeave * 2);';

export function sampleMinorUnreadByPull() {
  return { weave: 1.2, minor: 5.4, readsGravityPull: false };
}

export function noteSessionMinorUnreadByPull(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MINOR : String(source);
  const minorLine = (text.match(/let minor\s*=[^;]+;/) || [''])[0];
  const weaveTerm = /state\.toroidalWeave\s*\*\s*2/.test(minorLine);
  const base3 = /3\s*\+/.test(minorLine);
  const readsPull = /gravityPull|uGravity/.test(minorLine);
  const sample = sampleMinorUnreadByPull();
  return {
    stage: MINOR_UNREAD_STAGE,
    session: MINOR_UNREAD_SESSION,
    living: MINOR_UNREAD_LIVING,
    pinned,
    weaveTerm,
    base3,
    readsPull,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: weaveTerm && base3 && !readsPull && sample.readsGravityPull === false,
    note: 'minor stays 3 + toroidalWeave * 2. It does not read gravityPull or uGravity. Paste not rewritten.',
  };
}

export function compileSessionStage523(source) {
  const hold = noteSessionMinorUnreadByPull(source);
  return {
    current: MINOR_UNREAD_STAGE,
    session: MINOR_UNREAD_SESSION,
    living: MINOR_UNREAD_LIVING,
    paste: '2026-10-09 13:06 CDT',
    hold,
    next: [
      { stage: 524, title: 'hold infinity scale as major * 1.5, unread by the gravity copy' },
      { stage: 525, title: 'hold uTime as a direct copy of t, not a scaled clock' },
      { stage: 526, title: 'hold triangular lattice y unread by phi' },
    ],
  };
}
