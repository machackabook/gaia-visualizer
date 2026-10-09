/** Stage 505 kernel bind. Session switch stays four-case. Paste not rewritten. No secrets. */
import { noteSessionHamiltonianLiftUnread } from './sessionHamiltonianLiftUnread.js';
import { noteSessionLerpAlphaHold } from './sessionLerpAlphaHold.js';
import { noteSessionMajorBeforeSwitch } from './sessionMajorBeforeSwitch.js';
import { compileSessionStages503to505 } from './sessionStage505.js';

export const CHAT_KERNEL_STAGE_505_NEXT = [
  {
    stage: 506,
    title: 'hold minor = 3 + toroidalWeave * 2 beside major, before the switch',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 507,
    title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 508,
    title: 'hold uniform writes as uTime then uGravity only',
    note: 'Document only. Do not rewrite the paste.',
  },
];

export function chatKernelStage505Notes(sessionSource) {
  const lift = noteSessionHamiltonianLiftUnread(sessionSource);
  const lerp = noteSessionLerpAlphaHold(sessionSource);
  const major = noteSessionMajorBeforeSwitch(sessionSource);
  const band = compileSessionStages503to505(sessionSource);
  return {
    hamiltonianLiftUnreadNote: true,
    lerpAlphaHoldNote: true,
    majorBeforeSwitchNote: true,
    hamiltonianLiftUnread: lift,
    hamiltonianLiftUnreadOk: lift.ok,
    lerpAlphaHold: lerp,
    lerpAlphaHoldOk: lerp.ok,
    majorBeforeSwitch: major,
    majorBeforeSwitchOk: major.ok,
    band,
    bandOk: band.ok,
    next: CHAT_KERNEL_STAGE_505_NEXT.map((row) => ({ ...row })),
    pasteRewritten: false,
    secrets: false,
  };
}
