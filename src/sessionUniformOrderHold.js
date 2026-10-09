/** Stage 508 — material writes are uTime then uGravity only. Document only. Paste not rewritten. No secrets. */
export const UNIFORM_ORDER_STAGE = 508;
export const UNIFORM_ORDER_SESSION = 'beec41f1';
export const UNIFORM_ORDER_LIVING = '7cd81012';

const PINNED = [
  '    this.material.uniforms.uTime.value = t;',
  '    this.material.uniforms.uGravity.value = state.gravityPull;',
].join('\n');

export function sampleUniformOrderHold() {
  return {
    first: 'uTime',
    second: 'uGravity',
    onlyMaterialWrites: true,
  };
}

export function noteSessionUniformOrderHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const timeAt = text.indexOf('this.material.uniforms.uTime.value = t;');
  const gravityAt = text.indexOf('this.material.uniforms.uGravity.value = state.gravityPull;');
  const writes = text.match(/this\.material\.uniforms\.\w+\.value\s*=/g) || [];
  const ordered = timeAt >= 0 && gravityAt > timeAt;
  const only = writes.length === 2 && writes[0].includes('uTime') && writes[1].includes('uGravity');
  const sample = sampleUniformOrderHold();
  return {
    stage: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION,
    living: UNIFORM_ORDER_LIVING,
    pinned,
    timeAt,
    gravityAt,
    writeCount: writes.length,
    ordered,
    only,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: ordered && only && sample.first === 'uTime' && sample.second === 'uGravity',
    note: 'update(t) writes uTime then uGravity and no other material uniforms. Paste not rewritten.',
  };
}

export function compileSessionStage508(source) {
  const hold = noteSessionUniformOrderHold(source);
  return {
    current: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION,
    living: UNIFORM_ORDER_LIVING,
    paste: '2026-10-08 21:06 CDT',
    hold,
    next: [
      { stage: 509, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 510, title: 'hold triangular sector snap unread by the theta*5 weave' },
      { stage: 511, title: 'hold shared y tube identical on infinity and torus' },
    ],
  };
}
