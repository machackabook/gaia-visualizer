/** Stages 417-434 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage433 } from './sessionStage433.js';
import { noteSessionPhiNotIncremented } from './sessionPhiNotIncremented.js';

export const SESSION_STAGE_434 = 434;
export const SESSION_STAGE_434_HASH = 'beec41f1';
export const SESSION_STAGE_434_LIVING = '7cd81012';

export function compileSessionStage434(source) {
  const prior = compileSessionStage433(source);
  const phiNotIncremented = noteSessionPhiNotIncremented(source);
  return {
    stage: SESSION_STAGE_434,
    session: SESSION_STAGE_434_HASH,
    living: SESSION_STAGE_434_LIVING,
    prior,
    phiNotIncremented,
    ok: prior.ok && phiNotIncremented.ok,
    pasteRewritten: false,
    secrets: false,
    next: [435, 436, 437],
  };
}
