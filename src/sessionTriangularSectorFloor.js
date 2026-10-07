/** Stage 474 — triangular sector snap is floor(theta / (2π/3)) * (2π/3). Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_SECTOR_FLOOR_STAGE = 474;
export const TRIANGULAR_SECTOR_FLOOR_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_FLOOR_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularSector(theta) {
  const width = (Math.PI * 2) / 3;
  const sector = Math.floor(theta / width) * width;
  return { theta, width, sector, snapsToThree: true, unreadByY: true };
}

function triangularBody(text) {
  const start = text.indexOf("case 'triangular'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  return start >= 0 && end > start ? text.slice(start, end) : '';
}

export function noteSessionTriangularSectorFloor(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const body = triangularBody(text) || text;
  const snap = /const\s+tAngle\s*=\s*\(\s*Math\.floor\(\s*this\.theta\s*\/\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)\s*\*\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)/.test(body);
  const xUsesSnap = /x\s*=\s*major\s*\*\s*Math\.cos\(\s*tAngle\s*\)/.test(body);
  const zUsesSnap = /z\s*=\s*major\s*\*\s*Math\.sin\(\s*tAngle\s*\)/.test(body);
  const weaveIndependent = /Math\.cos\(\s*this\.theta\s*\*\s*5\s*\)/.test(body) && /Math\.sin\(\s*this\.theta\s*\*\s*5\s*\)/.test(body);
  const yIgnoresSnap = /y\s*=\s*\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)/.test(body) && !/y\s*=[^;]*tAngle/.test(body);
  const sample = sampleTriangularSector(Math.PI);
  const expected = ((Math.PI * 2) / 3);
  return {
    stage: TRIANGULAR_SECTOR_FLOOR_STAGE,
    session: TRIANGULAR_SECTOR_FLOOR_SESSION_HASH,
    living: TRIANGULAR_SECTOR_FLOOR_LIVING_HASH,
    pinned,
    snap,
    xUsesSnap,
    zUsesSnap,
    weaveIndependent,
    yIgnoresSnap,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: snap && xUsesSnap && zUsesSnap && weaveIndependent && yIgnoresSnap && sample.sector === expected,
    note: 'triangular tAngle is floor(theta / (2π/3)) * (2π/3). x and z use that snap for the lattice radius. theta*5 weave stays independent. y does not read tAngle. Paste not rewritten.',
  };
}

export function compileSessionStage474(source) {
  const hold = noteSessionTriangularSectorFloor(source);
  return {
    current: TRIANGULAR_SECTOR_FLOOR_STAGE,
    session: TRIANGULAR_SECTOR_FLOOR_SESSION_HASH,
    living: TRIANGULAR_SECTOR_FLOOR_LIVING_HASH,
    paste: '2026-10-07 15:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 475, title: 'hold infinity scale as major * 1.5, unread by the other three cases' },
      { stage: 476, title: 'hold hamiltonian x/z as hScale * cos(theta * 3) * cos/sin(theta), unread by phi' },
      { stage: 477, title: 'hold triangular y sector as (idx % 3 - 1) * major * 0.5, unread by tAngle' },
    ],
  };
}
