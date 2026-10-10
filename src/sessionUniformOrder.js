/** Stage 552 — hold uniform write order: uTime.value = t then uGravity.value = state.gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const UNIFORM_ORDER_STAGE = 552;
export const UNIFORM_ORDER_SESSION_HASH = 'beec41f1';
export const UNIFORM_ORDER_LIVING_HASH = '7cd81012';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
].join('\n');

export function sampleUniformOrder() {
  return {
    first: 'uTime',
    second: 'uGravity',
    orderHeld: true,
  };
}

export function noteSessionUniformOrder(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const uTimeFirst = text.indexOf('uTime.value = t') >= 0 && text.indexOf('uTime.value = t') < text.indexOf('uGravity.value');
  const bothPresent = /uTime\.value\s*=\s*t\s*;/.test(text) && /uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  const sample = sampleUniformOrder();
  return {
    stage: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION_HASH,
    living: UNIFORM_ORDER_LIVING_HASH,
    pinned,
    uTimeFirst,
    bothPresent,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: bothPresent && uTimeFirst && sample.orderHeld,
    note: 'uniforms written in order uTime then uGravity. Paste not rewritten.',
  };
}

export function compileSessionStage552(source) {
  const hold = noteSessionUniformOrder(source);
  return {
    current: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION_HASH,
    living: UNIFORM_ORDER_LIVING_HASH,
    paste: '2026-10-10 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 553, title: 'hold phi as read-only in session paste (no phi +=)' },
      { stage: 554, title: 'hold major and minor computed before switch' },
      { stage: 555, title: 'hold lemniscate denom shared by x and z only' },
    ],
  };
}
