/** Stage 454 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage453 } from './sessionTorusTubeIdentityHold.js';
import { compileSessionStage454, noteSessionInfinityZFactorHold } from './sessionInfinityZFactorHold.js';

export const SESSION_STAGE_454 = 454;
export const SESSION_STAGE_454_HASH = 'beec41f1';
export const SESSION_STAGE_454_LIVING = '7cd81012';

export function compileSessionStages451to454(source) {
  const prior = compileSessionStage453(source);
  const factor = compileSessionStage454(source);
  const hold = noteSessionInfinityZFactorHold(source);
  return {
    stage: SESSION_STAGE_454,
    session: SESSION_STAGE_454_HASH,
    living: SESSION_STAGE_454_LIVING,
    prior,
    factor,
    ok: prior.hold.ok && factor.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [455, 456, 457],
  };
}
