/** Stage 573 — hold infinity lemniscate denom shared by x and z. Document only. Paste not rewritten. No secrets. */
export const INFINITY_DENOM_SHARED_STAGE = 573;
export const INFINITY_DENOM_SHARED_SESSION = 'beec41f1';
export const INFINITY_DENOM_SHARED_LIVING = '7cd81012';

const PINNED = `const denom = 1 + Math.pow(Math.sin(this.theta), 2);
            x = (scale * Math.cos(this.theta)) / denom;
            z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;`;

export function sampleInfinityDenomShared() {
  return {
    sharedByXZ: true,
    yUsesDenom: false,
    form: '1 + sin(theta)^2',
  };
}

export function noteSessionInfinityDenomShared(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const denom = /const denom = 1 \+ Math\.pow\(Math\.sin\(this\.theta\), 2\);/.test(text);
  const xDiv = /x = \(scale \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const zDiv = /z = \(scale \* Math\.sin\(this\.theta\) \* Math\.cos\(this\.theta\)\) \/ denom;/.test(text);
  const yNo = !/y = .*\/ denom/.test(text);
  const sample = sampleInfinityDenomShared();
  return {
    stage: INFINITY_DENOM_SHARED_STAGE,
    session: INFINITY_DENOM_SHARED_SESSION,
    living: INFINITY_DENOM_SHARED_LIVING,
    pinned,
    denom,
    xDiv,
    zDiv,
    yNo,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: denom && xDiv && zDiv && yNo,
    note: 'infinity lemniscate denom is shared by x and z. y does not use denom. Paste not rewritten.',
  };
}
