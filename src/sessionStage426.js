/** Stages 417-426 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage425 } from './sessionStage425.js';
import { noteSessionHamiltonianLiftIndependent } from './sessionHamiltonianLiftIndependent.js';

export const SESSION_STAGE_426 = 426;
export const SESSION_STAGE_426_HASH = 'beec41f1';
export const SESSION_STAGE_426_LIVING = '7cd81012';

export function compileSessionStage426(source) {
  const prior = compileSessionStage425(source);
  const hamiltonianLift = noteSessionHamiltonianLiftIndependent(source);
  return {
    stage: SESSION_STAGE_426,
    session: SESSION_STAGE_426_HASH,
    living: SESSION_STAGE_426_LIVING,
    prior,
    hamiltonianLift,
    ok: prior.ok && hamiltonianLift.ok,
    pasteRewritten: false,
    secrets: false,
    next: [427, 428, 429],
  };
}
