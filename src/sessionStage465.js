/** Stages 451-465 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to464 } from './sessionStage464.js';
import { compileSessionStage465, noteSessionTorusYMatchesInfinity } from './sessionTorusYMatch.js';

export const SESSION_STAGE_465 = 465;
export const SESSION_STAGE_465_HASH = 'beec41f1';
export const SESSION_STAGE_465_LIVING = '7cd81012';

export function compileSessionStages451to465(source) {
  const prior = compileSessionStages451to464(source);
  const torusY = compileSessionStage465(source);
  const hold = noteSessionTorusYMatchesInfinity(source);
  return {
    stage: SESSION_STAGE_465,
    session: SESSION_STAGE_465_HASH,
    living: SESSION_STAGE_465_LIVING,
    prior,
    torusY,
    ok: prior.ok && torusY.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [466, 467, 468],
  };
}
