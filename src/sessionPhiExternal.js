/** Stage 1001 — phi is external binding: referenced in infinity/torus y and tube, never assigned in paste. Document only. Do not rewrite the paste. No secrets. */
export const PHI_EXTERNAL_STAGE = 1001;
export const PHI_EXTERNAL_SESSION = 'beec41f1';
export const PHI_EXTERNAL_LIVING = '7cd81012';

const PINNED_REFS = `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);`;

export function noteSessionPhiExternalHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_REFS : String(source);
  const phiRefs = (text.match(/this\.phi/g) || []).length;
  const phiAssign = /this\.phi\s*=/.test(text) || /this\.phi\s*\+\=/.test(text);
  const infinityY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)/.test(text);
  const torusTube = /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(text);
  return {
    stage: PHI_EXTERNAL_STAGE,
    session: PHI_EXTERNAL_SESSION,
    living: PHI_EXTERNAL_LIVING,
    pinned,
    phiRefs,
    phiAssign,
    infinityY,
    torusTube,
    pasteRewritten: false,
    secrets: false,
    ok: phiRefs > 0 && !phiAssign && infinityY && torusTube,
    note: 'phi is external binding referenced in infinity y and torus tube/y, never assigned inside update(t) paste. Paste not rewritten.',
  };
}

export function compileSessionNextStages(source) {
  const hold = noteSessionPhiExternalHold(source);
  return {
    current: PHI_EXTERNAL_STAGE,
    session: PHI_EXTERNAL_SESSION,
    living: PHI_EXTERNAL_LIVING,
    paste: '2026-11-01 20:08 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 1002, title: 'hold session lerp new Vector3 allocation with literal alpha 0.05' },
      { stage: 1003, title: 'hold uniforms write order uTime then uGravity and sources' },
      { stage: 1004, title: 'hold full kernel as pinned session source; living path may optimize allocations without rewrite' },
    ],
  };
}
