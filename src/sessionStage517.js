/** Stages 515-517 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages512to514 } from './sessionStage514.js';
import { compileSessionStage515, noteSessionLemniscateScaleUnread } from './sessionLemniscateScaleUnread.js';
import { compileSessionStage516, noteSessionLerpAlphaLiteral } from './sessionLerpAlphaLiteral.js';
import { compileSessionStage517, noteSessionThetaOnlyAngleWrite } from './sessionThetaOnlyAngleWrite.js';

export const SESSION_STAGE_517_HASH = 'beec41f1';
export const SESSION_STAGE_517_LIVING = '7cd81012';

export function compileSessionStages515to517(source) {
  const prior = compileSessionStages512to514(source);
  const scale = compileSessionStage515(source);
  const lerp = compileSessionStage516(source);
  const theta = compileSessionStage517(source);
  const scaleHold = noteSessionLemniscateScaleUnread(source);
  const lerpHold = noteSessionLerpAlphaLiteral(source);
  const thetaHold = noteSessionThetaOnlyAngleWrite(source);
  return {
    from: 515,
    to: 517,
    session: SESSION_STAGE_517_HASH,
    living: SESSION_STAGE_517_LIVING,
    priorOk: prior.ok === true,
    scaleOk: scaleHold.ok === true && scale.current === 515,
    lerpOk: lerpHold.ok === true && lerp.current === 516,
    thetaOk: thetaHold.ok === true && theta.current === 517,
    ok: prior.ok === true && scaleHold.ok === true && lerpHold.ok === true && thetaHold.ok === true,
    prior,
    scale,
    lerp,
    theta,
  };
}
