/** Stages 451-475 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to474 } from './sessionStage474.js';
import { compileSessionStage475, noteSessionInfinityScaleUnread } from './sessionInfinityScaleUnread.js';

export const SESSION_STAGE_475 = 475;
export const SESSION_STAGE_475_HASH = 'beec41f1';
export const SESSION_STAGE_475_LIVING = '7cd81012';

export function compileSessionStages451to475(source) {
  const prior = compileSessionStages451to474(source);
  const infinityScale = compileSessionStage475(source);
  const hold = noteSessionInfinityScaleUnread(source);
  return {
    stage: SESSION_STAGE_475,
    session: SESSION_STAGE_475_HASH,
    living: SESSION_STAGE_475_LIVING,
    prior,
    infinityScale,
    ok: prior.ok && infinityScale.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [476, 477, 478],
  };
}
