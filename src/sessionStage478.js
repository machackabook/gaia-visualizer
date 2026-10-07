/** Stages 451-478 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to477 } from './sessionStage477.js';
import { compileSessionStage478, noteSessionSharedYTube } from './sessionSharedYTube.js';

export const SESSION_STAGE_478 = 478;
export const SESSION_STAGE_478_HASH = 'beec41f1';
export const SESSION_STAGE_478_LIVING = '7cd81012';

export function compileSessionStages451to478(source) {
  const prior = compileSessionStages451to477(source);
  const sharedY = compileSessionStage478(source);
  const hold = noteSessionSharedYTube(source);
  return {
    stage: SESSION_STAGE_478,
    session: SESSION_STAGE_478_HASH,
    living: SESSION_STAGE_478_LIVING,
    prior,
    sharedY,
    ok: prior.ok && sharedY.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [479, 480, 481],
  };
}
