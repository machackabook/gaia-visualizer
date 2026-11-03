/** Stage 1028 — session update(t) treats phi as external binding (referenced, never assigned). Document only. Paste not rewritten. No secrets. */
export const PHI_EXTERNAL_STAGE = 1028;
export const PHI_EXTERNAL_SESSION_HASH = 'beec41f1';
export const PHI_EXTERNAL_LIVING_HASH = '7cd81012';

export function noteSessionPhiExternal(source) {
  const text = source == null ? '' : String(source);
  const bodyStart = text.indexOf('update(t)');
  const body = bodyStart >= 0 ? text.slice(bodyStart) : text;
  const phiWrites = (body.match(/this\.phi\s*(+=|=)/g) || []).length;
  const phiReads = (body.match(/this\.phi/g) || []).length;
  return {
    stage: PHI_EXTERNAL_STAGE,
    session: PHI_EXTERNAL_SESSION_HASH,
    living: PHI_EXTERNAL_LIVING_HASH,
    phiWrites,
    phiReads,
    pasteRewritten: false,
    secrets: false,
    ok: phiWrites === 0 && phiReads >= 2,
    note: 'Stage 1028 holds phi as external binding unread by assignment inside the session update(t). Paste not rewritten.',
  };
}
