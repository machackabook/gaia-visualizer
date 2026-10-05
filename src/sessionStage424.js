/** Stages 417-424 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage423 } from './sessionStage423.js';
import { noteSessionInfinitySharedTube } from './sessionInfinitySharedTube.js';

export const SESSION_STAGE_424 = 424;
export const SESSION_STAGE_424_HASH = 'beec41f1';
export const SESSION_STAGE_424_LIVING = '7cd81012';

export function compileSessionStage424(source) {
  const prior = compileSessionStage423(source);
  const infinityTube = noteSessionInfinitySharedTube(source);
  return {
    stage: SESSION_STAGE_424,
    session: SESSION_STAGE_424_HASH,
    living: SESSION_STAGE_424_LIVING,
    prior,
    infinityTube,
    ok: prior.ok && infinityTube.ok,
    pasteRewritten: false,
    secrets: false,
    next: [425, 426, 427],
  };
}
