/** Stages 451-461 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to460 } from './sessionStage460.js';
import { compileSessionStage461, noteSessionLemniscateDenom } from './sessionLemniscateDenom.js';

export const SESSION_STAGE_461 = 461;
export const SESSION_STAGE_461_HASH = 'beec41f1';
export const SESSION_STAGE_461_LIVING = '7cd81012';

export function compileSessionStages451to461(source) {
  const prior = compileSessionStages451to460(source);
  const denom = compileSessionStage461(source);
  const hold = noteSessionLemniscateDenom(source);
  return {
    stage: SESSION_STAGE_461,
    session: SESSION_STAGE_461_HASH,
    living: SESSION_STAGE_461_LIVING,
    prior,
    denom,
    ok: prior.ok && denom.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [462, 463, 464],
  };
}
