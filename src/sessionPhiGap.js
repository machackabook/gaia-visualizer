/** Stage 360 — session phi-gap report. Document only. Do not invent a session case. No secrets. */
export const PHI_GAP_STAGE = 360;
export const PHI_GAP_LIVING_WEAVE = 0.007;
export const PHI_GAP_SESSION_HASH = 'beec41f1';
export const PHI_GAP_LIVING_HASH = '7cd81012';
export const PHI_GAP_SESSION_CASES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const PHI_GAP_RUNTIME_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function reportSessionPhiGap(source) {
  const text = source == null ? '' : String(source);
  const advancesPhi = /this\.phi\s*\+=/.test(text) || /phi\s*\+=\s*0\.007/.test(text);
  const readsPhi = /this\.phi/.test(text);
  const usesWeaveForMinor = /toroidalWeave/.test(text);
  const invented = PHI_GAP_RUNTIME_EXTRAS.filter((name) => hasCase(text, name));
  const sessionCasesPresent = PHI_GAP_SESSION_CASES.every((name) => hasCase(text, name) || name === 'torus');
  return {
    stage: PHI_GAP_STAGE,
    session: PHI_GAP_SESSION_HASH,
    living: PHI_GAP_LIVING_HASH,
    sessionAdvancesPhi: advancesPhi,
    sessionReadsPhi: readsPhi,
    sessionUsesToroidalWeaveForMinor: usesWeaveForMinor,
    livingPhiStep: 'phi += 0.007 * toroidalWeave',
    livingWeave: PHI_GAP_LIVING_WEAVE,
    gap: advancesPhi === false,
    readsWithoutAdvance: readsPhi && !advancesPhi,
    geometriesReadingPhi: ['infinity', 'torus'],
    geometriesIgnoringPhi: ['hamiltonian', 'triangular'],
    inventedCases: invented,
    sessionCasesPresent,
    sessionSwitchUntouched: invented.length === 0,
    extrasOffSession: true,
    secrets: false,
    ok: !advancesPhi && invented.length === 0 && readsPhi && usesWeaveForMinor,
    note: 'Session paste reads phi on infinity and torus but does not advance it. Living path advances phi. No new session case.',
  };
}
