/** Stage 510 — triangular tAngle is the sector snap and does not read the theta*5 weave. Document only. Paste not rewritten. No secrets. */
export const TRIANGULAR_SNAP_STAGE = 510;
export const TRIANGULAR_SNAP_SESSION = 'beec41f1';
export const TRIANGULAR_SNAP_LIVING = '7cd81012';

const PINNED = [
  "case 'triangular':",
  '            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  '            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  '            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  '            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  '            break;',
].join('\n');

export function sampleTriangularSnapUnread(theta) {
  const sector = (Math.PI * 2) / 3;
  const tAngle = Math.floor(theta / sector) * sector;
  const weave = theta * 5;
  return { theta, tAngle, weave, snapReadsWeave: false };
}

export function noteSessionTriangularSnapUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'triangular'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  const arm = start >= 0 && end > start ? text.slice(start, end) : '';
  const snapLine = (arm.match(/const\s+tAngle\s*=[^;]+;/) || [''])[0];
  const snapShape = /Math\.floor\(this\.theta \/ \(Math\.PI \* 2 \/ 3\)\) \* \(Math\.PI \* 2 \/ 3\)/.test(snapLine);
  const snapUnread = snapLine.length > 0 && !/\*\s*5/.test(snapLine) && !/theta \* 5/.test(snapLine);
  const xWeave = /x\s*=\s*major \* Math\.cos\(tAngle\) \+ minor \* Math\.cos\(this\.theta \* 5\)/.test(arm);
  const zWeave = /z\s*=\s*major \* Math\.sin\(tAngle\) \+ minor \* Math\.sin\(this\.theta \* 5\)/.test(arm);
  const sample = sampleTriangularSnapUnread(1);
  const sampleOk = sample.tAngle === 0 && sample.weave === 5 && sample.snapReadsWeave === false;
  return {
    stage: TRIANGULAR_SNAP_STAGE,
    session: TRIANGULAR_SNAP_SESSION,
    living: TRIANGULAR_SNAP_LIVING,
    pinned,
    snapShape,
    snapUnread,
    xWeave,
    zWeave,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: snapShape && snapUnread && xWeave && zWeave && sampleOk,
    note: 'tAngle stays floor(theta / (2pi/3)) * (2pi/3). The theta*5 weave is added beside the snap on x and z. Sample theta 1 gives tAngle 0 and weave 5. Paste not rewritten.',
  };
}

export function compileSessionStage510(source) {
  const hold = noteSessionTriangularSnapUnread(source);
  return {
    current: TRIANGULAR_SNAP_STAGE,
    session: TRIANGULAR_SNAP_SESSION,
    living: TRIANGULAR_SNAP_LIVING,
    paste: '2026-10-08 22:06 CDT',
    hold,
    next: [
      { stage: 511, title: 'hold shared y tube identical on infinity and torus' },
      { stage: 512, title: 'hold hamiltonian y unread by minor and phi' },
      { stage: 513, title: 'hold torus tube radius unread by y' },
    ],
  };
}
