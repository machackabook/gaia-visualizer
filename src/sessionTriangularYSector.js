/** Stage 477 — triangular y sector is (idx % 3 - 1) * major * 0.5, unread by tAngle. Document only. Do not rewrite the paste. No secrets. */
export const TRI_Y_SECTOR_STAGE = 477;
export const TRI_Y_SECTOR_SESSION_HASH = 'beec41f1';
export const TRI_Y_SECTOR_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularYSector(idx, major) {
  const lane = (idx % 3 - 1) * major * 0.5;
  return { idx, major, lane, tAngleUnread: true };
}

export function noteSessionTriangularYSector(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'triangular':");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  const body = start >= 0 && end > start ? text.slice(start, end) : (pinned ? text : '');
  const yLine = (body.match(/y\s*=[^;]*/)||[''])[0];
  const lane = /y\s*=\s*\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(\s*t\s*\)\s*\*\s*minor\s*;/.test(body);
  const tAngleUnread = yLine.length > 0 && !/tAngle/.test(yLine);
  const xUsesSnap = /x\s*=\s*major\s*\*\s*Math\.cos\(\s*tAngle\s*\)/.test(body);
  const sample = sampleTriangularYSector(0, 10);
  return {
    stage: TRI_Y_SECTOR_STAGE,
    session: TRI_Y_SECTOR_SESSION_HASH,
    living: TRI_Y_SECTOR_LIVING_HASH,
    pinned,
    lane,
    tAngleUnread,
    xUsesSnap,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: lane && tAngleUnread && xUsesSnap && sample.lane === -5,
    note: 'triangular y lane is (idx % 3 - 1) * major * 0.5 plus sin(t) * minor. tAngle is used by x and z only. Paste not rewritten.',
  };
}

export function compileSessionStage477(source) {
  const hold = noteSessionTriangularYSector(source);
  return {
    current: TRI_Y_SECTOR_STAGE,
    session: TRI_Y_SECTOR_SESSION_HASH,
    living: TRI_Y_SECTOR_LIVING_HASH,
    paste: '2026-10-07 17:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 478, title: 'hold shared y tube on infinity and torus only' },
      { stage: 479, title: 'hold hamiltonian y as hScale * sin(theta * 3) + sin(t) * 2, unread by minor' },
      { stage: 480, title: 'hold triangular weave as minor * cos/sin(theta * 5) beside the sector snap' },
    ],
  };
}
