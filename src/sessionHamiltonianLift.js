/** Stage 490 — hamiltonian y lift is sin(t) * 2 and is not scaled by hScale. Document only. No secrets. */
export const HAMILTONIAN_LIFT_STAGE = 490;
export const HAMILTONIAN_LIFT_SESSION = 'beec41f1';
export const HAMILTONIAN_LIFT_LIVING = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleHamiltonianLift(hScale, theta, t) {
  const arm = hScale * Math.sin(theta * 3);
  const lift = Math.sin(t) * 2;
  return {
    hScale,
    theta,
    t,
    arm,
    lift,
    y: arm + lift,
    liftReadsHScale: false,
  };
}

export function noteSessionHamiltonianLift(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const armStart = text.indexOf("case 'hamiltonian'");
  const armEnd = armStart >= 0 ? text.indexOf('break;', armStart) : -1;
  const arm = armStart >= 0 && armEnd > armStart ? text.slice(armStart, armEnd) : '';
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const liftTerm = /\(\s*Math\.sin\(t\)\s*\*\s*2\s*\)/.test(yLine);
  const armTerm = /hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)/.test(yLine);
  const liftScaled = /hScale\s*\*\s*Math\.sin\(t\)/.test(yLine) || /Math\.sin\(t\)\s*\*\s*hScale/.test(yLine) || /Math\.sin\(t\)\s*\*\s*2\s*\*\s*hScale/.test(yLine);
  const phiUnread = !/phi/.test(arm);
  const minorUnread = !/minor/.test(arm);
  const sample = sampleHamiltonianLift(10, 0, Math.PI / 2);
  const sampleWide = sampleHamiltonianLift(100, 0, Math.PI / 2);
  const sampleOk = sample.lift === 2 && sample.y === 2 && sampleWide.lift === 2 && sampleWide.y === 2;
  return {
    stage: HAMILTONIAN_LIFT_STAGE,
    session: HAMILTONIAN_LIFT_SESSION,
    living: HAMILTONIAN_LIFT_LIVING,
    pinned,
    liftTerm,
    armTerm,
    liftScaled,
    phiUnread,
    minorUnread,
    sample,
    sampleWide,
    pasteRewritten: false,
    secrets: false,
    ok: liftTerm && armTerm && !liftScaled && phiUnread && minorUnread && sampleOk,
    note: 'hamiltonian y is hScale * sin(theta * 3) plus (sin(t) * 2). The lift does not read hScale, phi, or minor. Paste not rewritten.',
  };
}

export function compileSessionStage490(source) {
  const hold = noteSessionHamiltonianLift(source);
  return {
    current: HAMILTONIAN_LIFT_STAGE,
    session: HAMILTONIAN_LIFT_SESSION,
    living: HAMILTONIAN_LIFT_LIVING,
    paste: '2026-10-07 23:06 CDT',
    hold,
    next: [
      { stage: 491, title: 'hold minor = 3 + toroidalWeave * 2 as the only weave consumer in the radii block' },
      { stage: 492, title: 'hold uTime then uGravity as the only material writes' },
      { stage: 493, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
    ],
  };
}
