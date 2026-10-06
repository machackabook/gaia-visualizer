/** Stage 451 — hold hamiltonian y lift as sin(t) * 2, not hScale and not minor. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_LIFT_HOLD_STAGE = 451;
export const HAMILTONIAN_LIFT_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_LIFT_HOLD_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_LIFT_HOLD_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_HAMILTONIAN = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function hamiltonianLift(theta, t, major) {
  const hScale = major;
  const orbit = hScale * Math.sin(theta * 3);
  const lift = Math.sin(t) * 2;
  return { hScale, orbit, lift, y: orbit + lift, liftUsesHScale: false, liftUsesMinor: false };
}

export function noteSessionHamiltonianLiftHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_HAMILTONIAN : String(source);
  const arm = (text.split("case 'hamiltonian':")[1] || text).split('break;')[0];
  const scaleHeld = /const\s+hScale\s*=\s*major\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const liftHeld = /\(\s*Math\.sin\(t\)\s*\*\s*2\s*\)/.test(yLine);
  const liftUnscaled = liftHeld && !/hScale\s*\*\s*Math\.sin\(t\)/.test(yLine);
  const liftSkipsMinor = yLine.length > 0 && !/minor/.test(yLine);
  const orbitHeld = /hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)/.test(yLine);
  const invented = HAMILTONIAN_LIFT_HOLD_EXTRAS.filter((name) => hasCase(text, name));
  const sample = hamiltonianLift(Math.PI / 6, Math.PI / 2, 10);
  return {
    stage: HAMILTONIAN_LIFT_HOLD_STAGE,
    session: HAMILTONIAN_LIFT_HOLD_SESSION_HASH,
    living: HAMILTONIAN_LIFT_HOLD_LIVING_HASH,
    pinned,
    scaleHeld,
    liftHeld,
    liftUnscaled,
    liftSkipsMinor,
    orbitHeld,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      scaleHeld &&
      liftHeld &&
      liftUnscaled &&
      liftSkipsMinor &&
      orbitHeld &&
      invented.length === 0 &&
      sample.hScale === 10 &&
      sample.lift === 2 &&
      sample.liftUsesHScale === false &&
      sample.liftUsesMinor === false,
    note: 'Hamiltonian time lift stays (Math.sin(t) * 2). It does not take hScale and does not take minor. Paste not rewritten.',
  };
}

export function compileSessionStage451(source) {
  const hold = noteSessionHamiltonianLiftHold(source);
  return {
    current: HAMILTONIAN_LIFT_HOLD_STAGE,
    session: HAMILTONIAN_LIFT_HOLD_SESSION_HASH,
    living: HAMILTONIAN_LIFT_HOLD_LIVING_HASH,
    paste: '2026-10-06 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 452, title: 'hold triangular sector y without theta * 5' },
      { stage: 453, title: 'hold torus tube identity on x and z only' },
      { stage: 454, title: 'hold infinity z as scale * sin(theta) * cos(theta) / denom' },
    ],
  };
}
