/** Stages 497-498 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage497 } from './sessionLerpAlphaLiteral.js';
import { compileSessionStage498, noteSessionLemniscateScale } from './sessionLemniscateScale.js';

export const SESSION_STAGE_498_HASH = 'beec41f1';
export const SESSION_STAGE_498_LIVING = '7cd81012';

export function compileSessionStages497to498(source) {
  const prior = compileSessionStage497(source);
  const scale = compileSessionStage498(source);
  const hold = noteSessionLemniscateScale(source);
  return {
    from: 497,
    to: 498,
    session: SESSION_STAGE_498_HASH,
    living: SESSION_STAGE_498_LIVING,
    priorOk: prior.hold.ok === true,
    scaleOk: hold.ok === true,
    ok: prior.hold.ok === true && hold.ok === true && scale.current === 498,
    prior,
    scale,
  };
}
