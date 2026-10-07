/** Stage 468 — theta step stays the product (0.01 + idx * 0.002) * gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_STEP_STAGE = 468;
export const THETA_STEP_SESSION_HASH = 'beec41f1';
export const THETA_STEP_LIVING_HASH = '7cd81012';

const STEP_LINE = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  STEP_LINE,
].join('\n');

export function sampleThetaStep(idx, gravityPull) {
  const step = (0.01 + idx * 0.002) * gravityPull;
  return { idx, gravityPull, step, product: true, base: 0.01, idxScale: 0.002 };
}

export function noteSessionThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const product = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const notAdded = !/this\.theta\s*\+=\s*0\.01\s*\+\s*this\.idx/.test(text) || product;
  const readsState = /state\.gravityPull/.test(text);
  const sample = sampleThetaStep(2, 1.5);
  const expected = (0.01 + 2 * 0.002) * 1.5;
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    pinned,
    product,
    readsState,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: product && readsState && notAdded && sample.step === expected && sample.product,
    note: 'theta step is the product (0.01 + idx * 0.002) * state.gravityPull. It is not an addend after the parentheses. Paste not rewritten.',
  };
}

export function compileSessionStage468(source) {
  const hold = noteSessionThetaStep(source);
  return {
    current: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    paste: '2026-10-07 10:08 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 469, title: 'hold uniform writes as uTime then uGravity, in that order' },
      { stage: 470, title: 'hold minor as 3 + toroidalWeave * 2, unread by hamiltonian' },
      { stage: 471, title: 'hold major as 10 + idx * 2, shared before the switch' },
    ],
  };
}
