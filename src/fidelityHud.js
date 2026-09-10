import { fidelitySummary, sampleFidelityOnHashMismatch } from './fidelity.js';

let lastFidelityKey = null;

export function refreshFidelity(state) {
  if (!state) return null;
  const inbound = state.inboundHash == null ? '' : String(state.inboundHash);
  const key = inbound + '|' + (state.inboundHashAt || 0);
  if (key === lastFidelityKey && state.fidelity) return state.fidelity;
  lastFidelityKey = key;
  const report = sampleFidelityOnHashMismatch(inbound || null);
  state.fidelity = fidelitySummary(report);
  if (typeof window !== 'undefined') window.__gaiaFidelityInbound = report;
  return state.fidelity;
}

export function fidelityBit(fid) {
  if (!fid) return 'fid-idle';
  if (fid.match === false && !fid.skipped) return 'fid-drift';
  if (fid.skipped || fid.match) return 'fid-ok';
  return 'fid-idle';
}
