/** Stage 492 — uTime then uGravity are the only material writes in update(t). Document only. No secrets. */
export const MATERIAL_WRITES_STAGE = 492;
export const MATERIAL_WRITES_SESSION = 'beec41f1';
export const MATERIAL_WRITES_LIVING = '7cd81012';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
].join('\n');

export function sampleMaterialWrites(t, gravityPull) {
  return {
    uTime: t,
    uGravity: gravityPull,
    order: ['uTime', 'uGravity'],
    otherWrites: 0,
  };
}

export function noteSessionMaterialWrites(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const head = text.split('this.theta')[0];
  const writes = head.match(/this\.material\.uniforms\.\w+\.value\s*=/g) || [];
  const timeFirst = /^\s*this\.material\.uniforms\.uTime\.value\s*=\s*t\s*;/m.test(head);
  const gravitySecond = /this\.material\.uniforms\.uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(head);
  const onlyTwo = writes.length === 2 && writes[0].includes('uTime') && writes[1].includes('uGravity');
  const sample = sampleMaterialWrites(1.25, 1.4);
  const sampleOk = sample.uTime === 1.25 && sample.uGravity === 1.4 && sample.otherWrites === 0;
  return {
    stage: MATERIAL_WRITES_STAGE,
    session: MATERIAL_WRITES_SESSION,
    living: MATERIAL_WRITES_LIVING,
    pinned,
    timeFirst,
    gravitySecond,
    onlyTwo,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: timeFirst && gravitySecond && onlyTwo && sampleOk,
    note: 'update(t) writes uTime then uGravity and no other material uniform. Paste not rewritten.',
  };
}

export function compileSessionStage492(source) {
  const hold = noteSessionMaterialWrites(source);
  return {
    current: MATERIAL_WRITES_STAGE,
    session: MATERIAL_WRITES_SESSION,
    living: MATERIAL_WRITES_LIVING,
    paste: '2026-10-08 10:07 CDT',
    hold,
    next: [
      { stage: 493, title: 'hold infinity denom 1 + sin(theta)^2 shared by x and z only' },
      { stage: 494, title: 'hold triangular sector snap unread by the theta*5 weave' },
      { stage: 495, title: 'hold shared y tube identical on infinity and torus, unread by tube radius' },
    ],
  };
}
