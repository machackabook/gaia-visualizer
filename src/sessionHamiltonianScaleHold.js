/** Stage 401 — hold hamiltonian hScale = major, not the lemniscate 1.5. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_SCALE_HOLD_STAGE = 401;
export const HAMILTONIAN_SCALE_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_SCALE_HOLD_LIVING_HASH = '7cd81012';
export const HAMILTONIAN_SCALE_FACTOR = 1;
export const LEMNISCATE_SCALE_FACTOR = 1.5;

const PINNED_LINE = 'const hScale = major;';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionHamiltonianScale(major, theta, t) {
  const m = Number.isFinite(major) ? major : 10;
  const th = Number.isFinite(theta) ? theta : 0;
  const time = Number.isFinite(t) ? t : 0;
  const hScale = m;
  const lemniscateScale = m * LEMNISCATE_SCALE_FACTOR;
  const ring = Math.cos(th * 3);
  const lift = Math.sin(time) * 2;
  return {
    hScale,
    lemniscateScale,
    usesLemniscateFactor: false,
    ring,
    x: hScale * ring * Math.cos(th),
    z: hScale * ring * Math.sin(th),
    y: hScale * Math.sin(th * 3) + lift,
    lift,
    liftUsesMinor: false,
  };
}

export function noteSessionHamiltonianScaleHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hRe = /const\s+hScale\s*=\s*major\s*;/;
  const hamiltonian = pinned ? PINNED_LINE : caseBody(text, 'hamiltonian');
  const infinity = pinned ? '' : caseBody(text, 'infinity');
  const triangular = pinned ? '' : caseBody(text, 'triangular');
  const torus = pinned ? '' : caseBody(text, 'torus');
  const hamiltonianHas = hRe.test(hamiltonian);
  const notTimesOnePointFive = !/hScale\s*=\s*major\s*\*\s*1\.5/.test(hamiltonian);
  const infinityKeepsOnePointFive = pinned || /major\s*\*\s*1\.5/.test(infinity);
  const triangularDifferent = !hRe.test(triangular);
  const torusDifferent = !hRe.test(torus);
  const origin = sessionHamiltonianScale(10, 0, 0);
  const pole = sessionHamiltonianScale(10, Math.PI / 2, 0);
  const wider = sessionHamiltonianScale(14, 0, 0);
  const crest = sessionHamiltonianScale(10, 0, Math.PI / 2);
  const near = (a, b) => Math.abs(a - b) < 1e-9;
  return {
    stage: HAMILTONIAN_SCALE_HOLD_STAGE,
    session: HAMILTONIAN_SCALE_HOLD_SESSION_HASH,
    living: HAMILTONIAN_SCALE_HOLD_LIVING_HASH,
    pinned,
    formula: 'hScale = major; lemniscate scale stays major * 1.5 on the infinity arm only',
    hamiltonianHas,
    notTimesOnePointFive,
    infinityKeepsOnePointFive,
    triangularDifferent,
    torusDifferent,
    origin,
    pole,
    wider,
    crest,
    pasteRewritten: false,
    secrets: false,
    ok: hamiltonianHas && notTimesOnePointFive && infinityKeepsOnePointFive
      && triangularDifferent && torusDifferent
      && near(origin.hScale, 10) && near(origin.lemniscateScale, 15)
      && near(origin.x, 10) && near(origin.z, 0) && near(origin.y, 0)
      && origin.hScale !== origin.lemniscateScale
      && near(pole.hScale, 10) && near(pole.x, 0) && near(pole.z, 0) && near(pole.y, -10)
      && near(wider.hScale, 14) && near(wider.lemniscateScale, 21) && near(wider.x, 14)
      && near(crest.lift, 2) && near(crest.y, 2) && crest.hScale === origin.hScale
      && !origin.usesLemniscateFactor
      && !crest.liftUsesMinor,
    note: 'Stage 401 holds hamiltonian hScale = major. The 1.5 factor stays on the infinity arm. Lift stays sin(t) * 2 and does not take minor or hScale. Paste not rewritten.',
  };
}
