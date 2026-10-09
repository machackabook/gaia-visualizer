/** Stages 506-508 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages503to505 } from './sessionStage505.js';
import { compileSessionStage506, noteSessionMinorBeforeSwitch } from './sessionMinorBeforeSwitch.js';
import { compileSessionStage507, noteSessionThetaStepHold } from './sessionThetaStepHold.js';
import { compileSessionStage508, noteSessionUniformOrderHold } from './sessionUniformOrderHold.js';

export const SESSION_STAGE_508_HASH = 'beec41f1';
export const SESSION_STAGE_508_LIVING = '7cd81012';

export function compileSessionStages506to508(source) {
  const prior = compileSessionStages503to505(source);
  const minor = compileSessionStage506(source);
  const theta = compileSessionStage507(source);
  const uniforms = compileSessionStage508(source);
  const minorHold = noteSessionMinorBeforeSwitch(source);
  const thetaHold = noteSessionThetaStepHold(source);
  const uniformHold = noteSessionUniformOrderHold(source);
  return {
    from: 506,
    to: 508,
    session: SESSION_STAGE_508_HASH,
    living: SESSION_STAGE_508_LIVING,
    priorOk: prior.ok === true,
    minorOk: minorHold.ok === true && minor.current === 506,
    thetaOk: thetaHold.ok === true && theta.current === 507,
    uniformOk: uniformHold.ok === true && uniforms.current === 508,
    ok: prior.ok === true && minorHold.ok === true && thetaHold.ok === true && uniformHold.ok === true,
    prior,
    minor,
    theta,
    uniforms,
  };
}
