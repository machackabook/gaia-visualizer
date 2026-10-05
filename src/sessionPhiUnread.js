/** Stage 417 — phi is read in the session paste and never advanced. Document only. Paste not rewritten. No secrets. */
export const PHI_UNREAD_STAGE = 417;
export const PHI_UNREAD_SESSION_HASH = 'beec41f1';
export const PHI_UNREAD_LIVING_HASH = '7cd81012';

const PINNED_PASTE = `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);`;

export function noteSessionPhiUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const readsPhi = /this\.phi/.test(text);
  const advancesPhi = /this\.phi\s*\+=/.test(text) || /phi\s*\+=\s*0\.007/.test(text);
  return {
    stage: PHI_UNREAD_STAGE,
    session: PHI_UNREAD_SESSION_HASH,
    living: PHI_UNREAD_LIVING_HASH,
    pinned,
    readsPhi,
    advancesPhi,
    pasteRewritten: false,
    secrets: false,
    ok: readsPhi && !advancesPhi,
    note: 'Stage 417 holds phi as an external weave. The session paste reads this.phi and does not advance it. Paste not rewritten.',
  };
}
