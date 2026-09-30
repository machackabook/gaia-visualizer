/**
 * Stage 340 living ledger seed + token-free envelope.
 * Does not touch the four-case session switch (beec41f1).
 * Energy is pull * (0.5 + weave * 0.5), clamped, for freeze/ready gates.
 */
import { chatKernelPulse, PULSE_SESSION_HASH } from './chatKernelPulse.js';

export const LEDGER_STAGE = 340;
export const LEDGER_SESSION_HASH = PULSE_SESSION_HASH;
export const LEDGER_EVENT = 'ledger_pulse';
export const LEDGER_ENERGY_MIN = 0.05;
export const LEDGER_ENERGY_MAX = 4;
export const LEDGER_FREEZE_BELOW = 0.12;

export function chatKernelEnergy(gravityPull = 1, toroidalWeave = 1) {
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const weave = Number.isFinite(toroidalWeave) ? toroidalWeave : 1;
  const raw = pull * (0.5 + weave * 0.5);
  return Math.min(LEDGER_ENERGY_MAX, Math.max(LEDGER_ENERGY_MIN, raw));
}

export function shouldFreezeChatKernel(energy) {
  const e = Number.isFinite(energy) ? energy : 0;
  return e < LEDGER_FREEZE_BELOW;
}

export function chatKernelLedgerSeed(step, extras) {
  const pulse = chatKernelPulse(step, extras);
  const sheetCount = extras && Number.isFinite(extras.sheetCount) ? extras.sheetCount : null;
  const authenticated = !!(extras && extras.authenticated);
  const energy = Number.isFinite(pulse.energy)
    ? pulse.energy
    : chatKernelEnergy(pulse.gravityPull, extras && extras.toroidalWeave);
  return {
    ...pulse,
    energy,
    frozen: shouldFreezeChatKernel(energy),
    stage: LEDGER_STAGE,
    event: LEDGER_EVENT,
    sheetCount,
    authenticated,
    ready: authenticated && Number.isFinite(energy) && !shouldFreezeChatKernel(energy),
  };
}

/** Public WS frame. Never copies token / email / cidr / plus-code fields. */
export function chatKernelLedgerEnvelope(seed) {
  const src = seed || chatKernelLedgerSeed(null, null);
  return {
    event: LEDGER_EVENT,
    stage: LEDGER_STAGE,
    session: LEDGER_SESSION_HASH,
    energy: Number.isFinite(src.energy) ? src.energy : 0,
    frozen: !!src.frozen,
    geometry: src.geometry || 'torus',
    t: Number.isFinite(src.t) ? src.t : 0,
    idx: Number.isFinite(src.idx) ? src.idx : 0,
    sheetCount: Number.isFinite(src.sheetCount) ? src.sheetCount : null,
    authenticated: !!src.authenticated,
    ready: !!src.ready,
  };
}
