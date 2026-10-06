/** Stages 417-436 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage435 } from './sessionStage435.js';
import { noteSessionTriangularYLaneThetaFree } from './sessionTriangularYLaneThetaFree.js';

export const SESSION_STAGE_436 = 436;
export const SESSION_STAGE_436_HASH = 'beec41f1';
export const SESSION_STAGE_436_LIVING = '7cd81012';

export function compileSessionStage436(source) {
  const prior = compileSessionStage435(source);
  const triangularYLane = noteSessionTriangularYLaneThetaFree(source);
  return {
    stage: SESSION_STAGE_436,
    session: SESSION_STAGE_436_HASH,
    living: SESSION_STAGE_436_LIVING,
    prior,
    triangularYLane,
    ok: prior.ok && triangularYLane.ok,
    pasteRewritten: false,
    secrets: false,
    next: [437, 438, 439],
  };
}
