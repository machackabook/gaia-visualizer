/** Stages 417-437 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage436 } from './sessionStage436.js';
import { noteSessionTorusTubeSharedXZ } from './sessionTorusTubeSharedXZ.js';

export const SESSION_STAGE_437 = 437;
export const SESSION_STAGE_437_HASH = 'beec41f1';
export const SESSION_STAGE_437_LIVING = '7cd81012';

export function compileSessionStage437(source) {
  const prior = compileSessionStage436(source);
  const torusTube = noteSessionTorusTubeSharedXZ(source);
  return {
    stage: SESSION_STAGE_437,
    session: SESSION_STAGE_437_HASH,
    living: SESSION_STAGE_437_LIVING,
    prior,
    torusTube,
    ok: prior.ok && torusTube.ok,
    pasteRewritten: false,
    secrets: false,
    next: [438, 439, 440],
  };
}
