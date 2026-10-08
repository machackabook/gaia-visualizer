/** Stages 500-501 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage500, noteSessionPhiStill } from './sessionPhiStill.js';
import { compileSessionStage501, noteSessionInfinityYUnreadByScale } from './sessionInfinityYUnreadByScale.js';

export const SESSION_STAGE_501_HASH = 'beec41f1';
export const SESSION_STAGE_501_LIVING = '7cd81012';

export function compileSessionStages500to501(source) {
  const prior = compileSessionStage500(source);
  const infinityY = compileSessionStage501(source);
  const hold = noteSessionInfinityYUnreadByScale(source);
  const phi = noteSessionPhiStill(source);
  return {
    from: 500,
    to: 501,
    session: SESSION_STAGE_501_HASH,
    living: SESSION_STAGE_501_LIVING,
    priorOk: prior.hold.ok === true && phi.ok === true,
    infinityYOk: hold.ok === true,
    ok: prior.hold.ok === true && phi.ok === true && hold.ok === true && infinityY.current === 501,
    prior,
    infinityY,
  };
}
