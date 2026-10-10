/** Stage 538 kernel bind. Session switch stays four-case. Paste not rewritten. No secrets. */
import { noteSessionInfinityDenom } from './sessionInfinityDenom.js';

export const CHAT_KERNEL_STAGE_538_NEXT = [
  {
    stage: 544,
    title: 'hold major = 10 + (this.idx * 2)',
    note: 'Document only. Do not rewrite the paste. Computed before switch, used by all arms.',
  },
  {
    stage: 545,
    title: 'hold minor = 3 + (state.toroidalWeave * 2)',
    note: 'Document only. Do not rewrite the paste. Used by infinity/triangular/torus; hamiltonian ignores.',
  },
  {
    stage: 546,
    title: 'hold lemniscate scale = major * 1.5',
    note: 'Document only. Do not rewrite the paste. Infinity arm only; y independent of scale.',
  },
];

export function chatKernelStage538Notes(sessionSource) {
  const denom = noteSessionInfinityDenom(sessionSource);
  return {
    infinityDenomNote: true,
    infinityDenom: denom,
    infinityDenomOk: denom.ok,
    next: CHAT_KERNEL_STAGE_538_NEXT.map((row) => ({ ...row })),
    pasteRewritten: false,
    secrets: false,
  };
}
