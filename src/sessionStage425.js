/** Stages 417-425 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage424 } from './sessionStage424.js';
import { noteSessionTriangularIdxSector } from './sessionTriangularIdxSector.js';

export const SESSION_STAGE_425 = 425;
export const SESSION_STAGE_425_HASH = 'beec41f1';
export const SESSION_STAGE_425_LIVING = '7cd81012';

export function compileSessionStage425(source) {
  const prior = compileSessionStage424(source);
  const triangularSector = noteSessionTriangularIdxSector(source);
  return {
    stage: SESSION_STAGE_425,
    session: SESSION_STAGE_425_HASH,
    living: SESSION_STAGE_425_LIVING,
    prior,
    triangularSector,
    ok: prior.ok && triangularSector.ok,
    pasteRewritten: false,
    secrets: false,
    next: [426, 427, 428],
  };
}
