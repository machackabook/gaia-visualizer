/** Stage 1029 — infinity lemniscate denom shared by x/z only. Document only. Paste not rewritten. No secrets. */
export const INFINITY_DENOM_STAGE = 1029;
export const INFINITY_DENOM_SESSION_HASH = 'beec41f1';
export const INFINITY_DENOM_LIVING_HASH = '7cd81012';

export function noteSessionInfinityDenom(source) {
  const text = source == null ? '' : String(source);
  const hasDenom = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);/.test(text);
  const xUses = /x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const zUses = /z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const yFree = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(text);
  return {
    stage: INFINITY_DENOM_STAGE,
    session: INFINITY_DENOM_SESSION_HASH,
    living: INFINITY_DENOM_LIVING_HASH,
    hasDenom,
    xUses,
    zUses,
    yFree,
    pasteRewritten: false,
    secrets: false,
    ok: hasDenom && xUses && zUses && yFree,
    note: 'Stage 1029 holds infinity denom shared by x/z only; y unread by denom. Paste not rewritten.',
  };
}
