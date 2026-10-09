/** Stage 511 kernel bind. Session switch stays four-case. Paste not rewritten. No secrets. */
import { noteSessionInfinityDenomHold } from './sessionInfinityDenomHold.js';
import { noteSessionTriangularSnapUnread } from './sessionTriangularSnapUnread.js';
import { noteSessionSharedTubeHold } from './sessionSharedTubeHold.js';
import { compileSessionStages509to511 } from './sessionStage511.js';

export const CHAT_KERNEL_STAGE_511_NEXT = [
  {
    stage: 512,
    title: 'hold hamiltonian y unread by minor and phi',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 513,
    title: 'hold torus tube radius unread by y',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 514,
    title: 'hold torus case then default as one shared body',
    note: 'Document only. Do not rewrite the paste.',
  },
];

export function chatKernelStage511Notes(sessionSource) {
  const denom = noteSessionInfinityDenomHold(sessionSource);
  const snap = noteSessionTriangularSnapUnread(sessionSource);
  const tube = noteSessionSharedTubeHold(sessionSource);
  const band = compileSessionStages509to511(sessionSource);
  return {
    infinityDenomHoldNote: true,
    triangularSnapUnreadNote: true,
    sharedTubeHoldNote: true,
    infinityDenomHold: denom,
    infinityDenomHoldOk: denom.ok,
    triangularSnapUnread: snap,
    triangularSnapUnreadOk: snap.ok,
    sharedTubeHold: tube,
    sharedTubeHoldOk: tube.ok,
    band,
    bandOk: band.ok,
    next: CHAT_KERNEL_STAGE_511_NEXT.map((row) => ({ ...row })),
    pasteRewritten: false,
    secrets: false,
  };
}
