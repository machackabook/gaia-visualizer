/** Stage 514 — torus case falls through default as one shared body. Document only. Paste not rewritten. No secrets. */
export const TORUS_DEFAULT_BODY_STAGE = 514;
export const TORUS_DEFAULT_BODY_SESSION = 'beec41f1';
export const TORUS_DEFAULT_BODY_LIVING = '7cd81012';

const PINNED = [
  "case 'torus':",
  '        default:',
  '            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);',
  '            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  '            break;',
].join('\n');

export function sampleTorusDefaultBody() {
  return {
    labels: ['torus', 'default'],
    fifthGeometry: false,
    sharedBody: true,
    breakBetween: false,
  };
}

export function noteSessionTorusDefaultBody(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const torusAt = text.indexOf("case 'torus':");
  const defaultAt = torusAt < 0 ? -1 : text.indexOf('default:', torusAt);
  const breakAt = torusAt < 0 ? -1 : text.indexOf('break;', torusAt);
  const between = torusAt >= 0 && defaultAt > torusAt ? text.slice(torusAt, defaultAt) : '';
  const noBreakBetween = defaultAt > torusAt && (breakAt < 0 || breakAt > defaultAt) && !/\bbreak\b/.test(between);
  const shared = defaultAt >= 0 && text.slice(defaultAt, breakAt > defaultAt ? breakAt : defaultAt + 240).includes('major + minor * Math.cos(this.phi)');
  const sample = sampleTorusDefaultBody();
  return {
    stage: TORUS_DEFAULT_BODY_STAGE,
    session: TORUS_DEFAULT_BODY_SESSION,
    living: TORUS_DEFAULT_BODY_LIVING,
    pinned,
    noBreakBetween,
    shared,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: noBreakBetween && shared && sample.fifthGeometry === false && sample.sharedBody && sample.breakBetween === false,
    note: 'case torus falls through default. They share one body. default is not a fifth session geometry. Paste not rewritten.',
  };
}

export function compileSessionStage514(source) {
  const hold = noteSessionTorusDefaultBody(source);
  return {
    current: TORUS_DEFAULT_BODY_STAGE,
    session: TORUS_DEFAULT_BODY_SESSION,
    living: TORUS_DEFAULT_BODY_LIVING,
    paste: '2026-10-08 23:06 CDT',
    hold,
    next: [
      { stage: 515, title: 'hold lemniscate scale as major * 1.5 unread by minor' },
      { stage: 516, title: 'hold lerp alpha as the literal 0.05' },
      { stage: 517, title: 'hold theta step as the only angle write' },
    ],
  };
}
