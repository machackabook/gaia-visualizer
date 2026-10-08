/** Stage 496 — session theta step is (0.01 + idx * 0.002) * gravityPull. Phi is not incremented. Document only. No secrets. */
export const THETA_STEP_STAGE = 496;
export const THETA_STEP_SESSION = 'beec41f1';
export const THETA_STEP_LIVING = '7cd81012';

const STEP = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  STEP,
  'let major = 10 + (this.idx * 2);',
  'let minor = 3 + (state.toroidalWeave * 2);',
].join('\n');

export function sampleThetaStep(idx, gravityPull) {
  const base = 0.01 + idx * 0.002;
  const delta = base * gravityPull;
  return { idx, gravityPull, base, delta, phiDelta: 0 };
}

export function noteSessionThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const stepLine = (text.match(/this\.theta\s*\+=[^;]+;/) || [''])[0];
  const hasStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(stepLine);
  const phiIncrement = /this\.phi\s*\+=/.test(text);
  const onlyThetaAdvance = hasStep && !phiIncrement;
  const usesGravity = /state\.gravityPull/.test(stepLine);
  const literalCoeffs = /0\.01/.test(stepLine) && /0\.002/.test(stepLine);
  const sample = sampleThetaStep(4, 1.4);
  const sampleOk = Math.abs(sample.base - 0.018) < 1e-12 && Math.abs(sample.delta - 0.0252) < 1e-12 && sample.phiDelta === 0;
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION,
    living: THETA_STEP_LIVING,
    pinned,
    hasStep,
    phiIncrement,
    onlyThetaAdvance,
    usesGravity,
    literalCoeffs,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: hasStep && onlyThetaAdvance && usesGravity && literalCoeffs && sampleOk,
    note: 'session update(t) advances theta with (0.01 + idx * 0.002) * gravityPull and does not increment phi. Paste not rewritten.',
  };
}

export function compileSessionStage496(source) {
  const hold = noteSessionThetaStep(source);
  return {
    current: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION,
    living: THETA_STEP_LIVING,
    paste: '2026-10-08 12:06 CDT',
    hold,
    next: [
      { stage: 497, title: 'hold lerp alpha as the literal 0.05' },
      { stage: 498, title: 'hold lemniscate scale as major * 1.5, unread by minor' },
      { stage: 499, title: 'hold default as sharing the torus tube, not a fifth session case' },
    ],
  };
}
