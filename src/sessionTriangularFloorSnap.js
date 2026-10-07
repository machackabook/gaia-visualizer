/** Stage 463 — triangular tAngle is a floor snap to 2pi/3. Document only. Do not rewrite the paste. No secrets. */
export const TRI_FLOOR_STAGE = 463;
export const TRI_FLOOR_SESSION_HASH = 'beec41f1';
export const TRI_FLOOR_LIVING_HASH = '7cd81012';
export const TRI_FLOOR_SECTOR = (Math.PI * 2) / 3;

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularFloorSnap(theta) {
  const sector = TRI_FLOOR_SECTOR;
  const tAngle = Math.floor(theta / sector) * sector;
  const steps = tAngle / sector;
  return {
    sector,
    tAngle,
    steps,
    snapped: Math.abs(steps - Math.round(steps)) < 1e-9,
    yIgnoresTAngle: true,
  };
}

export function noteSessionTriangularFloorSnap(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = /case\s*['"]triangular['"][\s\S]*?break\s*;/.exec(text);
  const body = arm ? arm[0] : (pinned ? text : '');
  const snap = /const\s+tAngle\s*=\s*\(\s*Math\.floor\(\s*this\.theta\s*\/\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)\s*\*\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)\s*;/.test(body);
  const xRipple = /x\s*=\s*major\s*\*\s*Math\.cos\(\s*tAngle\s*\)\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*5\s*\)\s*;/.test(body);
  const zRipple = /z\s*=\s*major\s*\*\s*Math\.sin\(\s*tAngle\s*\)\s*\+\s*minor\s*\*\s*Math\.sin\(\s*this\.theta\s*\*\s*5\s*\)\s*;/.test(body);
  const y = /y\s*=\s*\(\s*this\.idx\s*%\s*3\s*-\s*1\s*\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(\s*t\s*\)\s*\*\s*minor\s*;/.test(body);
  const yReadsTAngle = /y\s*=[^;]*tAngle/.test(body);
  const sample = sampleTriangularFloorSnap(4.2);
  return {
    stage: TRI_FLOOR_STAGE,
    session: TRI_FLOOR_SESSION_HASH,
    living: TRI_FLOOR_LIVING_HASH,
    pinned,
    snap,
    xRipple,
    zRipple,
    y,
    yIgnoresTAngle: y && !yReadsTAngle,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: snap && xRipple && zRipple && y && !yReadsTAngle && sample.snapped && sample.yIgnoresTAngle,
    note: 'triangular tAngle is floor(theta / (2pi/3)) * (2pi/3). theta*5 stays on the x/z ripple. y does not read tAngle. Paste not rewritten.',
  };
}

export function compileSessionStage463(source) {
  const hold = noteSessionTriangularFloorSnap(source);
  return {
    current: TRI_FLOOR_STAGE,
    session: TRI_FLOOR_SESSION_HASH,
    living: TRI_FLOOR_LIVING_HASH,
    paste: '2026-10-06 22:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 464, title: 'hold infinity scale as major * 1.5 before the shared denom' },
      { stage: 465, title: 'hold torus y identical to infinity y, omitting the tube radius' },
      { stage: 466, title: 'hold lerp alpha as the literal 0.05, unscaled by gravityPull' },
    ],
  };
}
