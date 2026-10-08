/** Stage 487 — triangular y lane is unread by tAngle. Document only. No secrets. */
export const TRIANGULAR_Y_UNREAD_STAGE = 487;
export const TRIANGULAR_Y_UNREAD_SESSION = 'beec41f1';
export const TRIANGULAR_Y_UNREAD_LIVING = '7cd81012';

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularYUnread(idx, major, t, minor) {
  const lane = ((idx % 3) - 1) * major * 0.5;
  const ripple = Math.sin(t) * minor;
  return { idx, major, t, minor, lane, ripple, y: lane + ripple, readsTAngle: false };
}

export function noteSessionTriangularYUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const armStart = text.indexOf("case 'triangular'");
  const armEnd = armStart >= 0 ? text.indexOf('break;', armStart) : -1;
  const arm = armStart >= 0 && armEnd > armStart ? text.slice(armStart, armEnd) : '';
  const snap = /const\s+tAngle\s*=\s*\(Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*;/.test(arm);
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const yLane = /y\s*=\s*\(this\.idx\s*%\s*3\s*-\s*1\)\s*\*\s*major\s*\*\s*0\.5\s*\+\s*Math\.sin\(t\)\s*\*\s*minor\s*;/.test(yLine);
  const yReadsTAngle = /tAngle/.test(yLine);
  const sample = sampleTriangularYUnread(2, 10, 0, 4);
  const sampleOk = sample.lane === 5 && sample.ripple === 0 && sample.y === 5 && sample.readsTAngle === false;
  return {
    stage: TRIANGULAR_Y_UNREAD_STAGE,
    session: TRIANGULAR_Y_UNREAD_SESSION,
    living: TRIANGULAR_Y_UNREAD_LIVING,
    pinned,
    snap,
    yLane,
    yReadsTAngle,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: snap && yLane && !yReadsTAngle && sampleOk,
    note: 'triangular y is (idx % 3 - 1) * major * 0.5 + sin(t) * minor. tAngle snaps x/z only. Paste not rewritten.',
  };
}

export function compileSessionStage487(source) {
  const hold = noteSessionTriangularYUnread(source);
  return {
    current: TRIANGULAR_Y_UNREAD_STAGE,
    session: TRIANGULAR_Y_UNREAD_SESSION,
    living: TRIANGULAR_Y_UNREAD_LIVING,
    paste: '2026-10-07 22:06 CDT',
    hold,
    next: [
      { stage: 488, title: 'hold session lerp allocating new THREE.Vector3 at alpha 0.05' },
      { stage: 489, title: 'hold torus tube (major + minor * cos(phi)) on x and z only' },
      { stage: 490, title: 'hold hamiltonian lift sin(t) * 2 unread by hScale' },
    ],
  };
}
