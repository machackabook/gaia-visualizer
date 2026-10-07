/** Stage 475 — infinity scale is major * 1.5 and unread by the other three cases. Document only. Do not rewrite the paste. No secrets. */
export const INF_SCALE_UNREAD_STAGE = 475;
export const INF_SCALE_UNREAD_SESSION_HASH = 'beec41f1';
export const INF_SCALE_UNREAD_LIVING_HASH = '7cd81012';
export const INF_SCALE_UNREAD_FACTOR = 1.5;

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
  'break;',
  "case 'triangular':",
  'const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));',
  'x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);',
  'z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);',
  'y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;',
  'break;',
  "case 'torus':",
  'default:',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  'z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleInfinityScaleUnread(major) {
  const scale = major * INF_SCALE_UNREAD_FACTOR;
  return {
    major,
    factor: INF_SCALE_UNREAD_FACTOR,
    scale,
    unreadOutsideInfinity: true,
    hScaleStaysMajor: true,
  };
}

function caseBody(text, label) {
  const start = text.indexOf("case '" + label + "'");
  if (start < 0) return '';
  const end = text.indexOf('break;', start);
  return end > start ? text.slice(start, end) : '';
}

export function noteSessionInfinityScaleUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const infinity = caseBody(text, 'infinity') || (pinned ? text : '');
  const hamiltonian = caseBody(text, 'hamiltonian');
  const triangular = caseBody(text, 'triangular');
  const torus = caseBody(text, 'torus');
  const scale = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(infinity);
  const xUsesScale = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(infinity);
  const zUsesScale = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(infinity);
  const yIgnoresScale = /y\s*=\s*minor\s*\*\s*Math\.sin\(\s*this\.phi\s*\)/.test(infinity) && !/\bscale\b/.test((infinity.match(/y\s*=[^;]*/)||[''])[0]);
  const hamiltonianUnread = hamiltonian.length > 0 && !/\bscale\b/.test(hamiltonian) && /const\s+hScale\s*=\s*major\s*;/.test(hamiltonian);
  const triangularUnread = triangular.length > 0 && !/\bscale\b/.test(triangular) && /major\s*\*\s*Math\.cos\(\s*tAngle\s*\)/.test(triangular);
  const torusUnread = torus.length > 0 && !/\bscale\b/.test(torus) && /major\s*\+\s*minor\s*\*\s*Math\.cos\(\s*this\.phi\s*\)/.test(torus);
  const sample = sampleInfinityScaleUnread(10);
  return {
    stage: INF_SCALE_UNREAD_STAGE,
    session: INF_SCALE_UNREAD_SESSION_HASH,
    living: INF_SCALE_UNREAD_LIVING_HASH,
    pinned,
    scale,
    xUsesScale,
    zUsesScale,
    yIgnoresScale,
    hamiltonianUnread,
    triangularUnread,
    torusUnread,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scale && xUsesScale && zUsesScale && yIgnoresScale && hamiltonianUnread && triangularUnread && torusUnread && sample.scale === 15,
    note: 'infinity scale is major * 1.5 and is read by x and z only. Hamiltonian copies major into hScale. Triangular and torus read major directly. The scale binding is unread outside infinity. Paste not rewritten.',
  };
}

export function compileSessionStage475(source) {
  const hold = noteSessionInfinityScaleUnread(source);
  return {
    current: INF_SCALE_UNREAD_STAGE,
    session: INF_SCALE_UNREAD_SESSION_HASH,
    living: INF_SCALE_UNREAD_LIVING_HASH,
    paste: '2026-10-07 16:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 476, title: 'hold hamiltonian x/z as hScale * cos(theta * 3) * cos/sin(theta), unread by phi' },
      { stage: 477, title: 'hold triangular y sector as (idx % 3 - 1) * major * 0.5, unread by tAngle' },
      { stage: 478, title: 'hold shared y tube on infinity and torus only, unread by hamiltonian and triangular' },
    ],
  };
}
