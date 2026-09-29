/**
 * Stage 337 living ledger seed.
 * Packages chatKernelPulse for authenticated ledger_pulse / sheet counts.
 * Does not touch the four-case session switch (beec41f1).
 */
import { chatKernelPulse, PULSE_SESSION_HASH } from './chatKernelPulse.js';

export const LEDGER_STAGE = 337;
export const LEDGER_SESSION_HASH = PULSE_SESSION_HASH;
export const LEDGER_EVENT = 'ledger_pulse';

export function chatKernelLedgerSeed(step, extras) {
  const pulse = chatKernelPulse(step, extras);
  const sheetCount = extras && Number.isFinite(extras.sheetCount) ? extras.sheetCount : null;
  const authenticated = !!(extras && extras.authenticated);
  return {
    ...pulse,
    stage: LEDGER_STAGE,
    event: LEDGER_EVENT,
    sheetCount,
    authenticated,
    ready: authenticated && Number.isFinite(pulse.energy),
  };
}
