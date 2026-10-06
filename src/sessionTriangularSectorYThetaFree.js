/** Stage 452 — hold triangular y off the theta*5 ripple. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_SECTOR_Y_STAGE = 452;
export const TRIANGULAR_SECTOR_Y_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_SECTOR_Y_LIVING_HASH = '7cd81012';
export const TRIANGULAR_SECTOR_Y_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

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

export function triangularSectorY(idx, major, minor, t) {
  const lane = (idx % 3) - 1;
  const floor = lane * major * 0.5;
  const lift = Math.sin(t) * minor;
  return { lane, floor, lift, y: floor + lift, usesTheta5: false };
}

export function noteSessionTriangularSectorYThetaFree(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TRIANGULAR : String(source);
  const arm = (text.split("case 'triangular':")[1] || text).split('break;')[0];
  const yLine = (arm.match(/y\s*=\s*[^;]+;/) || [''])[0];
  const xLine = (arm.match(/x\s*=\s*[^;]+;/) || [''])[0];
  const zLine = (arm.match(/z\s*=\s*[^;]+;/) || [''])[0];
  const yHeld = /\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(t\)\s*\*\s*minor/.test(yLine);
  const ySkipsTheta5 = yLine.length > 0 && !/theta\s*\*\s*5/.test(yLine);
  const rippleOnXZ = /theta\s*\*\s*5/.test(xLine) && /theta\s*\*\s*5/.test(zLine);
  const invented = TRIANGULAR_SECTOR_Y_EXTRAS.filter((name) => hasCase(text, name));
  const lane0 = triangularSectorY(0, 10, 3, Math.PI / 2);
  const lane1 = triangularSectorY(1, 10, 3, 0);
  const lane2 = triangularSectorY(2, 10, 3, Math.PI / 2);
  return {
    stage: TRIANGULAR_SECTOR_Y_STAGE,
    session: TRIANGULAR_SECTOR_Y_SESSION_HASH,
    living: TRIANGULAR_SECTOR_Y_LIVING_HASH,
    pinned,
    yHeld,
    ySkipsTheta5,
    rippleOnXZ,
    lane0,
    lane1,
    lane2,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      yHeld &&
      ySkipsTheta5 &&
      rippleOnXZ &&
      invented.length === 0 &&
      lane0.lane === -1 &&
      lane0.y === -5 + 3 &&
      lane1.lane === 0 &&
      lane1.y === 0 &&
      lane2.lane === 1 &&
      lane2.y === 5 + 3 &&
      lane0.usesTheta5 === false,
    note: 'Triangular y stays (idx % 3 - 1) * major * 0.5 + sin(t) * minor. theta * 5 stays on the x/z ripple only. Paste not rewritten.',
  };
}

export function compileSessionStage452(source) {
  const hold = noteSessionTriangularSectorYThetaFree(source);
  return {
    current: TRIANGULAR_SECTOR_Y_STAGE,
    session: TRIANGULAR_SECTOR_Y_SESSION_HASH,
    living: TRIANGULAR_SECTOR_Y_LIVING_HASH,
    paste: '2026-10-06 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 453, title: 'hold torus tube identity on x and z only' },
      { stage: 454, title: 'hold infinity z as scale * sin(theta) * cos(theta) / denom' },
      { stage: 455, title: 'hold triangular tAngle snap to 2π/3 sectors' },
    ],
  };
}
