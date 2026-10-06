/** Stages 456-458 compiled pin. Session switch stays four-case. Paste not rewritten. No secrets. */
import { compileSessionStages451to455 } from './sessionStage455.js';
import { compileSessionStage456, noteSessionGravityPullScope } from './sessionGravityPullScope.js';
import { compileSessionStage457, noteSessionInfinityTorusY } from './sessionInfinityTorusY.js';
import { compileSessionStage458, noteSessionRadiiBeforeSwitch } from './sessionRadiiBeforeSwitch.js';

export const SESSION_STAGE_458 = 458;
export const SESSION_STAGE_458_HASH = 'beec41f1';
export const SESSION_STAGE_458_LIVING = '7cd81012';

export function compileSessionStages451to458(source) {
  const prior = compileSessionStages451to455(source);
  const gravity = compileSessionStage456(source);
  const sharedY = compileSessionStage457(source);
  const radii = compileSessionStage458(source);
  const g = noteSessionGravityPullScope(source);
  const y = noteSessionInfinityTorusY(source);
  const r = noteSessionRadiiBeforeSwitch(source);
  return {
    stage: SESSION_STAGE_458,
    session: SESSION_STAGE_458_HASH,
    living: SESSION_STAGE_458_LIVING,
    prior,
    gravity,
    sharedY,
    radii,
    ok: prior.ok && gravity.hold.ok && sharedY.hold.ok && radii.hold.ok && g.ok && y.ok && r.ok,
    pasteRewritten: false,
    secrets: false,
    next: [459, 460, 461],
  };
}
