/** Stage 407 — hold phi as an external weave. This paste does not advance phi inside update(t). Document only. Paste not rewritten. No secrets. */
export const PHI_EXTERNAL_STAGE = 407;
export const PHI_EXTERNAL_SESSION_HASH = 'beec41f1';
export const PHI_EXTERNAL_LIVING_HASH = '7cd81012';

const PINNED_UPDATE = [
  'update(t) {',
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
  'y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);',
  'x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);',
  '}',
].join('\n');

export function noteSessionPhiExternal(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_UPDATE : String(source);
  const readsPhi = /this\.phi/.test(text);
  const advancesPhi = /this\.phi\s*(\+=|-=|=\s*this\.phi)/.test(text);
  const thetaAdvances = /this\.theta\s*\+=/.test(text);
  return {
    stage: PHI_EXTERNAL_STAGE,
    session: PHI_EXTERNAL_SESSION_HASH,
    living: PHI_EXTERNAL_LIVING_HASH,
    pinned,
    formula: 'phi is read (weave); update(t) advances theta only',
    readsPhi,
    advancesPhi,
    thetaAdvances,
    pasteRewritten: false,
    secrets: false,
    ok: readsPhi && thetaAdvances && !advancesPhi,
    note: 'Stage 407 holds phi as an external weave. This paste does not advance phi inside update(t). Paste not rewritten.',
  };
}
