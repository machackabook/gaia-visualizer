/** Stages 519-521 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages518to520 } from './sessionStage520.js';
import { compileSessionStage519, noteSessionPhiReadOnlyPaste } from './sessionPhiReadOnlyPaste.js';
import { compileSessionStage520, noteSessionIdxInsideThetaStep } from './sessionIdxInsideThetaStep.js';
import { compileSessionStage521, noteSessionGravityCopy } from './sessionGravityCopy.js';

export const SESSION_STAGE_521_HASH = 'beec41f1';
export const SESSION_STAGE_521_LIVING = '7cd81012';

export function compileSessionStages519to521(source) {
  const prior = compileSessionStages518to520(source);
  const phi = compileSessionStage519(source);
  const idx = compileSessionStage520(source);
  const copy = compileSessionStage521(source);
  const phiHold = noteSessionPhiReadOnlyPaste(source);
  const idxHold = noteSessionIdxInsideThetaStep(source);
  const copyHold = noteSessionGravityCopy(source);
  return {
    from: 519,
    to: 521,
    session: SESSION_STAGE_521_HASH,
    living: SESSION_STAGE_521_LIVING,
    priorOk: prior.ok === true,
    phiOk: phiHold.ok === true && phi.current === 519,
    idxOk: idxHold.ok === true && idx.current === 520,
    copyOk: copyHold.ok === true && copy.current === 521,
    ok: prior.ok === true && phiHold.ok === true && idxHold.ok === true && copyHold.ok === true,
    prior,
    phi,
    idx,
    copy,
  };
}
