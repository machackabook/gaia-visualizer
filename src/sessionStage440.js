/** Stage 440 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage439 } from './sessionStage439.js';
import { noteSessionLerpAlphaUnscaled } from './sessionLerpAlphaUnscaled.js';

export const SESSION_STAGE_440 = 440;
export const SESSION_STAGE_440_HASH = 'beec41f1';
export const SESSION_STAGE_440_LIVING = '7cd81012';

export function compileSessionStage440(source) {
  const prior = compileSessionStage439(source);
  const lerpAlpha = noteSessionLerpAlphaUnscaled(source);
  return {
    stage: SESSION_STAGE_440,
    session: SESSION_STAGE_440_HASH,
    living: SESSION_STAGE_440_LIVING,
    prior,
    lerpAlpha,
    ok: prior.ok && lerpAlpha.ok,
    pasteRewritten: false,
    secrets: false,
    next: [441, 442],
  };
}
