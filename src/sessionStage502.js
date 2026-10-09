/** Stages 501-502 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage501, noteSessionInfinityYUnreadByScale } from './sessionInfinityYUnreadByScale.js';
import { compileSessionStage502, noteSessionTriangularTAngleUnread } from './sessionTriangularTAngleUnread.js';

export const SESSION_STAGE_502_HASH = 'beec41f1';
export const SESSION_STAGE_502_LIVING = '7cd81012';

export function compileSessionStages501to502(source) {
  const prior = compileSessionStage501(source);
  const tAngle = compileSessionStage502(source);
  const hold = noteSessionTriangularTAngleUnread(source);
  const infinityY = noteSessionInfinityYUnreadByScale(source);
  return {
    from: 501,
    to: 502,
    session: SESSION_STAGE_502_HASH,
    living: SESSION_STAGE_502_LIVING,
    priorOk: prior.hold.ok === true && infinityY.ok === true,
    tAngleOk: hold.ok === true,
    ok: prior.hold.ok === true && infinityY.ok === true && hold.ok === true && tAngle.current === 502,
    prior,
    tAngle,
  };
}
