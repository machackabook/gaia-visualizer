/** Stages 451-473 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to472 } from './sessionStage472.js';
import { compileSessionStage473, noteSessionTorusTubeXZ } from './sessionTorusTubeXZ.js';

export const SESSION_STAGE_473 = 473;
export const SESSION_STAGE_473_HASH = 'beec41f1';
export const SESSION_STAGE_473_LIVING = '7cd81012';

export function compileSessionStages451to473(source) {
  const prior = compileSessionStages451to472(source);
  const torusTube = compileSessionStage473(source);
  const hold = noteSessionTorusTubeXZ(source);
  return {
    stage: SESSION_STAGE_473,
    session: SESSION_STAGE_473_HASH,
    living: SESSION_STAGE_473_LIVING,
    prior,
    torusTube,
    ok: prior.ok && torusTube.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [474, 475, 476],
  };
}
