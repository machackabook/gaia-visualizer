/** Stage 686 — hold uniforms write order uTime then uGravity. Document only. Do not rewrite the paste. No secrets. */
export const UNIFORMS_ORDER_STAGE = 686;
export const UNIFORMS_ORDER_SESSION_HASH = 'beec41f1';
export const UNIFORMS_ORDER_LIVING_HASH = '7cd81012';

const PINNED_UNIFORMS = `this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;`;

export function noteSessionUniformsOrder686(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_UNIFORMS : String(source);
  const hasOrder = /this\.material\.uniforms\.uTime\.value\s*=\s*t\s*;[\s\S]*?this\.material\.uniforms\.uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  return {
    stage: UNIFORMS_ORDER_STAGE,
    session: UNIFORMS_ORDER_SESSION_HASH,
    living: UNIFORMS_ORDER_LIVING_HASH,
    pinned,
    order: 'uTime then uGravity',
    held: hasOrder,
    pasteRewritten: false,
    secrets: false,
    ok: hasOrder,
    note: 'Stage 686 holds the session material uniform writes in order uTime then uGravity as the first actions in update(t). Paste not rewritten.',
  };
}
