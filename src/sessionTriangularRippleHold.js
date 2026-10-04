/** Stage 400 — hold triangular ripple sin(t) * minor separate from the lane. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_RIPPLE_HOLD_STAGE = 400;
export const TRIANGULAR_RIPPLE_HOLD_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_RIPPLE_HOLD_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;';

function caseBody(source, name) {
  const re = new RegExp("case\\s*['\"]" + name + "['\"]([\\s\\S]*?)break;");
  const hit = re.exec(source || '');
  return hit ? hit[1] : '';
}

export function sessionTriangularRipple(idx, major, t, minor) {
  const i = Number.isFinite(idx) ? idx : 0;
  const m = Number.isFinite(major) ? major : 10;
  const time = Number.isFinite(t) ? t : 0;
  const n = Number.isFinite(minor) ? minor : 3;
  const laneIndex = ((i % 3) + 3) % 3;
  const lane = (laneIndex - 1) * m * 0.5;
  const ripple = Math.sin(time) * n;
  return {
    laneIndex,
    lane,
    ripple,
    y: lane + ripple,
    rippleUsesLane: false,
    rippleUsesMajor: false,
  };
}

export function noteSessionTriangularRippleHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const yRe = /y\s*=\s*\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(\s*t\s*\)\s*\*\s*minor/;
  const triangular = pinned ? PINNED_LINE : caseBody(text, 'triangular');
  const infinity = pinned ? '' : caseBody(text, 'infinity');
  const hamiltonian = pinned ? '' : caseBody(text, 'hamiltonian');
  const torus = pinned ? '' : caseBody(text, 'torus');
  const triangularHas = yRe.test(triangular);
  const rippleTerm = /Math\.sin\(\s*t\s*\)\s*\*\s*minor/.test(triangular);
  const laneTerm = /\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)\s*\*\s*major\s*\*\s*0\.5/.test(triangular);
  const infinityDifferent = !yRe.test(infinity);
  const hamiltonianDifferent = !/Math\.sin\(\s*t\s*\)\s*\*\s*minor/.test(hamiltonian);
  const torusDifferent = !yRe.test(torus);
  const still = sessionTriangularRipple(0, 10, 0, 3);
  const crest = sessionTriangularRipple(1, 10, Math.PI / 2, 3);
  const highCrest = sessionTriangularRipple(2, 10, Math.PI / 2, 3);
  const trough = sessionTriangularRipple(1, 14, (3 * Math.PI) / 2, 3);
  const scaled = sessionTriangularRipple(2, 14, 0, 5);
  const wrap = sessionTriangularRipple(3, 10, Math.PI / 2, 4);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: TRIANGULAR_RIPPLE_HOLD_STAGE,
    session: TRIANGULAR_RIPPLE_HOLD_SESSION_HASH,
    living: TRIANGULAR_RIPPLE_HOLD_LIVING_HASH,
    pinned,
    formula: 'ripple = sin(t) * minor; lane stays (idx % 3 - 1) * major * 0.5',
    triangularHas,
    rippleTerm,
    laneTerm,
    infinityDifferent,
    hamiltonianDifferent,
    torusDifferent,
    still,
    crest,
    highCrest,
    trough,
    scaled,
    wrap,
    pasteRewritten: false,
    secrets: false,
    ok: triangularHas && rippleTerm && laneTerm
      && infinityDifferent && hamiltonianDifferent && torusDifferent
      && near(still.lane, -5) && near(still.ripple, 0) && near(still.y, -5)
      && near(crest.lane, 0) && near(crest.ripple, 3) && near(crest.y, 3)
      && near(highCrest.lane, 5) && near(highCrest.ripple, 3) && near(highCrest.y, 8)
      && near(trough.lane, 0) && near(trough.ripple, -3) && near(trough.y, -3)
      && near(scaled.lane, 7) && near(scaled.ripple, 0)
      && near(wrap.lane, -5) && near(wrap.ripple, 4) && near(wrap.y, -1)
      && crest.ripple === highCrest.ripple
      && !crest.rippleUsesLane
      && !crest.rippleUsesMajor,
    note: 'Stage 400 holds the triangular ripple sin(t) * minor beside the lane. Ripple ignores idx, major, theta, phi, and gravityPull. Lane ignores t and minor. Paste not rewritten.',
  };
}
