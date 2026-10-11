/** Stage 580 — lemniscate denom 1 + sin(theta)^2 is shared by x and z only. Document only. No secrets. */
export const INFINITY_DENOM_SHARE_STAGE = 580;
export const INFINITY_DENOM_SHARE_SESSION = 'beec41f1';
export const INFINITY_DENOM_SHARE_LIVING = '7cd81012';

const PINNED = [
  "case 'infinity':",
  'const scale = major * 1.5;',
  'const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  'x = (scale * Math.cos(this.theta)) / denom;',
  'z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'break;',
].join('\n');

export function sampleInfinityDenomShare(theta) {
  const denom = 1 + Math.sin(theta) ** 2;
  return { theta, denom, sharedByXZ: true, yReadsDenom: false };
}

export function noteSessionInfinityDenomShare(source) {
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
  const idle = sampleInfinityDenomShare(0);
  const peak = sampleInfinityDenomShare(Math.PI / 2);
  const sampleOk = idle.denom === 1 && Math.abs(peak.denom - 2) < 1e-12;
  return {
    stage: INFINITY_DENOM_SHARE_STAGE,
    session: INFINITY_DENOM_SHARE_SESSION,
    living: INFINITY_DENOM_SHARE_LIVING,
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

export function compileSessionStage580(source) {
  const hold = noteSessionInfinityDenomShare(source);
  return {
    current: INFINITY_DENOM_SHARE_STAGE,
    session: INFINITY_DENOM_SHARE_SESSION,
    living: INFINITY_DENOM_SHARE_LIVING,
    paste: '2026-10-11 15:12 CDT',
    hold,
    next: [
      { stage: 581, title: 'hold final lerp session allocates Vector3 alpha 0.05' },
      { stage: 582, title: 'hold major = 10 + (idx * 2) before switch' },
      { stage: 583, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
    ],
  };
}
