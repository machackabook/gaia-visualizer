/** Stage 503 — hamiltonian lift (Math.sin(t) * 2) stays unread by hScale. Document only. Paste not rewritten. No secrets. */
export const LIFT_UNREAD_STAGE = 503;
export const LIFT_UNREAD_SESSION = 'beec41f1';
export const LIFT_UNREAD_LIVING = '7cd81012';

const PINNED = [
  "        case 'hamiltonian':",
  '            const hScale = major;',
  '            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  '            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  '            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

export function sampleHamiltonianLiftUnread(theta = 1, t = 0, major = 10) {
  const hScale = major;
  const lift = Math.sin(t) * 2;
  return {
    theta,
    t,
    major,
    hScale,
    lift,
    hScaleUsesLift: false,
    y: hScale * Math.sin(theta * 3) + lift,
  };
}

export function noteSessionHamiltonianLiftUnread(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const hScaleLine = /const\s+hScale\s*=\s*major\s*;/.exec(text);
  const yLine = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(Math\.sin\(t\)\s*\*\s*2\)\s*;/.exec(text);
  const hScaleReadsLift = hScaleLine ? /Math\.sin\(t\)|\*\s*2/.test(hScaleLine[0]) : true;
  const sample = sampleHamiltonianLiftUnread();
  return {
    stage: LIFT_UNREAD_STAGE,
    session: LIFT_UNREAD_SESSION,
    living: LIFT_UNREAD_LIVING,
    pinned,
    hScaleLine: !!hScaleLine,
    yLine: !!yLine,
    hScaleReadsLift,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: !!hScaleLine && !!yLine && !hScaleReadsLift && sample.hScaleUsesLift === false && sample.hScale === 10 && sample.lift === 0,
    note: 'hScale is assigned from major only. The parenthesized (Math.sin(t) * 2) lift is added on y. Paste not rewritten.',
  };
}

export function compileSessionStage503(source) {
  const hold = noteSessionHamiltonianLiftUnread(source);
  return {
    current: LIFT_UNREAD_STAGE,
    session: LIFT_UNREAD_SESSION,
    living: LIFT_UNREAD_LIVING,
    paste: '2026-10-08 20:09 CDT',
    hold,
    next: [
      { stage: 504, title: 'hold session lerp alpha as the literal 0.05' },
      { stage: 505, title: 'hold major = 10 + idx * 2 assigned before the switch' },
      { stage: 506, title: 'hold minor = 3 + toroidalWeave * 2 beside major, before the switch' },
    ],
  };
}
