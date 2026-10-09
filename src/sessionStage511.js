/** Stages 509-511 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages506to508 } from './sessionStage508.js';
import { compileSessionStage509, noteSessionInfinityDenomHold } from './sessionInfinityDenomHold.js';
import { compileSessionStage510, noteSessionTriangularSnapUnread } from './sessionTriangularSnapUnread.js';
import { compileSessionStage511, noteSessionSharedTubeHold } from './sessionSharedTubeHold.js';

export const SESSION_STAGE_511_HASH = 'beec41f1';
export const SESSION_STAGE_511_LIVING = '7cd81012';

export function compileSessionStages509to511(source) {
  const prior = compileSessionStages506to508(source);
  const denom = compileSessionStage509(source);
  const snap = compileSessionStage510(source);
  const tube = compileSessionStage511(source);
  const denomHold = noteSessionInfinityDenomHold(source);
  const snapHold = noteSessionTriangularSnapUnread(source);
  const tubeHold = noteSessionSharedTubeHold(source);
  return {
    from: 509,
    to: 511,
    session: SESSION_STAGE_511_HASH,
    living: SESSION_STAGE_511_LIVING,
    priorOk: prior.ok === true,
    denomOk: denomHold.ok === true && denom.current === 509,
    snapOk: snapHold.ok === true && snap.current === 510,
    tubeOk: tubeHold.ok === true && tube.current === 511,
    ok: prior.ok === true && denomHold.ok === true && snapHold.ok === true && tubeHold.ok === true,
    prior,
    denom,
    snap,
    tube,
  };
}
