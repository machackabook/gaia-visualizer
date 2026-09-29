/**
 * Stage 335 living frame — does not touch the four-case session switch.
 * Session paste hash remains beec41f1.
 */
import {
  applyChatKernelUniforms,
  applyChatKernelTarget,
  stepChatKernelNode,
} from './chatKernel.js';

export function chatKernelEnergy(step) {
  const x = Number.isFinite(step && step.x) ? step.x : 0;
  const y = Number.isFinite(step && step.y) ? step.y : 0;
  const z = Number.isFinite(step && step.z) ? step.z : 0;
  return Math.sqrt(x * x + y * y + z * z);
}

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
  stepped.energy = chatKernelEnergy(stepped);
  return stepped;
}
