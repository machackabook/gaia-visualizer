/** Stages 512-514 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages509to511 } from './sessionStage511.js';
import { compileSessionStage512, noteSessionHamiltonianYMinorPhi } from './sessionHamiltonianYMinorPhi.js';
import { compileSessionStage513, noteSessionTorusRadiusUnreadByY } from './sessionTorusRadiusUnreadByY.js';
import { compileSessionStage514, noteSessionTorusDefaultBody } from './sessionTorusDefaultBody.js';

export const SESSION_STAGE_514_HASH = 'beec41f1';
export const SESSION_STAGE_514_LIVING = '7cd81012';

export function compileSessionStages512to514(source) {
  const prior = compileSessionStages509to511(source);
  const ham = compileSessionStage512(source);
  const radius = compileSessionStage513(source);
  const body = compileSessionStage514(source);
  const hamHold = noteSessionHamiltonianYMinorPhi(source);
  const radiusHold = noteSessionTorusRadiusUnreadByY(source);
  const bodyHold = noteSessionTorusDefaultBody(source);
  return {
    from: 512,
    to: 514,
    session: SESSION_STAGE_514_HASH,
    living: SESSION_STAGE_514_LIVING,
    priorOk: prior.ok === true,
    hamOk: hamHold.ok === true && ham.current === 512,
    radiusOk: radiusHold.ok === true && radius.current === 513,
    bodyOk: bodyHold.ok === true && body.current === 514,
    ok: prior.ok === true && hamHold.ok === true && radiusHold.ok === true && bodyHold.ok === true,
    prior,
    ham,
    radius,
    body,
  };
}
