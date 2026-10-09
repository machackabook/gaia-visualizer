/** Stage 511 — infinity y and torus y are the same tube and do not read tube radius. Document only. Paste not rewritten. No secrets. */
export const SHARED_TUBE_STAGE = 511;
export const SHARED_TUBE_SESSION = 'beec41f1';
export const SHARED_TUBE_LIVING = '7cd81012';

const TUBE = 'minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)';

const PINNED = [
  "case 'infinity':",
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            break;',
  "case 'torus':",
  '        default:',
  '            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            break;',
].join('\n');

export function sampleSharedTube() {
  return {
    tube: TUBE,
    readsTubeRadius: false,
    infinityMatchesTorus: true,
  };
}

function armY(text, marker) {
  const start = text.indexOf(marker);
  if (start < 0) return '';
  const end = text.indexOf('break;', start);
  const arm = end > start ? text.slice(start, end) : '';
  return (arm.match(/y\s*=[^;]+;/) || [''])[0];
}

export function noteSessionSharedTubeHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const infinityY = armY(text, "case 'infinity'");
  const torusY = armY(text, "case 'torus'");
  const same = infinityY.length > 0 && infinityY === torusY && infinityY.includes(TUBE);
  const unreadRadius = !/major \+ minor/.test(infinityY) && !/Math\.cos\(this\.phi\)/.test(infinityY);
  const torusHasRadius = /x\s*=\s*\(major \+ minor \* Math\.cos\(this\.phi\)\)/.test(text);
  const sample = sampleSharedTube();
  return {
    stage: SHARED_TUBE_STAGE,
    session: SHARED_TUBE_SESSION,
    living: SHARED_TUBE_LIVING,
    pinned,
    infinityY,
    torusY,
    same,
    unreadRadius,
    torusHasRadius,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: same && unreadRadius && torusHasRadius && sample.infinityMatchesTorus && sample.readsTubeRadius === false,
    note: 'Infinity y and torus y are the shared tube minor * sin(phi) * sin(t * 0.5 + idx). That y does not read the torus tube radius. Paste not rewritten.',
  };
}

export function compileSessionStage511(source) {
  const hold = noteSessionSharedTubeHold(source);
  return {
    current: SHARED_TUBE_STAGE,
    session: SHARED_TUBE_SESSION,
    living: SHARED_TUBE_LIVING,
    paste: '2026-10-08 22:06 CDT',
    hold,
    next: [
      { stage: 512, title: 'hold hamiltonian y unread by minor and phi' },
      { stage: 513, title: 'hold torus tube radius unread by y' },
      { stage: 514, title: 'hold torus case then default as one shared body' },
    ],
  };
}
