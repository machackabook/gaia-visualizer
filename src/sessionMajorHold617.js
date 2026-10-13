/** Stage 617 — hold major = 10 + (idx * 2) unread by pull. Document only. Do not rewrite the paste. No secrets. */
export const MAJOR_HOLD_617_STAGE = 617;
export const MAJOR_HOLD_617_SESSION = 'beec41f1';
export const MAJOR_HOLD_617_LIVING = '7cd81012';

const PINNED_MAJOR = `let major = 10 + (this.idx * 2);`;

export function noteSessionMajorHold617(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MAJOR : String(source);
  const hasMajor = /let\s+major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\)/.test(text);
  const beforeSwitch = /let\s+major\s*=\s*10\s*\+\s*\(\s*this\.idx\s*\*\s*2\s*\);[\s\S]*?switch\s*\(\s*targetState\.geometry\s*\)/.test(text || PINNED_MAJOR);
  return {
    stage: MAJOR_HOLD_617_STAGE,
    session: MAJOR_HOLD_617_SESSION,
    living: MAJOR_HOLD_617_LIVING,
    pinned,
    hasMajor,
    beforeSwitch,
    unreadByPull: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasMajor && beforeSwitch,
    note: 'Major = 10 + (idx * 2) assigned before switch. Unread by gravityPull. From stage 617 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage617(source) {
  const hold = noteSessionMajorHold617(source);
  return {
    current: MAJOR_HOLD_617_STAGE,
    session: MAJOR_HOLD_617_SESSION,
    living: MAJOR_HOLD_617_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 618, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 619, title: 'hold switch(targetState.geometry) sole four-case dispatch' },
      { stage: 620, title: 'hold infinity scale = major * 1.5' },
    ],
  };
}
