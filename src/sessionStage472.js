/** Stages 451-472 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to471 } from './sessionStage471.js';
import { compileSessionStage472, noteSessionInfinityDenom } from './sessionInfinityDenom.js';

export const SESSION_STAGE_472 = 472;
export const SESSION_STAGE_472_HASH = 'beec41f1';
export const SESSION_STAGE_472_LIVING = '7cd81012';

export function compileSessionStages451to472(source) {
  const prior = compileSessionStages451to471(source);
  const infinityDenom = compileSessionStage472(source);
  const hold = noteSessionInfinityDenom(source);
  return {
    stage: SESSION_STAGE_472,
    session: SESSION_STAGE_472_HASH,
    living: SESSION_STAGE_472_LIVING,
    prior,
    infinityDenom,
    ok: prior.ok && infinityDenom.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [473, 474, 475],
  };
}
