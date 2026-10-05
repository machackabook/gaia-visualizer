/** Stages 417-428 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage427 } from './sessionStage427.js';
import { noteSessionMajorUnscaled } from './sessionMajorUnscaled.js';

export const SESSION_STAGE_428 = 428;
export const SESSION_STAGE_428_HASH = 'beec41f1';
export const SESSION_STAGE_428_LIVING = '7cd81012';

export function compileSessionStage428(source) {
  const prior = compileSessionStage427(source);
  const major = noteSessionMajorUnscaled(source);
  return {
    stage: SESSION_STAGE_428,
    session: SESSION_STAGE_428_HASH,
    living: SESSION_STAGE_428_LIVING,
    prior,
    major,
    ok: prior.ok && major.ok,
    pasteRewritten: false,
    secrets: false,
    next: [429, 430],
  };
}
