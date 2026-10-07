/** Stages 451-471 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to468 } from './sessionStage468.js';
import { compileSessionStage469, noteSessionUniformOrder } from './sessionUniformOrder.js';
import { compileSessionStage470, noteSessionMinorRadius } from './sessionMinorRadius.js';
import { compileSessionStage471, noteSessionMajorRadius } from './sessionMajorRadius.js';

export const SESSION_STAGE_471 = 471;
export const SESSION_STAGE_471_HASH = 'beec41f1';
export const SESSION_STAGE_471_LIVING = '7cd81012';

export function compileSessionStages451to471(source) {
  const prior = compileSessionStages451to468(source);
  const uniformOrder = compileSessionStage469(source);
  const minorRadius = compileSessionStage470(source);
  const majorRadius = compileSessionStage471(source);
  const holds = [
    noteSessionUniformOrder(source),
    noteSessionMinorRadius(source),
    noteSessionMajorRadius(source),
  ];
  return {
    stage: SESSION_STAGE_471,
    session: SESSION_STAGE_471_HASH,
    living: SESSION_STAGE_471_LIVING,
    prior,
    uniformOrder,
    minorRadius,
    majorRadius,
    ok: prior.ok && holds.every((hold) => hold.ok),
    pasteRewritten: false,
    secrets: false,
    next: [472, 473, 474],
  };
}
