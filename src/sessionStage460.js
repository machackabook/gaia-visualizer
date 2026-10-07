/** Stages 456-460 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to459 } from './sessionStage459.js';
import { compileSessionStage460, noteSessionHamiltonianYLift } from './sessionHamiltonianYLift.js';

export const SESSION_STAGE_460 = 460;
export const SESSION_STAGE_460_HASH = 'beec41f1';
export const SESSION_STAGE_460_LIVING = '7cd81012';

export function compileSessionStages451to460(source) {
  const prior = compileSessionStages451to459(source);
  const lift = compileSessionStage460(source);
  const hold = noteSessionHamiltonianYLift(source);
  return {
    stage: SESSION_STAGE_460,
    session: SESSION_STAGE_460_HASH,
    living: SESSION_STAGE_460_LIVING,
    prior,
    lift,
    ok: prior.ok && lift.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [461, 462, 463],
  };
}
