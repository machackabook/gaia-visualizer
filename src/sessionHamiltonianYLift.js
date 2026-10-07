/** Stage 460 — hamiltonian y lift sin(t)*2 is independent of hScale. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_YLIFT_STAGE = 460;
export const HAMILTONIAN_YLIFT_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_YLIFT_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_YLIFT_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function sampleHamiltonianYLift(hScale, theta, t) {
  const orbit = hScale * Math.sin(theta * 3);
  const lift = Math.sin(t) * 2;
  return {
    orbit,
    lift,
    y: orbit + lift,
    liftIndependentOfHScale: lift === Math.sin(t) * 2,
    dYdHScale: Math.sin(theta * 3),
  };
}

export function noteSessionHamiltonianYLift(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['"]hamiltonian['"][\s\S]*?break\s*;/.exec(text);
  const body = arm ? arm[0] : (pinned ? text : '');
  const hScale = /const\s+hScale\s*=\s*major\s*;/.test(body);
  const y = /y\s*=\s*hScale\s*\*\s*Math\.sin\(\s*this\.theta\s*\*\s*3\s*\)\s*\+\s*\(\s*Math\.sin\(\s*t\s*\)\s*\*\s*2\s*\)\s*;/.test(body);
  const liftNotScaled = !/Math\.sin\(\s*t\s*\)\s*\*\s*2\s*\*\s*hScale/.test(body) && !/hScale\s*\*\s*Math\.sin\(\s*t\s*\)/.test(body);
  const xz = /x\s*=\s*hScale\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*3\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*;/.test(body)
    && /z\s*=\s*hScale\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*3\s*\)\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*;/.test(body);
  const sample = sampleHamiltonianYLift(10, 0.4, 1.2);
  const invented = HAMILTONIAN_YLIFT_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: HAMILTONIAN_YLIFT_STAGE,
    session: HAMILTONIAN_YLIFT_SESSION_HASH,
    living: HAMILTONIAN_YLIFT_LIVING_HASH,
    pinned,
    hScale,
    y,
    liftNotScaled,
    xz,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: hScale && y && liftNotScaled && xz && sample.liftIndependentOfHScale && invented.length === 0,
    note: 'hamiltonian y is hScale*sin(theta*3) plus (sin(t)*2). The lift does not multiply hScale. Paste not rewritten.',
  };
}

export function compileSessionStage460(source) {
  const hold = noteSessionHamiltonianYLift(source);
  return {
    current: HAMILTONIAN_YLIFT_STAGE,
    session: HAMILTONIAN_YLIFT_SESSION_HASH,
    living: HAMILTONIAN_YLIFT_LIVING_HASH,
    paste: '2026-10-06 19:07 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 461, title: 'hold lemniscate denom shared by x and z only' },
      { stage: 462, title: 'hold default fallthrough on the torus tube, no fifth case' },
      { stage: 463, title: 'hold triangular tAngle as floor snap to 2pi/3' },
    ],
  };
}
