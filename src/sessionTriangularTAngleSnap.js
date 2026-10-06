/** Stage 455 — hold triangular tAngle snap to 2π/3 sectors. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_TANGLE_STAGE = 455;
export const TRIANGULAR_TANGLE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_TANGLE_LIVING_HASH = '7cd81012';
export const TRIANGULAR_TANGLE_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];
export const TRIANGULAR_SECTOR = (2 * Math.PI) / 3;

const PINNED_TRIANGULAR = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function triangularTAngle(theta) {
  const sector = TRIANGULAR_SECTOR;
  const index = Math.floor(theta / sector);
  const tAngle = index * sector;
  return {
    sector,
    index,
    tAngle,
    cos: Math.cos(tAngle),
    sin: Math.sin(tAngle),
  };
}

export function noteSessionTriangularTAngleSnap(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TRIANGULAR : String(source);
  const arm = (text.split("case 'triangular':")[1] || text).split('break;')[0];
  const snapHeld = /tAngle\s*=\s*\(\s*Math\.floor\(\s*this\.theta\s*\/\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)\s*\*\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)\s*;/.test(arm);
  const xUses = /x\s*=\s*major\s*\*\s*Math\.cos\(tAngle\)\s*\+\s*minor\s*\*\s*Math\.cos\(this\.theta\s*\*\s*5\)\s*;/.test(arm);
  const zUses = /z\s*=\s*major\s*\*\s*Math\.sin\(tAngle\)\s*\+\s*minor\s*\*\s*Math\.sin\(this\.theta\s*\*\s*5\)\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const yOffSnap = yLine.length > 0 && !/tAngle/.test(yLine) && !/theta\s*\*\s*5/.test(yLine);
  const invented = TRIANGULAR_TANGLE_EXTRAS.filter((name) => hasCase(text, name));
  const origin = triangularTAngle(0);
  const edge = triangularTAngle(TRIANGULAR_SECTOR - 1e-9);
  const next = triangularTAngle(TRIANGULAR_SECTOR);
  const third = triangularTAngle((4 * Math.PI) / 3);
  return {
    stage: TRIANGULAR_TANGLE_STAGE,
    session: TRIANGULAR_TANGLE_SESSION_HASH,
    living: TRIANGULAR_TANGLE_LIVING_HASH,
    pinned,
    snapHeld,
    xUses,
    zUses,
    yOffSnap,
    origin,
    edge,
    next,
    third,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      snapHeld &&
      xUses &&
      zUses &&
      yOffSnap &&
      invented.length === 0 &&
      origin.index === 0 &&
      Math.abs(origin.tAngle) < 1e-12 &&
      Math.abs(origin.cos - 1) < 1e-12 &&
      edge.index === 0 &&
      next.index === 1 &&
      Math.abs(next.tAngle - TRIANGULAR_SECTOR) < 1e-12 &&
      Math.abs(next.cos + 0.5) < 1e-12 &&
      Math.abs(next.sin - Math.sqrt(3) / 2) < 1e-12 &&
      third.index === 2 &&
      Math.abs(third.tAngle - (4 * Math.PI) / 3) < 1e-12 &&
      Math.abs(third.sin + Math.sqrt(3) / 2) < 1e-12,
    note: 'Triangular tAngle stays floor(theta / (2π/3)) * (2π/3). theta*5 stays on the x/z ripple. y does not read tAngle. Paste not rewritten.',
  };
}

export function compileSessionStage455(source) {
  const hold = noteSessionTriangularTAngleSnap(source);
  return {
    current: TRIANGULAR_TANGLE_STAGE,
    session: TRIANGULAR_TANGLE_SESSION_HASH,
    living: TRIANGULAR_TANGLE_LIVING_HASH,
    paste: '2026-10-06 15:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 456, title: 'hold theta step as the only gravityPull product' },
      { stage: 457, title: 'hold infinity y identical to torus y, no scale or denom' },
      { stage: 458, title: 'hold major and minor assigned before the geometry switch' },
    ],
  };
}
