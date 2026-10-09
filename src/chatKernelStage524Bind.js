/** Stage 524 kernel bind. Session switch stays four-case. Paste not rewritten. No secrets. */
import { noteSessionMajorIdxDistinct } from './sessionMajorIdxDistinct.js';
import { noteSessionMinorUnreadByPull } from './sessionMinorUnreadByPull.js';
import { noteSessionInfinityScaleUnreadByCopy } from './sessionInfinityScaleUnreadByCopy.js';
import { compileSessionStages522to524 } from './sessionStage524.js';

export const CHAT_KERNEL_STAGE_524_NEXT = [
  {
    stage: 525,
    title: 'hold uTime as a direct copy of t, not a scaled clock',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 526,
    title: 'hold triangular lattice y unread by phi',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 527,
    title: 'hold torus and default tube as major + minor * cos(phi)',
    note: 'Document only. Do not rewrite the paste.',
  },
];

export function chatKernelStage524Notes(sessionSource) {
  const major = noteSessionMajorIdxDistinct(sessionSource);
  const minor = noteSessionMinorUnreadByPull(sessionSource);
  const scale = noteSessionInfinityScaleUnreadByCopy(sessionSource);
  const band = compileSessionStages522to524(sessionSource);
  return {
    majorIdxDistinctNote: true,
    minorUnreadByPullNote: true,
    infinityScaleUnreadByCopyNote: true,
    majorIdxDistinct: major,
    majorIdxDistinctOk: major.ok,
    minorUnreadByPull: minor,
    minorUnreadByPullOk: minor.ok,
    infinityScaleUnreadByCopy: scale,
    infinityScaleUnreadByCopyOk: scale.ok,
    band,
    bandOk: band.ok,
    next: CHAT_KERNEL_STAGE_524_NEXT.map((row) => ({ ...row })),
    pasteRewritten: false,
    secrets: false,
  };
}
