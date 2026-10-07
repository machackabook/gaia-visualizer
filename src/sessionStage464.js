/** Stages 451-464 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to463 } from './sessionStage463.js';
import { compileSessionStage464, noteSessionInfinityScale } from './sessionInfinityScale.js';

export const SESSION_STAGE_464 = 464;
export const SESSION_STAGE_464_HASH = 'beec41f1';
export const SESSION_STAGE_464_LIVING = '7cd81012';

export function compileSessionStages451to464(source) {
  const prior = compileSessionStages451to463(source);
  const infScale = compileSessionStage464(source);
  const hold = noteSessionInfinityScale(source);
  return {
    stage: SESSION_STAGE_464,
    session: SESSION_STAGE_464_HASH,
    living: SESSION_STAGE_464_LIVING,
    prior,
    infScale,
    ok: prior.ok && infScale.hold.ok && hold.ok,
    pasteRewritten: false,
    secrets: false,
    next: [465, 466, 467],
  };
}
