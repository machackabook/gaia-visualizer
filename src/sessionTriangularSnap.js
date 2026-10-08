/** Stage 494 — triangular sector snap is unread by the theta*5 weave. Document only. No secrets. */
export const TRIANGULAR_SNAP_STAGE = 494;
export const TRIANGULAR_SNAP_SESSION = 'beec41f1';
export const TRIANGULAR_SNAP_LIVING = '7cd81012';

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularSnap(theta) {
  const sector = Math.PI * 2 / 3;
  const tAngle = Math.floor(theta / sector) * sector;
  return {
    theta,
    tAngle,
    snapReadsWeave: false,
  };
}

export function noteSessionTriangularSnap(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'triangular'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  const arm = start >= 0 && end > start ? text.slice(start, end) : '';
  const snapLine = (arm.match(/const\s+tAngle\s*=[^;]+;/) || [''])[0];
  const snapShape = /Math\.floor\(this\.theta \/ \(Math\.PI \* 2 \/ 3\)\) \* \(Math\.PI \* 2 \/ 3\)/.test(snapLine);
  const snapUnread = snapLine.length > 0 && !/theta \* 5/.test(snapLine) && !/minor/.test(snapLine);
  const xWeave = /x\s*=\s*major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\)/.test(arm);
  const zWeave = /z\s*=\s*major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\)/.test(arm);
  const yUnread = !/tAngle/.test((arm.match(/y\s*=[^;]+;/) || [''])[0]);
  const sample = sampleTriangularSnap(Math.PI);
  const sampleOk = sample.tAngle === Math.PI * 2 / 3;
  return {
    stage: TRIANGULAR_SNAP_STAGE,
    session: TRIANGULAR_SNAP_SESSION,
    living: TRIANGULAR_SNAP_LIVING,
    pinned,
    snapShape,
    snapUnread,
    xWeave,
    zWeave,
    yUnread,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: snapShape && snapUnread && xWeave && zWeave && yUnread && sampleOk,
    note: 'tAngle snaps theta into thirds and does not read the theta*5 weave or minor. Weave is added beside the snap on x and z. Paste not rewritten.',
  };
}

export function compileSessionStage494(source) {
  const hold = noteSessionTriangularSnap(source);
  return {
    current: TRIANGULAR_SNAP_STAGE,
    session: TRIANGULAR_SNAP_SESSION,
    living: TRIANGULAR_SNAP_LIVING,
    paste: '2026-10-08 10:07 CDT',
    hold,
    next: [
      { stage: 495, title: 'hold shared y tube identical on infinity and torus, unread by tube radius' },
      { stage: 496, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 497, title: 'hold lerp alpha as the literal 0.05' },
    ],
  };
}
