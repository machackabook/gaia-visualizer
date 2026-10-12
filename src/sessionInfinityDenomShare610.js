/** Stage 610 — infinity denom is 1 + sin(theta)^2 shared by x and z only. Document only. Paste not rewritten. No secrets. */
export const INFINITY_DENOM_SHARE_610_STAGE = 610;
export const INFINITY_DENOM_SHARE_610_SESSION = 'beec41f1';
export const INFINITY_DENOM_SHARE_610_LIVING = '7cd81012';

const PINNED = [
  "        case 'infinity':",
  '            const scale = major * 1.5;',
  '            const denom = 1 + Math.pow(Math.sin(this.theta), 2);',
  '            x = (scale * Math.cos(this.theta)) / denom;',
  '            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;',
].join('\n');

export function noteSessionInfinityDenomShare610(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const denomDecl = /const\s+denom\s*=\s*1\s*\+\s*Math\.pow\(\s*Math\.sin\(\s*this\.theta\s*\)\s*,\s*2\s*\)/.test(text);
  const xUses = /x\s*=\s*\(\s*scale\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(text);
  const zUses = /z\s*=\s*\(\s*scale\s*\*\s*Math\.sin\(\s*this\.theta\s*\)\s*\*\s*Math\.cos\(\s*this\.theta\s*\)\s*\)\s*\/\s*denom/.test(text);
  const yNotUsing = !/y\s*=.*denom/.test(text);
  return {
    stage: INFINITY_DENOM_SHARE_610_STAGE,
    session: INFINITY_DENOM_SHARE_610_SESSION,
    living: INFINITY_DENOM_SHARE_610_LIVING,
    pinned,
    denomDecl,
    xUses,
    zUses,
    yNotUsing,
    pasteRewritten: false,
    secrets: false,
    ok: denomDecl && xUses && zUses && yNotUsing,
    note: 'Infinity denom 1 + sin(theta)^2 shared by x and z only. From stage 610 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage610(source) {
  const hold = noteSessionInfinityDenomShare610(source);
  return {
    current: INFINITY_DENOM_SHARE_610_STAGE,
    session: INFINITY_DENOM_SHARE_610_SESSION,
    living: INFINITY_DENOM_SHARE_610_LIVING,
    paste: '2026-10-12 15:07 CDT',
    hold,
    next: [
      { stage: 611, title: 'hold major = 10 + (idx * 2) before switch' },
      { stage: 612, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
      { stage: 613, title: 'hold switch(targetState.geometry) sole four-case dispatch' },
    ],
  };
}
