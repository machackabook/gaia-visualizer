/** Stage 432 — hamiltonian arm does not read phi. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_PHI_STAGE = 432;
export const HAMILTONIAN_PHI_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_PHI_LIVING_HASH = '7cd81012';

const PINNED_ARM = `case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;`;

export function sessionHamiltonianArm(theta, t, major) {
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = Number.isFinite(major) ? major : 10;
  return {
    hScale,
    x: hScale * Math.cos(th * 3) * Math.cos(th),
    z: hScale * Math.cos(th * 3) * Math.sin(th),
    y: hScale * Math.sin(th * 3) + Math.sin(time) * 2,
    readsPhi: false,
    readsGravity: false,
    lift: Math.sin(time) * 2,
  };
}

export function noteSessionHamiltonianPhiUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_ARM : String(source);
  const start = text.indexOf("case 'hamiltonian':");
  const arm = start >= 0 ? text.slice(start, text.indexOf('break;', start) + 6) : '';
  const readsPhi = /\bphi\b/.test(arm);
  const readsGravity = /gravityPull/.test(arm);
  const usesTheta = /this\.theta/.test(arm);
  const usesT = /Math\.sin\(t\)/.test(arm);
  const hScaleIsMajor = /const hScale = major;/.test(arm);
  const sample = sessionHamiltonianArm(Math.PI / 6, Math.PI / 2, 18);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: HAMILTONIAN_PHI_STAGE,
    session: HAMILTONIAN_PHI_SESSION_HASH,
    living: HAMILTONIAN_PHI_LIVING_HASH,
    pinned,
    formula: 'hamiltonian x/z/y use theta and t only; phi is unread',
    armFound: arm.length > 0,
    readsPhi,
    readsGravity,
    usesTheta,
    usesT,
    hScaleIsMajor,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: arm.length > 0 && !readsPhi && !readsGravity && usesTheta && usesT && hScaleIsMajor
      && sample.readsPhi === false
      && near(sample.lift, 2)
      && near(sample.hScale, 18),
    note: 'Stage 432 holds phi unread by the hamiltonian arm. x/z/y use theta and t only. Paste not rewritten.',
  };
}
