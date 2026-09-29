/**
 * Stage 335 living frame — does not touch the four-case session switch.
 * Session paste hash remains beec41f1.
 */
import {
  applyChatKernelUniforms,
  applyChatKernelTarget,
  stepChatKernelNode,
} from './chatKernel.js';
import { attachChatKernelEnergy } from './chatKernelEnergy.js';

export { chatKernelEnergy, attachChatKernelEnergy } from './chatKernelEnergy.js';

export function applyChatKernelFrame(node, t, state, targetState, target) {
  applyChatKernelUniforms(node && node.material, {
    t,
    gravityPull: state && state.gravityPull,
    toroidalWeave: state && state.toroidalWeave,
    blend: (targetState && targetState.blend) ?? (state && state.blend),
    phi: node && node.phi,
  });
  const stepped = stepChatKernelNode(node, t, state, targetState);
  applyChatKernelTarget(target, stepped);
  return attachChatKernelEnergy(stepped);
}
