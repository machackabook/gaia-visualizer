/** Stage 397 — hold triangular lane (idx % 3 - 1) * major * 0.5. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_LANE_HOLD_STAGE = 397;
export const TRIANGULAR_LANE_HOLD_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_LANE_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionTriangularLane(idx, major, t, minor) {
  const i = Number.isFinite(idx) ? idx : 0;
  const m = Number.isFinite(major) ? major : 10;
  const time = Number.isFinite(t) ? t : 0;
  const n = Number.isFinite(minor) ? minor : 3;
  const laneIndex = ((i % 3) + 3) % 3;
  const lane = (laneIndex - 1) * m * 0.5;
  const ripple = Math.sin(time) * n;
  return { laneIndex, lane, ripple, y: lane + ripple };
}

export function noteSessionTriangularLaneHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const yRe = /y\s*=\s*\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(\s*t\s*\)\s*\*\s*minor/;
  const triangular = pinned ? PINNED_LINE : caseBody(text, 'triangular');
  const infinity = pinned ? '' : caseBody(text, 'infinity');
  const hamiltonian = pinned ? '' : caseBody(text, 'hamiltonian');
  const torus = pinned ? '' : caseBody(text, 'torus');
  const triangularHas = yRe.test(triangular);
  const infinityDifferent = !yRe.test(infinity);
  const hamiltonianDifferent = !yRe.test(hamiltonian);
  const torusDifferent = !yRe.test(torus);
  const low = sessionTriangularLane(0, 10, 0, 3);
  const mid = sessionTriangularLane(1, 10, 0, 3);
  const high = sessionTriangularLane(2, 10, 0, 3);
  const wrap = sessionTriangularLane(3, 10, 0, 3);
  const scaled = sessionTriangularLane(2, 14, 0, 3);
  const rippled = sessionTriangularLane(1, 10, Math.PI / 2, 4);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: TRIANGULAR_LANE_HOLD_STAGE,
    session: TRIANGULAR_LANE_HOLD_SESSION_HASH,
    living: TRIANGULAR_LANE_HOLD_LIVING_HASH,
    pinned,
    formula: 'lane = (idx % 3 - 1) * major * 0.5',
    triangularHas,
    infinityDifferent,
    hamiltonianDifferent,
    torusDifferent,
    bins: 3,
    ignoresTheta: true,
    ignoresPhi: true,
    ignoresTime: true,
    low,
    mid,
    high,
    wrap,
    scaled,
    rippled,
    pasteRewritten: false,
    secrets: false,
    ok: triangularHas && infinityDifferent && hamiltonianDifferent && torusDifferent
      && low.laneIndex === 0 && near(low.lane, -5) && near(low.y, -5)
      && mid.laneIndex === 1 && near(mid.lane, 0) && near(mid.y, 0)
      && high.laneIndex === 2 && near(high.lane, 5) && near(high.y, 5)
      && wrap.laneIndex === 0 && near(wrap.lane, low.lane)
      && near(scaled.lane, 7)
      && near(rippled.lane, 0) && near(rippled.ripple, 4) && near(rippled.y, 4),
    note: 'Stage 397 holds the triangular lane (idx % 3 - 1) * major * 0.5. Bins are -1, 0, +1 of major/2. Ripple sin(t) * minor stays off the lane. Paste not rewritten.',
  };
}
