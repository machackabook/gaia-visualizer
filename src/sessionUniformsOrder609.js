/** Stage 609 — uniforms written uTime then uGravity only. Document only. Paste not rewritten. No secrets. */
export const UNIFORMS_ORDER_609_STAGE = 609;
export const UNIFORMS_ORDER_609_SESSION = 'beec41f1';
export const UNIFORMS_ORDER_609_LIVING = '7cd81012';

const PINNED = [
  '    this.material.uniforms.uTime.value = t;',
  '    this.material.uniforms.uGravity.value = state.gravityPull;',
  '',
  '    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

export function noteSessionUniformsOrder609(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const uTimeAt = text.search(/uTime\.value\s*=\s*t/);
  const uGravityAt = text.search(/uGravity\.value\s*=\s*state\.gravityPull/);
  const orderOk = uTimeAt >= 0 && uGravityAt > uTimeAt;
  const onlyThose = !/uWeave|uBlend|uPhi|uEnergy/.test(text);
  return {
    stage: UNIFORMS_ORDER_609_STAGE,
    session: UNIFORMS_ORDER_609_SESSION,
    living: UNIFORMS_ORDER_609_LIVING,
    pinned,
    uTimeAt,
    uGravityAt,
    orderOk,
    onlyThose,
    pasteRewritten: false,
    secrets: false,
    ok: orderOk && onlyThose,
    note: 'uniforms: uTime then uGravity only. Order held. From stage 609 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage609(source) {
  const hold = noteSessionUniformsOrder609(source);
  return {
    current: UNIFORMS_ORDER_609_STAGE,
    session: UNIFORMS_ORDER_609_SESSION,
    living: UNIFORMS_ORDER_609_LIVING,
    paste: '2026-10-12 15:06 CDT',
    hold,
    next: [
      { stage: 610, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 611, title: 'hold major = 10 + (idx * 2) before switch' },
      { stage: 612, title: 'hold minor = 3 + (toroidalWeave * 2) before switch' },
    ],
  };
}
