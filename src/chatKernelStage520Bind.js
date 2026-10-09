/** Stage 520 kernel bind. Session switch stays four-case. Paste not rewritten. No secrets. */
import { noteSessionGravityPullThetaMultiplier } from './sessionGravityPullThetaMultiplier.js';
import { noteSessionPhiReadOnlyPaste } from './sessionPhiReadOnlyPaste.js';
import { noteSessionIdxInsideThetaStep } from './sessionIdxInsideThetaStep.js';
import { compileSessionStages518to520 } from './sessionStage520.js';

export const CHAT_KERNEL_STAGE_520_NEXT = [
  {
    stage: 521,
    title: 'hold uGravity as a copy of gravityPull, not a second multiplier',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 522,
    title: 'hold major idx term as idx * 2, distinct from the theta 0.002 term',
    note: 'Document only. Do not rewrite the paste.',
  },
  {
    stage: 523,
    title: 'hold minor as 3 + toroidalWeave * 2, unread by gravityPull',
    note: 'Document only. Do not rewrite the paste.',
  },
];

export function chatKernelStage520Notes(sessionSource) {
  const gravity = noteSessionGravityPullThetaMultiplier(sessionSource);
  const phi = noteSessionPhiReadOnlyPaste(sessionSource);
  const idx = noteSessionIdxInsideThetaStep(sessionSource);
  const band = compileSessionStages518to520(sessionSource);
  return {
    gravityPullThetaMultiplierNote: true,
    phiReadOnlyPasteNote: true,
    idxInsideThetaStepNote: true,
    gravityPullThetaMultiplier: gravity,
    gravityPullThetaMultiplierOk: gravity.ok,
    phiReadOnlyPaste: phi,
    phiReadOnlyPasteOk: phi.ok,
    idxInsideThetaStep: idx,
    idxInsideThetaStepOk: idx.ok,
    band,
    bandOk: band.ok,
    next: CHAT_KERNEL_STAGE_520_NEXT.map((row) => ({ ...row })),
    pasteRewritten: false,
    secrets: false,
  };
}
