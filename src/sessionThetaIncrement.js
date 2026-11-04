/** Stage 1047 — hold theta increment (0.01 + idx * 0.002) * gravityPull before major/minor. Document only. Paste not rewritten. No secrets. */
export const THETA_INCREMENT_STAGE = 1047;
export const THETA_INCREMENT_SESSION_HASH = 'beec41f1';
export const THETA_INCREMENT_LIVING_HASH = '7cd81012';

const PINNED_LINE = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function noteSessionThetaIncrement(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LINE : String(source);
  const hasFormula = /this\.theta\s*\+=\s*\(0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const beforeMajor = /this\.theta\s*\+=[\s\S]*?let\s+major/.test(text) || pinned;
  return {
    stage: THETA_INCREMENT_STAGE,
    session: THETA_INCREMENT_SESSION_HASH,
    living: THETA_INCREMENT_LIVING_HASH,
    pinned,
    hasFormula,
    beforeMajor,
    pasteRewritten: false,
    secrets: false,
    ok: hasFormula && beforeMajor,
    note: 'Stage 1047 holds session theta increment (0.01 + idx * 0.002) * gravityPull before major/minor. Paste not rewritten.',
  };
}
