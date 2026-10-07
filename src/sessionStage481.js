/** Stages 451-481 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to478 } from './sessionStage478.js';
import { compileSessionStage479, noteSessionHamiltonianYUnread } from './sessionHamiltonianYUnread.js';
import { compileSessionStage480, noteSessionTriangularWeave } from './sessionTriangularWeave.js';
import { compileSessionStage481, noteSessionThetaOnlyAdvance } from './sessionThetaOnlyAdvance.js';

export const SESSION_STAGE_481 = 481;
export const SESSION_STAGE_481_HASH = 'beec41f1';
export const SESSION_STAGE_481_LIVING = '7cd81012';

export function compileSessionStages451to481(source) {
  const prior = compileSessionStages451to478(source);
  const hamiltonianY = compileSessionStage479(source);
  const weave = compileSessionStage480(source);
  const theta = compileSessionStage481(source);
  const holds = [
    noteSessionHamiltonianYUnread(source),
    noteSessionTriangularWeave(source),
    noteSessionThetaOnlyAdvance(source),
  ];
  return {
    stage: SESSION_STAGE_481,
    session: SESSION_STAGE_481_HASH,
    living: SESSION_STAGE_481_LIVING,
    prior,
    hamiltonianY,
    weave,
    theta,
    ok: prior.ok && holds.every((hold) => hold.ok),
    pasteRewritten: false,
    secrets: false,
    next: [482, 483, 484],
  };
}
