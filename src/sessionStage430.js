/** Stages 417-430 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage429 } from './sessionStage429.js';
import { noteSessionLerpAlloc } from './sessionLerpAlloc.js';

export const SESSION_STAGE_430 = 430;
export const SESSION_STAGE_430_HASH = 'beec41f1';
export const SESSION_STAGE_430_LIVING = '7cd81012';

export function compileSessionStage430(source) {
  const prior = compileSessionStage429(source);
  const lerpAlloc = noteSessionLerpAlloc(source);
  return {
    stage: SESSION_STAGE_430,
    session: SESSION_STAGE_430_HASH,
    living: SESSION_STAGE_430_LIVING,
    prior,
    lerpAlloc,
    ok: prior.ok && lerpAlloc.ok,
    pasteRewritten: false,
    secrets: false,
    next: [431, 432, 433],
  };
}
