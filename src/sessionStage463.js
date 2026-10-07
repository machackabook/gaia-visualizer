/** Stages 451-463 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to462 } from './sessionStage462.js';
import { compileSessionStage463, noteSessionTriangularFloorSnap } from './sessionTriangularFloorSnap.js';

export const SESSION_STAGE_463 = 463;
export const SESSION_STAGE_463_HASH = 'beec41f1';
export const SESSION_STAGE_463_LIVING = '7cd81012';

export function compileSessionStages451to463(source) {
  const prior = compileSessionStages451to462(source);
  const triFloor = compileSessionStage463(source);
  const hold = noteSessionTriangularFloorSnap(source);
  return {
    stage: SESSION_STAGE_463,
    session: SESSION_STAGE_463_HASH,
    living: SESSION_STAGE_463_LIVING,
    prior,
    triFloor,
    ok: prior.ok && triFloor.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [464, 465, 466],
  };
}
