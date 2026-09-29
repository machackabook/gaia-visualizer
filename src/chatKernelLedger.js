/**
 * Stage 338 living ledger seed + token-free envelope.
 * Does not touch the four-case session switch (beec41f1).
 */
import { chatKernelPulse, PULSE_SESSION_HASH } from './chatKernelPulse.js';

export const LEDGER_STAGE = 338;
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

/** Public WS frame. Never copies token / email / cidr / plus-code fields. */
export function chatKernelLedgerEnvelope(seed) {
  const src = seed || chatKernelLedgerSeed(null, null);
  return {
    event: LEDGER_EVENT,
    stage: LEDGER_STAGE,
    session: LEDGER_SESSION_HASH,
    energy: Number.isFinite(src.energy) ? src.energy : 0,
    geometry: src.geometry || 'torus',
    t: Number.isFinite(src.t) ? src.t : 0,
    idx: Number.isFinite(src.idx) ? src.idx : 0,
    sheetCount: Number.isFinite(src.sheetCount) ? src.sheetCount : null,
    authenticated: !!src.authenticated,
    ready: !!src.ready,
  };
}
