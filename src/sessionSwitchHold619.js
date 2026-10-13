/** Stage 619 — hold switch(targetState.geometry) sole four-case dispatch. Document only. Do not rewrite the paste. No secrets. */
export const SWITCH_HOLD_619_STAGE = 619;
export const SWITCH_HOLD_619_SESSION = 'beec41f1';
export const SWITCH_HOLD_619_LIVING = '7cd81012';

const PINNED_SWITCH = `switch(targetState.geometry)`;

export function noteSessionSwitchHold619(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_SWITCH : String(source);
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  const cases = ['infinity', 'hamiltonian', 'triangular', 'torus'].every(c => new RegExp("case\\s*['\"]" + c + "['\"]").test(text || PINNED_SWITCH));
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter(name => new RegExp("case\\s*['\"]" + name + "['\"]").test(text));
  return {
    stage: SWITCH_HOLD_619_STAGE,
    session: SWITCH_HOLD_619_SESSION,
    living: SWITCH_HOLD_619_LIVING,
    pinned,
    hasSwitch,
    fourCases: cases,
    inventedCases: invented,
    soleDispatch: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: hasSwitch && cases && invented.length === 0,
    note: 'Switch(targetState.geometry) is sole four-case dispatch. No extra cases. From stage 619 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage619(source) {
  const hold = noteSessionSwitchHold619(source);
  return {
    current: SWITCH_HOLD_619_STAGE,
    session: SWITCH_HOLD_619_SESSION,
    living: SWITCH_HOLD_619_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 620, title: 'hold infinity scale = major * 1.5' },
      { stage: 621, title: 'hold hamiltonian hScale = major' },
      { stage: 622, title: 'hold triangular floor snap tAngle' },
    ],
  };
}
