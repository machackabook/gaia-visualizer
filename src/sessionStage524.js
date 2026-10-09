/** Stages 522-524 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages519to521 } from './sessionStage521.js';
import { compileSessionStage522, noteSessionMajorIdxDistinct } from './sessionMajorIdxDistinct.js';
import { compileSessionStage523, noteSessionMinorUnreadByPull } from './sessionMinorUnreadByPull.js';
import { compileSessionStage524, noteSessionInfinityScaleUnreadByCopy } from './sessionInfinityScaleUnreadByCopy.js';

export const SESSION_STAGE_524_HASH = 'beec41f1';
export const SESSION_STAGE_524_LIVING = '7cd81012';

export function compileSessionStages522to524(source) {
  const prior = compileSessionStages519to521(source);
  const major = compileSessionStage522(source);
  const minor = compileSessionStage523(source);
  const scale = compileSessionStage524(source);
  const majorHold = noteSessionMajorIdxDistinct(source);
  const minorHold = noteSessionMinorUnreadByPull(source);
  const scaleHold = noteSessionInfinityScaleUnreadByCopy(source);
  return {
    from: 522,
    to: 524,
    session: SESSION_STAGE_524_HASH,
    living: SESSION_STAGE_524_LIVING,
    priorOk: prior.ok === true,
    majorOk: majorHold.ok === true && major.current === 522,
    minorOk: minorHold.ok === true && minor.current === 523,
    scaleOk: scaleHold.ok === true && scale.current === 524,
    ok: prior.ok === true && majorHold.ok === true && minorHold.ok === true && scaleHold.ok === true,
    prior,
    major,
    minor,
    scale,
  };
}
