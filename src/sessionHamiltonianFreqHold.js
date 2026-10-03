/** Stage 393 — hold hamiltonian frequency-3 vertex map. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_FREQ_HOLD_STAGE = 393;
export const HAMILTONIAN_FREQ_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_FREQ_HOLD_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_FREQ = 3;

const PINNED_LINE = 'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);';

export function sessionHamiltonianXYZ(theta, major, t) {
  const th = Number.isFinite(theta) ? theta : 0;
  const hScale = Number.isFinite(major) ? major : 10;
  const time = Number.isFinite(t) ? t : 0;
  const c3 = Math.cos(th * HAMILTONIAN_FREQ);
  const s3 = Math.sin(th * HAMILTONIAN_FREQ);
  const lift = Math.sin(time) * 2;
  return {
    hScale,
    freq: HAMILTONIAN_FREQ,
    x: hScale * c3 * Math.cos(th),
    z: hScale * c3 * Math.sin(th),
    yBase: hScale * s3,
    lift,
    y: hScale * s3 + lift,
    radialSq: (hScale * c3) * (hScale * c3),
  };
}

export function noteSessionHamiltonianFreqHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasFreq = /Math\.cos\(\s*this\.theta\s*\*\s*3\s*\)/.test(text)
    && /Math\.sin\(\s*this\.theta\s*\*\s*3\s*\)/.test(text);
  const origin = sessionHamiltonianXYZ(0, 10, 0);
  const pole = sessionHamiltonianXYZ(Math.PI / 2, 10, 0);
  const sixth = sessionHamiltonianXYZ(Math.PI / 6, 10, 0);
  const third = sessionHamiltonianXYZ(Math.PI / 3, 10, 0);
  const lane = sessionHamiltonianXYZ(0, 12, 0);
  const lifted = sessionHamiltonianXYZ(0, 10, Math.PI / 2);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  const identity = near(origin.x * origin.x + origin.z * origin.z, origin.radialSq)
    && near(third.x * third.x + third.z * third.z, third.radialSq);
  return {
    stage: HAMILTONIAN_FREQ_HOLD_STAGE,
    session: HAMILTONIAN_FREQ_HOLD_SESSION_HASH,
    living: HAMILTONIAN_FREQ_HOLD_LIVING_HASH,
    pinned,
    formula: 'hScale * cos(theta*3) * (cos theta, sin theta); y = hScale * sin(theta*3) + sin(t)*2',
    hasSessionFreq: hasFreq,
    freq: HAMILTONIAN_FREQ,
    origin,
    pole,
    sixth,
    third,
    lane,
    lifted,
    identity,
    pasteRewritten: false,
    secrets: false,
    ok: hasFreq
      && origin.x === 10
      && origin.z === 0
      && origin.yBase === 0
      && pole.x === 0
      && pole.z === 0
      && pole.yBase === -10
      && sixth.x === 0
      && sixth.z === 0
      && sixth.yBase === 10
      && near(third.x, -5)
      && near(third.yBase, 0)
      && lane.x === 12
      && lifted.lift === 2
      && lifted.y === 2
      && identity,
    note: 'Stage 393 holds the hamiltonian theta*3 vertex map. Horizontal radius is |hScale * cos(3 theta)|. Lift sin(t)*2 does not use idx. Paste not rewritten.',
  };
}
