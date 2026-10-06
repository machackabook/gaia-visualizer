/** Stage 458 — major and minor are assigned before the geometry switch. Document only. Do not rewrite the paste. No secrets. */
export const RADII_STAGE = 458;
export const RADII_SESSION_HASH = 'beec41f1';
export const RADII_LIVING_HASH = '7cd81012';
export const RADII_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED = [
  'let x, y, z;',
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
  'switch(targetState.geometry) {',
  "case 'infinity':",
  "case 'hamiltonian':",
  "case 'triangular':",
  "case 'torus':",
  'default:',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionRadiiBeforeSwitch(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const switchAt = text.indexOf('switch(targetState.geometry)');
  const majorAt = text.indexOf('let major = 10 + (this.idx * 2);');
  const minorAt = text.indexOf('let minor = 3 + (state.toroidalWeave * 2);');
  const before = switchAt > majorAt && majorAt >= 0 && switchAt > minorAt && minorAt > majorAt;
  const four =
    text.includes("case 'infinity':") &&
    text.includes("case 'hamiltonian':") &&
    text.includes("case 'triangular':") &&
    text.includes("case 'torus':") &&
    text.includes('default:');
  const invented = RADII_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: RADII_STAGE,
    session: RADII_SESSION_HASH,
    living: RADII_LIVING_HASH,
    pinned,
    before,
    four,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: before && four && invented.length === 0,
    note: 'major = 10 + idx*2 and minor = 3 + toroidalWeave*2 are assigned before switch(targetState.geometry). Four session cases only. Paste not rewritten.',
  };
}

export function compileSessionStage458(source) {
  const hold = noteSessionRadiiBeforeSwitch(source);
  return {
    current: RADII_STAGE,
    session: RADII_SESSION_HASH,
    living: RADII_LIVING_HASH,
    paste: '2026-10-06 16:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 459, title: 'hold hamiltonian y lift sin(t)*2 independent of hScale' },
      { stage: 460, title: 'hold lemniscate denom shared by x and z only' },
      { stage: 461, title: 'hold default fallthrough on the torus tube, no fifth case' },
    ],
  };
}
