/** Stage 502 — triangular tAngle stays unread by the theta * 5 weave. Document only. Paste not rewritten. No secrets. */
export const TANGLE_UNREAD_STAGE = 502;
export const TANGLE_UNREAD_SESSION = 'beec41f1';
export const TANGLE_UNREAD_LIVING = '7cd81012';

const PINNED = [
  "        case 'triangular':",
  '            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  '            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  '            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  '            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
].join('\n');

export function sampleTriangularTAngleUnread(theta = 1, major = 10, minor = 3) {
  const sector = (Math.PI * 2) / 3;
  const tAngle = Math.floor(theta / sector) * sector;
  const weave = theta * 5;
  return {
    theta,
    major,
    minor,
    sector,
    tAngle,
    weave,
    tAngleUsesWeave: false,
    xSnap: major * Math.cos(tAngle),
    xWeave: minor * Math.cos(weave),
  };
}

export function noteSessionTriangularTAngleUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const tAngleLine = /const\s+tAngle\s*=\s*\(Math\.floor\(this\.theta\s*\/\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*\*\s*\(Math\.PI\s*\*\s*2\s*\/\s*3\)\)\s*;/.exec(text);
  const weaveX = /minor\s*\*\s*Math\.cos\(this\.theta\s*\*\s*5\)/.test(text);
  const weaveZ = /minor\s*\*\s*Math\.sin\(this\.theta\s*\*\s*5\)/.test(text);
  const tAngleReadsWeave = tAngleLine ? /\*\s*5|theta\s*\*\s*5/.test(tAngleLine[0]) : true;
  const sample = sampleTriangularTAngleUnread();
  return {
    stage: TANGLE_UNREAD_STAGE,
    session: TANGLE_UNREAD_SESSION,
    living: TANGLE_UNREAD_LIVING,
    pinned,
    tAngleLine: !!tAngleLine,
    weaveX,
    weaveZ,
    tAngleReadsWeave,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: !!tAngleLine && weaveX && weaveZ && !tAngleReadsWeave && sample.tAngleUsesWeave === false && sample.tAngle === 0 && sample.weave === 5,
    note: 'tAngle is the sector snap floor(theta / (2π/3)) * (2π/3). The theta * 5 weave is added beside it on x and z. Paste not rewritten.',
  };
}

export function compileSessionStage502(source) {
  const hold = noteSessionTriangularTAngleUnread(source);
  return {
    current: TANGLE_UNREAD_STAGE,
    session: TANGLE_UNREAD_SESSION,
    living: TANGLE_UNREAD_LIVING,
    paste: '2026-10-08 19:09 CDT',
    hold,
    next: [
      { stage: 503, title: 'hold hamiltonian lift unread by hScale' },
      { stage: 504, title: 'hold session lerp alpha as the literal 0.05' },
      { stage: 505, title: 'hold major = 10 + idx * 2 assigned before the switch' },
    ],
  };
}
