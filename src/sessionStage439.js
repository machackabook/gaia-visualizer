/** Stage 439 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage438 } from './sessionStage438.js';
import { noteSessionDefaultFallsThroughTorus } from './sessionDefaultFallsThroughTorus.js';

export const SESSION_STAGE_439 = 439;
export const SESSION_STAGE_439_HASH = 'beec41f1';
export const SESSION_STAGE_439_LIVING = '7cd81012';

export function compileSessionStage439(source) {
  const prior = compileSessionStage438(source);
  const defaultTorus = noteSessionDefaultFallsThroughTorus(source);
  return {
    stage: SESSION_STAGE_439,
    session: SESSION_STAGE_439_HASH,
    living: SESSION_STAGE_439_LIVING,
    prior,
    defaultTorus,
    ok: prior.ok && defaultTorus.ok,
    pasteRewritten: false,
    secrets: false,
    next: [440, 441],
  };
}
