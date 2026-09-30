/**
 * Stage 343 living ledger seed + token-free authenticated envelope.
 * Does not touch the four-case session switch (beec41f1).
 * Envelope carries a next-stage pointer for the waterfall hop (344).
 */
import { chatKernelPulse, PULSE_SESSION_HASH } from './chatKernelPulse.js';
import { CHAT_KERNEL_NEXT_STAGES } from './chatKernelNext.js';

export const LEDGER_STAGE = 343;
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

export function hasLedgerAuthPresence(extras) {
  return !!(extras && (extras.authenticated || extras.tokenPresent));
}

export function compareLedgerSheetCount(live, expected) {
  const a = Number.isFinite(live) ? live : null;
  const b = Number.isFinite(expected) ? expected : null;
  return { live: a, expected: b, match: a !== null && b !== null && a === b };
}

export function chatKernelLedgerSeed(step, extras) {
  const pulse = chatKernelPulse(step, extras);
  const sheetCount = extras && Number.isFinite(extras.sheetCount) ? extras.sheetCount : null;
  const sheets = compareLedgerSheetCount(sheetCount, extras && extras.expectedSheetCount);
  const authenticated = hasLedgerAuthPresence(extras);
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
    sheetMatch: sheets.match,
    authenticated,
    ready: authenticated && Number.isFinite(energy) && !shouldFreezeChatKernel(energy) && (sheets.expected === null || sheets.match),
  };
}

/** Public WS frame. Never copies token / email / cidr / plus-code fields. */
export function chatKernelLedgerEnvelope(seed) {
  const src = seed || chatKernelLedgerSeed(null, null);
  const next = CHAT_KERNEL_NEXT_STAGES && CHAT_KERNEL_NEXT_STAGES[0] ? CHAT_KERNEL_NEXT_STAGES[0].stage : 344;
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
    sheetMatch: !!src.sheetMatch,
    authenticated: !!src.authenticated,
    ready: !!src.ready,
    next,
  };
}

export function wireChatKernelLedgerPulse(step, extras) {
  return chatKernelLedgerEnvelope(chatKernelLedgerSeed(step, extras));
}
