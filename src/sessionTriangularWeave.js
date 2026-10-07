/** Stage 480 — triangular weave is minor * cos/sin(theta * 5) beside the sector snap. Document only. Do not rewrite the paste. No secrets. */
export const TRIANGULAR_WEAVE_STAGE = 480;
export const TRIANGULAR_WEAVE_SESSION_HASH = 'beec41f1';
export const TRIANGULAR_WEAVE_LIVING_HASH = '7cd81012';

const PINNED = [
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
].join('\n');

export function sampleTriangularWeave(minor, theta) {
  return {
    minor,
    theta,
    xWeave: minor * Math.cos(theta * 5),
    zWeave: minor * Math.sin(theta * 5),
    besideSectorSnap: true,
  };
}

export function noteSessionTriangularWeave(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'triangular'");
  const end = start < 0 ? -1 : text.indexOf('break;', start);
  const body = end > start ? text.slice(start, end) : '';
  const x = /x\s*=\s*major\s*\*\s*Math\.cos\(\s*tAngle\s*\)\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.theta\s*\*\s*5\s*\)/.test(body);
  const z = /z\s*=\s*major\s*\*\s*Math\.sin\(\s*tAngle\s*\)\s*\+\s*minor\s*\*\s*Math\.sin\(\s*this\.theta\s*\*\s*5\s*\)/.test(body);
  const sector = /Math\.floor\(\s*this\.theta\s*\/\s*\(\s*Math\.PI\s*\*\s*2\s*\/\s*3\s*\)\s*\)/.test(body);
  const sample = sampleTriangularWeave(3, 0);
  return {
    stage: TRIANGULAR_WEAVE_STAGE,
    session: TRIANGULAR_WEAVE_SESSION_HASH,
    living: TRIANGULAR_WEAVE_LIVING_HASH,
    pinned,
    x,
    z,
    sector,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: x && z && sector && sample.xWeave === 3 && sample.zWeave === 0,
    note: 'triangular x/z keep the sector snap and add minor * cos/sin(theta * 5). Paste not rewritten.',
  };
}

export function compileSessionStage480(source) {
  const hold = noteSessionTriangularWeave(source);
  return {
    current: TRIANGULAR_WEAVE_STAGE,
    session: TRIANGULAR_WEAVE_SESSION_HASH,
    living: TRIANGULAR_WEAVE_LIVING_HASH,
    paste: '2026-10-07 18:06 CDT',
    hold,
    next: [
      { stage: 481, title: 'hold the session theta step as the only angle advance; phi is not incremented' },
      { stage: 482, title: 'hold lerp alpha 0.05 as the only blend into the geometric target' },
      { stage: 483, title: 'hold major = 10 + idx * 2 and minor = 3 + toroidalWeave * 2 as the shared radii' },
    ],
  };
}
