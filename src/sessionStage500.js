/** Stages 499-500 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStage499, noteSessionDefaultSharesTorus } from './sessionDefaultSharesTorus.js';
import { compileSessionStage500, noteSessionPhiStill } from './sessionPhiStill.js';

export const SESSION_STAGE_500_HASH = 'beec41f1';
export const SESSION_STAGE_500_LIVING = '7cd81012';

export function compileSessionStages499to500(source) {
  const prior = compileSessionStage499(source);
  const phi = compileSessionStage500(source);
  const hold = noteSessionPhiStill(source);
  const tube = noteSessionDefaultSharesTorus(source);
  return {
    from: 499,
    to: 500,
    session: SESSION_STAGE_500_HASH,
    living: SESSION_STAGE_500_LIVING,
    priorOk: prior.hold.ok === true && tube.ok === true,
    phiOk: hold.ok === true,
    ok: prior.hold.ok === true && tube.ok === true && hold.ok === true && phi.current === 500,
    prior,
    phi,
  };
}
