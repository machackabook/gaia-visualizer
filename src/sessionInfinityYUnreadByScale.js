/** Stage 501 — infinity y stays the shared tube and does not read scale. Document only. Paste not rewritten. No secrets. */
export const INFINITY_Y_UNREAD_STAGE = 501;
export const INFINITY_Y_SESSION = 'beec41f1';
export const INFINITY_Y_LIVING = '7cd81012';

const SHARED_Y = 'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);';

const PINNED = [
  "        case 'infinity':",
  '            const scale = major * 1.5;',
  '            const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  '            x = (scale * Math.cos(this.theta)) / denom;',
  '            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  '            ' + SHARED_Y,
  "        case 'torus':",
  '        default:',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
].join('\n');

export function sampleInfinityYUnreadByScale(major = 10, minor = 3, phi = 0.4, t = 0, idx = 0) {
  const scale = major * 1.5;
  const y = minor * Math.sin(phi) * Math.sin(t * 0.5 + idx);
  return {
    major,
    minor,
    scale,
    y,
    sharedTube: y,
    scaleInY: false,
  };
}

export function noteSessionInfinityYUnreadByScale(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const scaleLine = /const\s+scale\s*=\s*major\s*\*\s*1\.5\s*;/.test(text);
  const infinityY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)\s*\*\s*Math\.sin\(t\s*\*\s*0\.5\s*\+\s*this\.idx\)\s*;/.test(text);
  const scaleInY = /y\s*=[^;]*\bscale\b/.test(text);
  const sample = sampleInfinityYUnreadByScale();
  return {
    stage: INFINITY_Y_UNREAD_STAGE,
    session: INFINITY_Y_SESSION,
    living: INFINITY_Y_LIVING,
    pinned,
    scaleLine,
    infinityY,
    scaleInY,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: scaleLine && infinityY && !scaleInY && sample.scaleInY === false && sample.y === sample.sharedTube && sample.scale === 15,
    note: 'infinity y is the shared tube minor * sin(phi) * sin(t * 0.5 + idx). scale = major * 1.5 divides x and z only. Paste not rewritten.',
  };
}

export function compileSessionStage501(source) {
  const hold = noteSessionInfinityYUnreadByScale(source);
  return {
    current: INFINITY_Y_UNREAD_STAGE,
    session: INFINITY_Y_SESSION,
    living: INFINITY_Y_LIVING,
    paste: '2026-10-08 18:06 CDT',
    hold,
    next: [
      { stage: 502, title: 'hold triangular tAngle unread by the theta * 5 weave' },
      { stage: 503, title: 'hold hamiltonian lift unread by hScale' },
      { stage: 504, title: 'hold session lerp alpha as the literal 0.05' },
    ],
  };
}
