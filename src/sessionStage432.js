/** Stages 417-432 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage431 } from './sessionStage431.js';
import { noteSessionHamiltonianPhiUnread } from './sessionHamiltonianPhiUnread.js';

export const SESSION_STAGE_432 = 432;
export const SESSION_STAGE_432_HASH = 'beec41f1';
export const SESSION_STAGE_432_LIVING = '7cd81012';

export function compileSessionStage432(source) {
  const prior = compileSessionStage431(source);
  const hamiltonianPhi = noteSessionHamiltonianPhiUnread(source);
  return {
    stage: SESSION_STAGE_432,
    session: SESSION_STAGE_432_HASH,
    living: SESSION_STAGE_432_LIVING,
    prior,
    hamiltonianPhi,
    ok: prior.ok && hamiltonianPhi.ok,
    pasteRewritten: false,
    secrets: false,
    next: [433, 434, 435],
  };
}
