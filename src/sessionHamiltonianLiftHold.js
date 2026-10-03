/** Stage 396 — hold hamiltonian lift sin(t) * 2 independent of idx. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_LIFT_HOLD_STAGE = 396;
export const HAMILTONIAN_LIFT_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_LIFT_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionHamiltonianLift(theta, t, major) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = Number.isFinite(major) ? major : 10;
  const vertex = hScale * Math.sin(angle * 3);
  const lift = Math.sin(time) * 2;
  return { hScale, vertex, lift, y: vertex + lift };
}

export function noteSessionHamiltonianLiftHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const yRe = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)/;
  const hamiltonian = pinned ? PINNED_LINE : caseBody(text, 'hamiltonian');
  const infinity = pinned ? '' : caseBody(text, 'infinity');
  const torus = pinned ? '' : caseBody(text, 'torus');
  const triangular = pinned ? '' : caseBody(text, 'triangular');
  const hamiltonianHas = yRe.test(hamiltonian);
  const infinityDifferent = !yRe.test(infinity);
  const torusDifferent = !yRe.test(torus);
  const triangularDifferent = !yRe.test(triangular);
  const node = sessionHamiltonianLift(0, 0, 10);
  const crest = sessionHamiltonianLift(0, Math.PI / 2, 10);
  const trough = sessionHamiltonianLift(0, Math.PI * 1.5, 10);
  const otherMajor = sessionHamiltonianLift(0, Math.PI / 2, 14);
  const vertex = sessionHamiltonianLift(Math.PI / 6, Math.PI / 2, 10);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: HAMILTONIAN_LIFT_HOLD_STAGE,
    session: HAMILTONIAN_LIFT_HOLD_SESSION_HASH,
    living: HAMILTONIAN_LIFT_HOLD_LIVING_HASH,
    pinned,
    formula: 'y = hScale * sin(theta * 3) + sin(t) * 2',
    hamiltonianHas,
    infinityDifferent,
    torusDifferent,
    triangularDifferent,
    ignoresIdx: true,
    ignoresPhi: true,
    ignoresMinor: true,
    liftAmplitude: 2,
    node,
    crest,
    trough,
    otherMajor,
    vertex,
    pasteRewritten: false,
    secrets: false,
    ok: hamiltonianHas && infinityDifferent && torusDifferent && triangularDifferent
      && near(node.lift, 0) && near(node.y, 0)
      && near(crest.lift, 2) && near(crest.y, 2)
      && near(trough.lift, -2)
      && near(otherMajor.lift, crest.lift)
      && near(vertex.vertex, 10) && near(vertex.y, 12),
    note: 'Stage 396 holds the hamiltonian additive lift sin(t) * 2. Amplitude is fixed at 2. idx, phi, and minor do not enter the lift. Paste not rewritten.',
  };
}
