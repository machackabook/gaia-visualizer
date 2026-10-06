/** Stage 456 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to455 } from './sessionStage455.js';
import { compileSessionStage456, noteSessionThetaGravityPullHold } from './sessionThetaGravityPullHold.js';

export const SESSION_STAGE_456 = 456;
export const SESSION_STAGE_456_HASH = 'beec41f1';
export const SESSION_STAGE_456_LIVING = '7cd81012';

export function compileSessionStages451to456(source) {
  const prior = compileSessionStages451to455(source);
  const step = compileSessionStage456(source);
  const hold = noteSessionThetaGravityPullHold(source);
  return {
    stage: SESSION_STAGE_456,
    session: SESSION_STAGE_456_HASH,
    living: SESSION_STAGE_456_LIVING,
    prior,
    step,
    ok: prior.ok && step.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [457, 458, 459],
  };
}
