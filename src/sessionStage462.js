/** Stages 451-462 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to461 } from './sessionStage461.js';
import { compileSessionStage462, noteSessionTorusDefaultTube } from './sessionTorusDefaultTube.js';

export const SESSION_STAGE_462 = 462;
export const SESSION_STAGE_462_HASH = 'beec41f1';
export const SESSION_STAGE_462_LIVING = '7cd81012';

export function compileSessionStages451to462(source) {
  const prior = compileSessionStages451to461(source);
  const torusDefault = compileSessionStage462(source);
  const hold = noteSessionTorusDefaultTube(source);
  return {
    stage: SESSION_STAGE_462,
    session: SESSION_STAGE_462_HASH,
    living: SESSION_STAGE_462_LIVING,
    prior,
    torusDefault,
    ok: prior.ok && torusDefault.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [463, 464, 465],
  };
}
