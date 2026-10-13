/** Stage 574 — hold phi read-only in shared y formulas. Document only. Paste not rewritten. No secrets. */
export const PHI_READ_ONLY_Y_STAGE = 574;
export const PHI_READ_ONLY_Y_SESSION = 'beec41f1';
export const PHI_READ_ONLY_Y_LIVING = '7cd81012';

const PINNED = `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`;

export function samplePhiReadOnlyY() {
  return {
    phiWrite: false,
    sharedY: true,
    usedInInfinity: true,
    usedInTorus: true,
  };
}

export function noteSessionPhiReadOnlyY(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const noWrite = !/this\.phi\s*\+\s*=/.test(text);
  const yForm = /y = minor \* Math\.sin\(this\.phi\) \* Math\.sin\(t \* 0\.5 \+ this\.idx\);/.test(text);
  const count = (text.match(/Math\.sin\(this\.phi\)/g) || []).length;
  const sample = samplePhiReadOnlyY();
  return {
    stage: PHI_READ_ONLY_Y_STAGE,
    session: PHI_READ_ONLY_Y_SESSION,
    living: PHI_READ_ONLY_Y_LIVING,
    pinned,
    noWrite,
    yForm,
    count,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: noWrite && yForm && count >= 2,
    note: 'phi is read-only in shared y formulas for infinity and torus. No phi += in session paste. Paste not rewritten.',
  };
}
