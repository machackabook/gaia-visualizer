/** Stages 503-505 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages501to502 } from './sessionStage502.js';
import { compileSessionStage503, noteSessionHamiltonianLiftUnread } from './sessionHamiltonianLiftUnread.js';
import { compileSessionStage504, noteSessionLerpAlphaHold } from './sessionLerpAlphaHold.js';
import { compileSessionStage505, noteSessionMajorBeforeSwitch } from './sessionMajorBeforeSwitch.js';

export const SESSION_STAGE_505_HASH = 'beec41f1';
export const SESSION_STAGE_505_LIVING = '7cd81012';

export function compileSessionStages503to505(source) {
  const prior = compileSessionStages501to502(source);
  const lift = compileSessionStage503(source);
  const lerp = compileSessionStage504(source);
  const major = compileSessionStage505(source);
  const liftHold = noteSessionHamiltonianLiftUnread(source);
  const lerpHold = noteSessionLerpAlphaHold(source);
  const majorHold = noteSessionMajorBeforeSwitch(source);
  return {
    from: 503,
    to: 505,
    session: SESSION_STAGE_505_HASH,
    living: SESSION_STAGE_505_LIVING,
    priorOk: prior.ok === true,
    liftOk: liftHold.ok === true && lift.current === 503,
    lerpOk: lerpHold.ok === true && lerp.current === 504,
    majorOk: majorHold.ok === true && major.current === 505,
    ok: prior.ok === true && liftHold.ok === true && lerpHold.ok === true && majorHold.ok === true,
    prior,
    lift,
    lerp,
    major,
  };
}
