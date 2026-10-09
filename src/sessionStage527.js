/** Stages 525-527 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages522to524 } from './sessionStage524.js';
import { compileSessionStage525, noteSessionUTimeDirectCopy } from './sessionUTimeDirectCopy.js';
import { compileSessionStage526, noteSessionTriangularYUnreadByPhi } from './sessionTriangularYUnreadByPhi.js';
import { compileSessionStage527, noteSessionTorusTubeRadius } from './sessionTorusTubeRadius.js';

export const SESSION_STAGE_527_HASH = 'beec41f1';
export const SESSION_STAGE_527_LIVING = '7cd81012';

export function compileSessionStages525to527(source) {
  const prior = compileSessionStages522to524(source);
  const time = compileSessionStage525(source);
  const tri = compileSessionStage526(source);
  const tube = compileSessionStage527(source);
  const timeHold = noteSessionUTimeDirectCopy(source);
  const triHold = noteSessionTriangularYUnreadByPhi(source);
  const tubeHold = noteSessionTorusTubeRadius(source);
  return {
    from: 525,
    to: 527,
    session: SESSION_STAGE_527_HASH,
    living: SESSION_STAGE_527_LIVING,
    priorOk: prior.ok === true,
    timeOk: timeHold.ok === true && time.current === 525,
    triOk: triHold.ok === true && tri.current === 526,
    tubeOk: tubeHold.ok === true && tube.current === 527,
    ok: prior.ok === true && timeHold.ok === true && triHold.ok === true && tubeHold.ok === true,
    prior,
    time,
    tri,
    tube,
  };
}
