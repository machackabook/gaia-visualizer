/** Stages 498-499 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage498 } from './sessionLemniscateScale.js';
import { compileSessionStage499, noteSessionDefaultSharesTorus } from './sessionDefaultSharesTorus.js';

export const SESSION_STAGE_499_HASH = 'beec41f1';
export const SESSION_STAGE_499_LIVING = '7cd81012';

export function compileSessionStages498to499(source) {
  const prior = compileSessionStage498(source);
  const tube = compileSessionStage499(source);
  const hold = noteSessionDefaultSharesTorus(source);
  return {
    from: 498,
    to: 499,
    session: SESSION_STAGE_499_HASH,
    living: SESSION_STAGE_499_LIVING,
    priorOk: prior.hold.ok === true,
    tubeOk: hold.ok === true,
    ok: prior.hold.ok === true && hold.ok === true && tube.current === 499,
    prior,
    tube,
  };
}
