/** Stage 336 living ledger pulse seed. Session switch unchanged. Stage 337 consumes this. */
import { chatKernelEnergy } from './chatKernelEnergy.js';

export const PULSE_STAGE = 336;
export const PULSE_SESSION_HASH = 'beec41f1';

export function chatKernelPulse(step, extras) {
  const energy = Number.isFinite(step && step.energy) ? step.energy : chatKernelEnergy(step);
  return {
    stage: PULSE_STAGE,
    session: PULSE_SESSION_HASH,
    energy: Number.isFinite(energy) ? energy : 0,
    geometry: (extras && extras.geometry) || (step && step.geometry) || 'torus',
    t: extras && Number.isFinite(extras.t) ? extras.t : 0,
    idx: extras && Number.isFinite(extras.idx) ? extras.idx : 0,
  };
}
