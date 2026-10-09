/** Stage 522 — major idx term is idx * 2, distinct from the theta 0.002 term. Document only. Paste not rewritten. No secrets. */
export const MAJOR_IDX_DISTINCT_STAGE = 522;
export const MAJOR_IDX_DISTINCT_SESSION = 'beec41f1';
export const MAJOR_IDX_DISTINCT_LIVING = '7cd81012';

const PINNED_MAJOR = 'let major = 10 + (this.idx * 2);';
const PINNED_THETA = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function sampleMajorIdxDistinct() {
  return { idx: 4, major: 18, thetaTerm: 0.008, distinct: true };
}

export function noteSessionMajorIdxDistinct(source) {
  const pinned = source == null;
  const text = pinned ? `${PINNED_MAJOR}\n${PINNED_THETA}` : String(source);
  const majorLine = (text.match(/let major\s*=[^;]+;/) || [''])[0];
  const thetaLine = (text.match(/this\.theta\s*\+=[^;]+;/) || [''])[0];
  const majorIdx2 = /this\.idx\s*\*\s*2/.test(majorLine);
  const thetaIdx0002 = /this\.idx\s*\*\s*0\.002/.test(thetaLine);
  const majorUsesThetaTerm = /0\.002/.test(majorLine);
  const sample = sampleMajorIdxDistinct();
  return {
    stage: MAJOR_IDX_DISTINCT_STAGE,
    session: MAJOR_IDX_DISTINCT_SESSION,
    living: MAJOR_IDX_DISTINCT_LIVING,
    pinned,
    majorIdx2,
    thetaIdx0002,
    majorUsesThetaTerm,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: majorIdx2 && thetaIdx0002 && !majorUsesThetaTerm && sample.distinct === true && sample.major === 18,
    note: 'major uses idx * 2. The theta step uses idx * 0.002. Those terms stay distinct. Paste not rewritten.',
  };
}

export function compileSessionStage522(source) {
  const hold = noteSessionMajorIdxDistinct(source);
  return {
    current: MAJOR_IDX_DISTINCT_STAGE,
    session: MAJOR_IDX_DISTINCT_SESSION,
    living: MAJOR_IDX_DISTINCT_LIVING,
    paste: '2026-10-09 13:06 CDT',
    hold,
    next: [
      { stage: 523, title: 'hold minor as 3 + toroidalWeave * 2, unread by gravityPull' },
      { stage: 524, title: 'hold infinity scale as major * 1.5, unread by the gravity copy' },
      { stage: 525, title: 'hold uTime as a direct copy of t, not a scaled clock' },
    ],
  };
}
