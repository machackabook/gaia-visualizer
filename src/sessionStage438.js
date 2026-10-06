/** Stages 417-438 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage437 } from './sessionStage437.js';
import { noteSessionInfinityYMatchesTorus } from './sessionInfinityYMatchesTorus.js';

export const SESSION_STAGE_438 = 438;
export const SESSION_STAGE_438_HASH = 'beec41f1';
export const SESSION_STAGE_438_LIVING = '7cd81012';

export function compileSessionStage438(source) {
  const prior = compileSessionStage437(source);
  const infinityY = noteSessionInfinityYMatchesTorus(source);
  return {
    stage: SESSION_STAGE_438,
    session: SESSION_STAGE_438_HASH,
    living: SESSION_STAGE_438_LIVING,
    prior,
    infinityY,
    ok: prior.ok && infinityY.ok,
    pasteRewritten: false,
    secrets: false,
    next: [439, 440],
  };
}
