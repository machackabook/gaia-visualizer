/** Stages 456-459 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to458 } from './sessionStage458.js';
import { compileSessionStage459, noteSessionUGravityCopy } from './sessionUGravityCopy.js';

export const SESSION_STAGE_459 = 459;
export const SESSION_STAGE_459_HASH = 'beec41f1';
export const SESSION_STAGE_459_LIVING = '7cd81012';

export function compileSessionStages451to459(source) {
  const prior = compileSessionStages451to458(source);
  const copy = compileSessionStage459(source);
  const hold = noteSessionUGravityCopy(source);
  return {
    stage: SESSION_STAGE_459,
    session: SESSION_STAGE_459_HASH,
    living: SESSION_STAGE_459_LIVING,
    prior,
    copy,
    ok: prior.ok && copy.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [460, 461, 462],
  };
}
