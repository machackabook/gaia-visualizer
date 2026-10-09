/** Stages 528-530 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages525to527 } from './sessionStage527.js';
import { compileSessionStage528, noteSessionLemniscateDenomOnly } from './sessionLemniscateDenomOnly.js';
import { compileSessionStage529, noteSessionHamiltonianLiftScaleFree } from './sessionHamiltonianLiftScaleFree.js';
import { compileSessionStage530, noteSessionLerpAlphaLiteralHold } from './sessionLerpAlphaLiteralHold.js';

export const SESSION_STAGE_530_HASH = 'beec41f1';
export const SESSION_STAGE_530_LIVING = '7cd81012';

export function compileSessionStages528to530(source) {
  const prior = compileSessionStages525to527(source);
  const denom = compileSessionStage528(source);
  const lift = compileSessionStage529(source);
  const lerp = compileSessionStage530(source);
  const denomHold = noteSessionLemniscateDenomOnly(source);
  const liftHold = noteSessionHamiltonianLiftScaleFree(source);
  const lerpHold = noteSessionLerpAlphaLiteralHold(source);
  return {
    from: 528,
    to: 530,
    session: SESSION_STAGE_530_HASH,
    living: SESSION_STAGE_530_LIVING,
    priorOk: prior.ok === true,
    denomOk: denomHold.ok === true && denom.current === 528,
    liftOk: liftHold.ok === true && lift.current === 529,
    lerpOk: lerpHold.ok === true && lerp.current === 530,
    ok: prior.ok === true && denomHold.ok === true && liftHold.ok === true && lerpHold.ok === true,
    prior,
    denom,
    lift,
    lerp,
  };
}
