/** Stages 451-468 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to467 } from './sessionStage467.js';
import { compileSessionStage468, noteSessionThetaStep } from './sessionThetaStep.js';

export const SESSION_STAGE_468 = 468;
export const SESSION_STAGE_468_HASH = 'beec41f1';
export const SESSION_STAGE_468_LIVING = '7cd81012';

export function compileSessionStages451to468(source) {
  const prior = compileSessionStages451to467(source);
  const thetaStep = compileSessionStage468(source);
  const hold = noteSessionThetaStep(source);
  return {
    stage: SESSION_STAGE_468,
    session: SESSION_STAGE_468_HASH,
    living: SESSION_STAGE_468_LIVING,
    prior,
    thetaStep,
    ok: prior.ok && thetaStep.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [469, 470, 471],
  };
}
