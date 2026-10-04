/** Stage 401 — hold hamiltonian hScale = major, not the lemniscate 1.5. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_SCALE_HOLD_STAGE = 401;
export const HAMILTONIAN_SCALE_HOLD_SESSION_HASH = 'beec41f1';
export const HAMILTONIAN_SCALE_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'const hScale = major;';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionHamiltonianScale(theta, major) {
  const angle = Number.isFinite(theta) ? theta : 0;
  const m = Number.isFinite(major) ? major : 10;
  const hScale = m;
  const lemniscateScale = m * 1.5;
  const freq = Math.cos(angle * 3);
  const x = hScale * freq * Math.cos(angle);
  const z = hScale * freq * Math.sin(angle);
  const vertex = hScale * Math.sin(angle * 3);
  return {
    hScale,
    lemniscateScale,
    usesLemniscateScale: hScale === lemniscateScale,
    x,
    z,
    vertex,
  };
}

export function noteSessionHamiltonianScaleHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const scaleRe = /const\s+hScale\s*=\s*major\s*;/;
  const inflatedRe = /const\s+hScale\s*=\s*major\s*\*\s*1\.5/;
  const hamiltonian = pinned ? PINNED_LINE : caseBody(text, 'hamiltonian');
  const infinity = pinned ? '' : caseBody(text, 'infinity');
  const hamiltonianHas = scaleRe.test(hamiltonian);
  const notInflated = !inflatedRe.test(hamiltonian);
  const infinityUsesOnePointFive = pinned || /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(infinity);
  const infinityDifferent = pinned || !scaleRe.test(infinity);
  const base = sessionHamiltonianScale(0, 10);
  const wider = sessionHamiltonianScale(0, 14);
  const sector = sessionHamiltonianScale(Math.PI / 3, 10);
  const pole = sessionHamiltonianScale(Math.PI / 2, 10);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: HAMILTONIAN_SCALE_HOLD_STAGE,
    session: HAMILTONIAN_SCALE_HOLD_SESSION_HASH,
    living: HAMILTONIAN_SCALE_HOLD_LIVING_HASH,
    pinned,
    formula: 'hScale = major; lemniscate scale stays major * 1.5 on infinity only',
    hamiltonianHas,
    notInflated,
    infinityUsesOnePointFive,
    infinityDifferent,
    ignoresMinor: true,
    ignoresPhi: true,
    ignoresIdx: true,
    base,
    wider,
    sector,
    pole,
    pasteRewritten: false,
    secrets: false,
    ok: hamiltonianHas && notInflated && infinityUsesOnePointFive && infinityDifferent
      && base.hScale === 10 && base.lemniscateScale === 15 && base.usesLemniscateScale === false
      && near(base.x, 10) && near(base.z, 0) && near(base.vertex, 0)
      && wider.hScale === 14 && wider.lemniscateScale === 21 && wider.usesLemniscateScale === false
      && near(sector.x, -5) && near(sector.vertex, 0)
      && near(pole.x, 0) && near(pole.z, 0) && near(pole.vertex, -10),
    note: 'Stage 401 holds hamiltonian hScale = major. It is not the infinity lemniscate scale major * 1.5. minor, phi, and idx do not enter hScale. Paste not rewritten.',
  };
}
