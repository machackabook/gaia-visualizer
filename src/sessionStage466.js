/** Stage 466 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to465 } from './sessionStage465.js';
import { compileSessionStage466, noteSessionLerpAlpha } from './sessionLerpAlpha.js';

export const SESSION_STAGE_466 = 466;
export const SESSION_STAGE_466_HASH = 'beec41f1';
export const SESSION_STAGE_466_LIVING = '7cd81012';

export function compileSessionStages451to466(source) {
  const prior = compileSessionStages451to465(source);
  const lerpAlpha = compileSessionStage466(source);
  const hold = noteSessionLerpAlpha(source);
  return {
    stage: SESSION_STAGE_466,
    session: SESSION_STAGE_466_HASH,
    living: SESSION_STAGE_466_LIVING,
    prior,
    lerpAlpha,
    ok: prior.ok && lerpAlpha.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [467, 468, 469],
  };
}
