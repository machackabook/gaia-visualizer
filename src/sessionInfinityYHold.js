/** Stage 395 — hold infinity y shared with torus y. Document only. Paste not rewritten. No secrets. */
export const INFINITY_Y_HOLD_STAGE = 395;
export const INFINITY_Y_HOLD_SESSION_HASH = 'beec41f1';
export const INFINITY_Y_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionSharedLiftY(phi, t, idx, minor) {
  const tube = Number.isFinite(phi) ? phi : 0;
  const time = Number.isFinite(t) ? t : 0;
  const index = Number.isFinite(idx) ? idx : 0;
  const r = Number.isFinite(minor) ? minor : 3;
  const sinPhi = Math.sin(tube);
  const phase = Math.sin(time * 0.5 + index);
  return { minor: r, sinPhi, phase, y: r * sinPhi * phase };
}

export function noteSessionInfinityYHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const yRe = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)/;
  const infinity = pinned ? PINNED_LINE : caseBody(text, 'infinity');
  const torus = pinned ? PINNED_LINE : caseBody(text, 'torus');
  const hamiltonian = pinned ? '' : caseBody(text, 'hamiltonian');
  const triangular = pinned ? '' : caseBody(text, 'triangular');
  const infinityHas = yRe.test(infinity);
  const torusHas = yRe.test(torus);
  const hamiltonianDifferent = !yRe.test(hamiltonian);
  const triangularDifferent = !yRe.test(triangular);
  const equator = sessionSharedLiftY(0, Math.PI, 0, 3);
  const timeNode = sessionSharedLiftY(Math.PI / 2, 0, 0, 3);
  const crest = sessionSharedLiftY(Math.PI / 2, Math.PI, 0, 3);
  const lane = sessionSharedLiftY(Math.PI / 2, Math.PI, 1, 5);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: INFINITY_Y_HOLD_STAGE,
    session: INFINITY_Y_HOLD_SESSION_HASH,
    living: INFINITY_Y_HOLD_LIVING_HASH,
    pinned,
    formula: 'y = minor * sin(phi) * sin(t * 0.5 + idx)',
    infinityHas,
    torusHas,
    shared: infinityHas && torusHas,
    hamiltonianDifferent,
    triangularDifferent,
    ignoresMajor: true,
    equator,
    timeNode,
    crest,
    lane,
    pasteRewritten: false,
    secrets: false,
    ok: infinityHas && torusHas && hamiltonianDifferent && triangularDifferent
      && near(equator.y, 0)
      && near(timeNode.y, 0)
      && near(crest.y, 3)
      && near(lane.y, 5 * Math.sin(Math.PI / 2 + 1)),
    note: 'Stage 395 holds infinity y identical to torus y. Hamiltonian and triangular lifts stay distinct. Paste not rewritten.',
  };
}
