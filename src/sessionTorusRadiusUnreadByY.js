/** Stage 513 — torus tube radius stays on x and z and is unread by y. Document only. Paste not rewritten. No secrets. */
export const TORUS_RADIUS_UNREAD_STAGE = 513;
export const TORUS_RADIUS_UNREAD_SESSION = 'beec41f1';
export const TORUS_RADIUS_UNREAD_LIVING = '7cd81012';

const RADIUS = '(major + minor * Math.cos(this.phi))';
const Y_LINE = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

const PINNED = [
  "case 'torus':",
  '        default:',
  '            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            break;',
].join('\n');

export function sampleTorusRadiusUnreadByY(theta = 0.8, phi = 0.3, t = 1.1, idx = 2, major = 14, minor = 5) {
  const radius = major + minor * Math.cos(phi);
  const x = radius * Math.cos(theta);
  const z = radius * Math.sin(theta);
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return {
    radius,
    x,
    z,
    y,
    yReadsRadius: false,
    xzReadRadius: true,
  };
}

export function noteSessionTorusRadiusUnreadByY(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'torus'");
  const end = start < 0 ? -1 : text.indexOf('break;', start);
  const arm = start >= 0 && end > start ? text.slice(start, end) : '';
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const xLine = (arm.match(/x\s*=[^;]+;/) || [''])[0];
  const zLine = (arm.match(/z\s*=[^;]+;/) || [''])[0];
  const yUnread = yLine.includes('minor * Math.sin(this.phi)') && !yLine.includes('major + minor');
  const xzRead = xLine.includes(RADIUS) && zLine.includes(RADIUS);
  const sample = sampleTorusRadiusUnreadByY();
  return {
    stage: TORUS_RADIUS_UNREAD_STAGE,
    session: TORUS_RADIUS_UNREAD_SESSION,
    living: TORUS_RADIUS_UNREAD_LIVING,
    pinned,
    yLine,
    yUnread,
    xzRead,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: yUnread && xzRead && sample.yReadsRadius === false && sample.xzReadRadius === true,
    note: 'Torus tube radius (major + minor * cos(phi)) is on x and z only. y stays the shared tube and does not read that radius. Paste not rewritten.',
  };
}

export function compileSessionStage513(source) {
  const hold = noteSessionTorusRadiusUnreadByY(source);
  return {
    current: TORUS_RADIUS_UNREAD_STAGE,
    session: TORUS_RADIUS_UNREAD_SESSION,
    living: TORUS_RADIUS_UNREAD_LIVING,
    paste: '2026-10-08 23:06 CDT',
    hold,
    next: [
      { stage: 514, title: 'hold torus case then default as one shared body' },
      { stage: 515, title: 'hold lemniscate scale as major * 1.5 unread by minor' },
      { stage: 516, title: 'hold lerp alpha as the literal 0.05' },
    ],
  };
}
