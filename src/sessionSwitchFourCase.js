/** Stage 572 — hold switch(targetState.geometry) sole four-case dispatch. Document only. Paste not rewritten. No secrets. */
export const SWITCH_FOUR_CASE_STAGE = 572;
export const SWITCH_FOUR_CASE_SESSION = 'beec41f1';
export const SWITCH_FOUR_CASE_LIVING = '7cd81012';

const PINNED = `switch(targetState.geometry) {
        case 'infinity':
        case 'hamiltonian':
        case 'triangular':
        case 'torus':
        default:`;

export function sampleSwitchFourCase() {
  return {
    cases: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hasDefault: true,
    extrasInSession: false,
  };
}

export function noteSessionSwitchFourCase(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  const cases = ['infinity', 'hamiltonian', 'triangular', 'torus'].every(c => new RegExp(`case\\s*['"]${c}['"]`).test(text));
  const hasDefault = /case\s*['"]torus['"]\s*:\s*default:|default:/.test(text);
  const extras = /case\s*['"](klein|hopf|figure8|trefoil|mobius)['"]/.test(text);
  const sample = sampleSwitchFourCase();
  return {
    stage: SWITCH_FOUR_CASE_STAGE,
    session: SWITCH_FOUR_CASE_SESSION,
    living: SWITCH_FOUR_CASE_LIVING,
    pinned,
    hasSwitch,
    cases,
    hasDefault,
    extras,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasSwitch && cases && hasDefault && !extras,
    note: 'session switch(targetState.geometry) is the sole four-case dispatch. Extras remain runtime-only. Paste not rewritten.',
  };
}
