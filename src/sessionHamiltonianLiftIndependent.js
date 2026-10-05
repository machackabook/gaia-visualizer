/** Stage 426 — hamiltonian y lift is sin(t) * 2 and does not scale with hScale. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_LIFT_STAGE = 426;
export const HAMILTONIAN_LIFT_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_LIFT_LIVING_HASH = '7cd81012';

const PINNED_HAMILTONIAN = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
].join('\n');

export function hamiltonianLift(theta, t, major) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const ring = Number.isFinite(major) ? major : 10;
  const hScale = ring;
  const base = hScale * Math.sin(angle * 3);
  const lift = Math.sin(time) * 2;
  return { hScale, base, lift, y: base + lift, liftUsesHScale: false };
}

export function hamiltonianPoint(theta, t, major) {
  const held = hamiltonianLift(theta, t, major);
  const x = held.hScale * Math.cos(theta * 3) * Math.cos(theta);
  const z = held.hScale * Math.cos(theta * 3) * Math.sin(theta);
  return { x, y: held.y, z, hScale: held.hScale, base: held.base, lift: held.lift, liftUsesHScale: false };
}

export function noteSessionHamiltonianLiftIndependent(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_HAMILTONIAN : String(source);
  const block = (text.match(/case\s+'hamiltonian'[\s\S]*?break;/) || [PINNED_HAMILTONIAN])[0];
  const hScaleMajor = /const hScale = major;/.test(block);
  const liftForm = /y = hScale \* Math\.sin\(this\.theta \* 3\) \+ \(Math\.sin\(t\) \* 2\);/.test(block);
  const liftScaled = /Math\.sin\(t\) \* hScale|hScale \* Math\.sin\(t\)/.test(block);
  const readsPhi = /this\.phi/.test(block);
  const flat = hamiltonianPoint(0, 0, 10);
  const crest = hamiltonianPoint(0, Math.PI / 2, 10);
  const wide = hamiltonianPoint(Math.PI / 6, Math.PI / 2, 10);
  const doubled = hamiltonianPoint(Math.PI / 6, Math.PI / 2, 20);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: HAMILTONIAN_LIFT_STAGE,
    session: HAMILTONIAN_LIFT_SESSION_HASH,
    living: HAMILTONIAN_LIFT_LIVING_HASH,
    pinned,
    formula: 'y = hScale * sin(theta * 3) + sin(t) * 2; lift does not take hScale',
    hScaleMajor,
    liftForm,
    liftScaled,
    readsPhi,
    flat,
    crest,
    wide,
    doubled,
    pasteRewritten: false,
    secrets: false,
    ok: hScaleMajor && liftForm && !liftScaled && !readsPhi
      && near(flat.y, 0) && flat.lift === 0 && near(flat.base, 0)
      && near(crest.lift, 2) && near(crest.y, 2) && crest.liftUsesHScale === false
      && near(wide.base, 10) && near(wide.lift, 2) && near(wide.y, 12)
      && near(doubled.base, 20) && near(doubled.lift, 2) && near(doubled.y, 22)
      && near(doubled.lift, wide.lift),
    note: 'Stage 426 holds the hamiltonian additive lift at sin(t) * 2. Doubling major doubles the base and leaves the lift at 2. Paste not rewritten.',
  };
}
