/** Stages 417-427 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage426 } from './sessionStage426.js';
import { noteSessionLerpAlphaUnscaled } from './sessionLerpAlphaUnscaled.js';

export const SESSION_STAGE_427 = 427;
export const SESSION_STAGE_427_HASH = 'beec41f1';
export const SESSION_STAGE_427_LIVING = '7cd81012';

export function compileSessionStage427(source) {
  const prior = compileSessionStage426(source);
  const lerpAlpha = noteSessionLerpAlphaUnscaled(source);
  return {
    stage: SESSION_STAGE_427,
    session: SESSION_STAGE_427_HASH,
    living: SESSION_STAGE_427_LIVING,
    prior,
    lerpAlpha,
    ok: prior.ok && lerpAlpha.ok,
    pasteRewritten: false,
    secrets: false,
    next: [428, 429, 430],
  };
}
