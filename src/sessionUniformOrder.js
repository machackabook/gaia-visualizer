/** Stage 469 — uniform writes stay uTime then uGravity. Document only. Do not rewrite the paste. No secrets. */
export const UNIFORM_ORDER_STAGE = 469;
export const UNIFORM_ORDER_SESSION_HASH = 'beec41f1';
export const UNIFORM_ORDER_LIVING_HASH = '7cd81012';

const TIME_LINE = 'this.material.uniforms.uTime.value = t;';
const GRAVITY_LINE = 'this.material.uniforms.uGravity.value = state.gravityPull;';

const PINNED = [TIME_LINE, GRAVITY_LINE].join('\n');

export function sampleUniformOrder(source) {
  const text = source == null ? PINNED : String(source);
  const timeAt = text.indexOf('uTime.value = t');
  const gravityAt = text.indexOf('uGravity.value = state.gravityPull');
  return {
    timeAt,
    gravityAt,
    timeThenGravity: timeAt >= 0 && gravityAt > timeAt,
    gravityReadsState: /uGravity\.value\s*=\s*state\.gravityPull/.test(text),
  };
}

export function noteSessionUniformOrder(source) {
  const pinned = source == null;
  const sample = sampleUniformOrder(source);
  const text = pinned ? PINNED : String(source);
  const bothPresent = text.includes('uTime') && text.includes('uGravity');
  return {
    stage: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION_HASH,
    living: UNIFORM_ORDER_LIVING_HASH,
    pinned,
    sample,
    bothPresent,
    pasteRewritten: false,
    secrets: false,
    ok: bothPresent && sample.timeThenGravity && sample.gravityReadsState,
    note: 'uniform writes stay uTime then uGravity. Gravity reads state.gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage469(source) {
  const hold = noteSessionUniformOrder(source);
  return {
    current: UNIFORM_ORDER_STAGE,
    session: UNIFORM_ORDER_SESSION_HASH,
    living: UNIFORM_ORDER_LIVING_HASH,
    paste: '2026-10-07 11:07 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 470, title: 'hold minor as 3 + toroidalWeave * 2, unread by hamiltonian' },
      { stage: 471, title: 'hold major as 10 + idx * 2, shared before the switch' },
      { stage: 472, title: 'hold infinity denom as 1 + sin(theta)^2, shared by x and z' },
    ],
  };
}
