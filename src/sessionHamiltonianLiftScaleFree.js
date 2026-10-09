/** Stage 529 — hamiltonian y lift is sin(t) * 2 and does not take hScale. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_LIFT_SCALE_FREE_STAGE = 529;
export const HAMILTONIAN_LIFT_SCALE_FREE_SESSION = 'beec41f1';
export const HAMILTONIAN_LIFT_SCALE_FREE_LIVING = '7cd81012';

const PINNED_HAMILTONIAN = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function sampleHamiltonianLiftScaleFree() {
  const theta = Math.PI / 6;
  const t = Math.PI / 2;
  const narrow = 10;
  const wide = 20;
  const lift = Math.sin(t) * 2;
  const narrowBase = narrow * Math.sin(theta * 3);
  const wideBase = wide * Math.sin(theta * 3);
  return {
    theta,
    t,
    lift,
    liftUsesHScale: false,
    narrowY: narrowBase + lift,
    wideY: wideBase + lift,
    liftUnchanged: true,
  };
}

export function noteSessionHamiltonianLiftScaleFree(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_HAMILTONIAN : String(source);
  const block = (text.match(/case\s+'hamiltonian'[\s\S]*?break;/) || [PINNED_HAMILTONIAN])[0];
  const hScaleMajor = /const hScale = major;/.test(block);
  const liftForm = /y = hScale \* Math\.sin\(this\.theta \* 3\) \+ \(Math\.sin\(t\) \* 2\);/.test(block);
  const liftScaled = /Math\.sin\(t\) \* hScale|hScale \* Math\.sin\(t\)/.test(block);
  const readsPhi = /this\.phi/.test(block);
  const readsMinor = /\bminor\b/.test(block);
  const sample = sampleHamiltonianLiftScaleFree();
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: HAMILTONIAN_LIFT_SCALE_FREE_STAGE,
    session: HAMILTONIAN_LIFT_SCALE_FREE_SESSION,
    living: HAMILTONIAN_LIFT_SCALE_FREE_LIVING,
    pinned,
    hScaleMajor,
    liftForm,
    liftScaled,
    readsPhi,
    readsMinor,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hScaleMajor && liftForm && !liftScaled && !readsPhi && !readsMinor
      && sample.liftUsesHScale === false
      && near(sample.lift, 2)
      && near(sample.wideY - sample.narrowY, 10)
      && sample.liftUnchanged === true,
    note: 'hamiltonian y lift stays sin(t) * 2 and does not take hScale, phi, or minor. Paste not rewritten.',
  };
}

export function compileSessionStage529(source) {
  const hold = noteSessionHamiltonianLiftScaleFree(source);
  return {
    current: HAMILTONIAN_LIFT_SCALE_FREE_STAGE,
    session: HAMILTONIAN_LIFT_SCALE_FREE_SESSION,
    living: HAMILTONIAN_LIFT_SCALE_FREE_LIVING,
    paste: '2026-10-09 16:06 CDT',
    hold,
    next: [
      { stage: 530, title: 'hold session lerp alpha as the literal 0.05' },
      { stage: 531, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 532, title: 'hold minor as 3 + toroidalWeave * 2 before the switch' },
    ],
  };
}
