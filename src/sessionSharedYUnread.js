/** Stage 495 — shared y tube is identical on infinity and torus and unread by tube radius. Document only. No secrets. */
export const SHARED_Y_UNREAD_STAGE = 495;
export const SHARED_Y_UNREAD_SESSION = 'beec41f1';
export const SHARED_Y_UNREAD_LIVING = '7cd81012';

const Y_TUBE = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';
const TUBE_RADIUS = '(major + minor * Math.cos(this.phi))';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  Y_TUBE,
  'break;',
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  Y_TUBE,
  'break;',
].join('\n');

export function sampleSharedYUnread(major, minor, phi, t, idx) {
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  const tubeRadius = major + minor * Math.cos(phi);
  return { major, minor, phi, t, idx, y, tubeRadius, yReadsTube: false };
}

function caseBody(text, label) {
  const start = text.indexOf("case '" + label + "'");
  if (start < 0) return '';
  const end = text.indexOf('break;', start);
  return end > start ? text.slice(start, end) : '';
}

function yLine(arm) {
  return (arm.match(/y\s*=[^;]+;/) || [''])[0];
}

export function noteSessionSharedYUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const tube = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)\s*\*\s*Math\.sin\(\s*t\s*\*\s*0\.5\s*\+\s*this\.idx\s*\)\s*;/;
  const infinity = caseBody(text, 'infinity');
  const torus = caseBody(text, 'torus');
  const infinityY = yLine(infinity);
  const torusY = yLine(torus);
  const identical = infinityY.length > 0 && infinityY === torusY && tube.test(infinityY);
  const unreadByTube = !/major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)/.test(infinityY)
    && !/major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)/.test(torusY);
  const torusTubeOnXZ = /x\s*=\s*\(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.cos\(this\.theta\)/.test(torus)
    && /z\s*=\s*\(major \+ minor \* Math\.cos\(this\.phi\)\) \* Math\.sin\(this\.theta\)/.test(torus);
  const infinityOmitsTube = infinity.length > 0 && !/major \+ minor \* Math\.cos\(this\.phi\)/.test(infinity);
  const sample = sampleSharedYUnread(10, 3, Math.PI / 2, 0, 0);
  const sampleOk = sample.y === 0 && sample.tubeRadius === 10 && sample.yReadsTube === false;
  return {
    stage: SHARED_Y_UNREAD_STAGE,
    session: SHARED_Y_UNREAD_SESSION,
    living: SHARED_Y_UNREAD_LIVING,
    pinned,
    identical,
    unreadByTube,
    torusTubeOnXZ,
    infinityOmitsTube,
    tubeRadius: TUBE_RADIUS,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: identical && unreadByTube && torusTubeOnXZ && infinityOmitsTube && sampleOk,
    note: 'infinity y and torus/default y are the same minor * sin(phi) * sin(t * 0.5 + idx) line. Tube radius (major + minor * cos(phi)) stays on torus x and z only. Paste not rewritten.',
  };
}

export function compileSessionStage495(source) {
  const hold = noteSessionSharedYUnread(source);
  return {
    current: SHARED_Y_UNREAD_STAGE,
    session: SHARED_Y_UNREAD_SESSION,
    living: SHARED_Y_UNREAD_LIVING,
    paste: '2026-10-08 11:08 CDT',
    hold,
    next: [
      { stage: 496, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
      { stage: 497, title: 'hold lerp alpha as the literal 0.05' },
      { stage: 498, title: 'hold lemniscate scale as major * 1.5, unread by minor' },
    ],
  };
}
