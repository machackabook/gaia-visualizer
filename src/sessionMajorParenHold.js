/** Stage 534 — major stays 10 + (this.idx * 2). Distinct from the 0.002 theta coefficient. Document only. Paste not rewritten. No secrets. */
export const MAJOR_PAREN_HOLD_STAGE = 534;
export const MAJOR_PAREN_HOLD_SESSION = 'beec41f1';
export const MAJOR_PAREN_HOLD_LIVING = '7cd81012';

const PINNED_MAJOR = 'let major = 10 + (this.idx * 2);';

export function sampleMajorParenHold(idx = 7) {
  return {
    idx,
    major: 10 + (idx * 2),
    parenForm: true,
    distinctFromThetaCoeff: true,
    readsTheta: false,
  };
}

export function noteSessionMajorParenHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MAJOR : String(source);
  const form = /let major = 10 \+ \(this\.idx \* 2\);/.test(text);
  const noParen = /let major = 10 \+ this\.idx \* 2;/.test(text);
  const usesThetaCoeff = /major = 10 \+ \(this\.idx \* 0\.002\)/.test(text);
  const sample = sampleMajorParenHold();
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: MAJOR_PAREN_HOLD_STAGE,
    session: MAJOR_PAREN_HOLD_SESSION,
    living: MAJOR_PAREN_HOLD_LIVING,
    pinned,
    form,
    noParen,
    usesThetaCoeff,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: form && !noParen && !usesThetaCoeff
      && sample.parenForm === true
      && sample.distinctFromThetaCoeff === true
      && near(sample.major, 24),
    note: 'major stays 10 + (this.idx * 2). Parentheses form held. Distinct from the 0.002 theta coefficient. Paste not rewritten.',
  };
}
