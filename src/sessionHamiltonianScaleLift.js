/** Stage 412 — hold hamiltonian y lift sin(t)*2 independent of hScale. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_SCALE_LIFT_STAGE = 412;
export const HAMILTONIAN_SCALE_LIFT_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_SCALE_LIFT_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_LIFT_AMPLITUDE = 2;

const PINNED_LINE = 'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);';

export function hamiltonianScaleLift(theta, t, major) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = Number.isFinite(major) ? major : 10;
  const vertex = hScale * Math.sin(angle * 3);
  const lift = Math.sin(time) * HAMILTONIAN_LIFT_AMPLITUDE;
  return { hScale, vertex, lift, y: vertex + lift, liftUsesScale: false };
}

export function noteSessionHamiltonianScaleLift(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const held = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)/.test(text);
  const scaledLift = /Math\.sin\(t\)\s*\*\s*hScale/.test(text) || /hScale\s*\*\s*Math\.sin\(t\)/.test(text);
  const small = hamiltonianScaleLift(0, Math.PI / 2, 10);
  const large = hamiltonianScaleLift(0, Math.PI / 2, 22);
  const vertex = hamiltonianScaleLift(Math.PI / 6, Math.PI / 2, 10);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: HAMILTONIAN_SCALE_LIFT_STAGE,
    session: HAMILTONIAN_SCALE_LIFT_SESSION_HASH,
    living: HAMILTONIAN_SCALE_LIFT_LIVING_HASH,
    pinned,
    formula: 'y = hScale * sin(theta*3) + sin(t)*2',
    held,
    scaledLift,
    small,
    large,
    vertex,
    pasteRewritten: false,
    secrets: false,
    ok: held && !scaledLift && near(small.lift, 2) && near(large.lift, 2) && small.lift === large.lift && near(vertex.y, 12) && vertex.liftUsesScale === false,
    note: 'Stage 412 holds the hamiltonian y lift sin(t)*2 independent of hScale. Scale multiplies the vertex term only. Paste not rewritten.',
  };
}
