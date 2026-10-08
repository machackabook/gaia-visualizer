/** Stages 451-482 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to481 } from './sessionStage481.js';
import { compileSessionStage482, noteSessionLerpAlpha } from './sessionLerpAlpha.js';

export const SESSION_STAGE_482 = 482;
export const SESSION_STAGE_482_HASH = 'beec41f1';
export const SESSION_STAGE_482_LIVING = '7cd81012';

export function compileSessionStages451to482(source) {
  const prior = compileSessionStages451to481(source);
  const lerpAlpha = compileSessionStage482(source);
  const hold = noteSessionLerpAlpha(source);
  return {
    stage: SESSION_STAGE_482,
    session: SESSION_STAGE_482_HASH,
    living: SESSION_STAGE_482_LIVING,
    prior,
    lerpAlpha,
    ok: prior.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [483, 484, 485],
  };
}
