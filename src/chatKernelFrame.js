/**
 * Stage 341 living frame — does not touch the four-case session switch.
 * Session paste hash remains beec41f1.
 */
import {
  applyChatKernelUniforms,
  applyChatKernelTarget,
  stepChatKernelNode,
} from './chatKernel.js';
import { attachChatKernelEnergy } from './chatKernelEnergy.js';

export { chatKernelEnergy, attachChatKernelEnergy, shouldFreezeChatKernel } from './chatKernelEnergy.js';

export function applyChatKernelFrame(node, t, state, targetState, target) {
  applyChatKernelUniforms(node && node.material, {
    t,
    gravityPull: state && state.gravityPull,
    toroidalWeave: state && state.toroidalWeave,
    blend: (targetState && targetState.blend) ?? (state && state.blend),
    phi: node && node.phi,
    energy: undefined,
  });
  const stepped = stepChatKernelNode(node, t, state, targetState);
  attachChatKernelEnergy(stepped, state);
  applyChatKernelTarget(target, stepped);
  applyChatKernelUniforms(node && node.material, {
    t,
    gravityPull: state && state.gravityPull,
    toroidalWeave: state && state.toroidalWeave,
    blend: (targetState && targetState.blend) ?? (state && state.blend),
    phi: node && node.phi,
    energy: stepped.energy,
  });
  return stepped;
}
