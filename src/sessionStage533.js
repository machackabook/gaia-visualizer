/** Stages 531-533 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages528to530 } from './sessionStage530.js';
import { compileSessionStage531, noteSessionThetaStepHold } from './sessionThetaStepHold.js';
import { compileSessionStage532, noteSessionMinorRadiusHold } from './sessionMinorRadiusHold.js';
import { compileSessionStage533, noteSessionPhiReadOnly } from './sessionPhiReadOnlyHold.js';

export const SESSION_STAGE_533_HASH = 'beec41f1';
export const SESSION_STAGE_533_LIVING = '7cd81012';

export function compileSessionStages531to533(source) {
  const prior = compileSessionStages528to530(source);
  const theta = compileSessionStage531(source);
  const minor = compileSessionStage532(source);
  const phi = compileSessionStage533(source);
  const thetaHold = noteSessionThetaStepHold(source);
  const minorHold = noteSessionMinorRadiusHold(source);
  const phiHold = noteSessionPhiReadOnly(source);
  return {
    from: 531,
    to: 533,
    session: SESSION_STAGE_533_HASH,
    living: SESSION_STAGE_533_LIVING,
    priorOk: prior.ok === true,
    thetaOk: thetaHold.ok === true && theta.current === 531,
    minorOk: minorHold.ok === true && minor.current === 532,
    phiOk: phiHold.ok === true && phi.current === 533,
    ok: prior.ok === true && thetaHold.ok === true && minorHold.ok === true && phiHold.ok === true,
    prior,
    theta,
    minor,
    phi,
  };
}
