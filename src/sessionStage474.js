/** Stages 451-474 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to473 } from './sessionStage473.js';
import { compileSessionStage474, noteSessionTriangularSectorFloor } from './sessionTriangularSectorFloor.js';

export const SESSION_STAGE_474 = 474;
export const SESSION_STAGE_474_HASH = 'beec41f1';
export const SESSION_STAGE_474_LIVING = '7cd81012';

export function compileSessionStages451to474(source) {
  const prior = compileSessionStages451to473(source);
  const sector = compileSessionStage474(source);
  const hold = noteSessionTriangularSectorFloor(source);
  return {
    stage: SESSION_STAGE_474,
    session: SESSION_STAGE_474_HASH,
    living: SESSION_STAGE_474_LIVING,
    prior,
    sector,
    ok: prior.ok && sector.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [475, 476, 477],
  };
}
