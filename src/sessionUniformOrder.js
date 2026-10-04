/** Stage 408 — hold uniform writes (uTime, uGravity) before the theta step. Document only. Paste not rewritten. No secrets. */
export const UNIFORM_ORDER_STAGE = 408;
export const UNIFORM_ORDER_SESSION_HASH = 'beec41f1';
export const UNIFORM_ORDER_LIVING_HASH = '7cd81012';

const PINNED_HEAD = [
  'update(t) {',
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

export function noteSessionUniformOrder(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_HEAD : String(source);
  const uTime = text.indexOf('this.material.uniforms.uTime.value = t;');
  const uGravity = text.indexOf('this.material.uniforms.uGravity.value = state.gravityPull;');
  const theta = text.indexOf('this.theta +=');
  const order = uTime >= 0 && uGravity > uTime && theta > uGravity;
  return {
    stage: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION_HASH,
    living: UNIFORM_ORDER_LIVING_HASH,
    pinned,
    formula: 'uTime then uGravity then theta step',
    uTime,
    uGravity,
    theta,
    order,
    pasteRewritten: false,
    secrets: false,
    ok: order,
    note: 'Stage 408 holds uniform writes before the theta step. Gravity used by the step is the value just written. Paste not rewritten.',
  };
}
