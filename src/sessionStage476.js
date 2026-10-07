/** Stage 476 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to475 } from './sessionStage475.js';
import { compileSessionStage476, noteSessionHamiltonianArmUnread } from './sessionHamiltonianArmUnread.js';

export const SESSION_STAGE_476 = 476;
export const SESSION_STAGE_476_HASH = 'beec41f1';
export const SESSION_STAGE_476_LIVING = '7cd81012';

export function compileSessionStages451to476(source) {
  const prior = compileSessionStages451to475(source);
  const hamiltonianArm = compileSessionStage476(source);
  const hold = noteSessionHamiltonianArmUnread(source);
  return {
    stage: SESSION_STAGE_476,
    session: SESSION_STAGE_476_HASH,
    living: SESSION_STAGE_476_LIVING,
    prior,
    hamiltonianArm,
    ok: prior.ok && hamiltonianArm.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [477, 478, 479],
  };
}
