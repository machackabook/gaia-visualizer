/** Stage 493 — infinity denom 1 + sin(theta)^2 is shared by x and z only. Document only. No secrets. */
export const INFINITY_DENOM_STAGE = 493;
export const INFINITY_DENOM_SESSION = 'beec41f1';
export const INFINITY_DENOM_LIVING = '7cd81012';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleInfinityDenom(theta) {
  const denom = 1 + Math.sin(theta) ** 2;
  return { theta, denom, yReadsDenom: false };
}

export function noteSessionInfinityDenom(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const start = text.indexOf("case 'infinity'");
  const end = start >= 0 ? text.indexOf('break;', start) : -1;
  const arm = start >= 0 && end > start ? text.slice(start, end) : '';
  const denomLine = (arm.match(/const\s+denom\s*=[^;]+;/) || [''])[0];
  const denomShape = /1\s*\+\s*Math\.pow\(\s*Math\.sin\(this\.theta\)\s*,\s*2\s*\)/.test(denomLine);
  const xUses = /x\s*=\s*\(scale \* Math\.cos\(this\.theta\)\)\s*\/\s*denom/.test(arm);
  const zUses = /z\s*=\s*\(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\)\s*\/\s*denom/.test(arm);
  const yLine = (arm.match(/y\s*=[^;]+;/) || [''])[0];
  const yUnread = yLine.length > 0 && !/denom/.test(yLine);
  const idle = sampleInfinityDenom(0);
  const peak = sampleInfinityDenom(Math.PI / 2);
  const sampleOk = idle.denom === 1 && Math.abs(peak.denom - 2) < 1e-12;
  return {
    stage: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION,
    living: INFINITY_DENOM_LIVING,
    pinned,
    denomShape,
    xUses,
    zUses,
    yUnread,
    idle,
    peak,
    pasteRewritten: false,
    secrets: false,
    ok: denomShape && xUses && zUses && yUnread && sampleOk,
    note: 'Lemniscate denom is 1 + sin(theta)^2 and divides x and z only. Infinity y does not read denom. Paste not rewritten.',
  };
}

export function compileSessionStage493(source) {
  const hold = noteSessionInfinityDenom(source);
  return {
    current: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION,
    living: INFINITY_DENOM_LIVING,
    paste: '2026-10-08 10:07 CDT',
    hold,
    next: [
      { stage: 494, title: 'hold triangular sector snap unread by the theta*5 weave' },
      { stage: 495, title: 'hold shared y tube identical on infinity and torus, unread by tube radius' },
      { stage: 496, title: 'hold theta step as (0.01 + idx * 0.002) * gravityPull' },
    ],
  };
}
