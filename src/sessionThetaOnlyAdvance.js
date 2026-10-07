/** Stage 481 — session theta step is the only angle advance. Phi is not incremented. Document only. Do not rewrite the paste. No secrets. */
export const THETA_ONLY_STAGE = 481;
export const THETA_ONLY_SESSION_HASH = 'beec41f1';
export const THETA_ONLY_LIVING_HASH = '7cd81012';

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

export function sampleThetaStep(idx, gravityPull) {
  const step = (0.01 + idx * 0.002) * gravityPull;
  return { idx, gravityPull, step, phiIncremented: false };
}

export function noteSessionThetaOnlyAdvance(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const theta = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const phiStill = !/this\.phi\s*\+=/.test(text);
  const base = sampleThetaStep(0, 1);
  const lane = sampleThetaStep(2, 2);
  return {
    stage: THETA_ONLY_STAGE,
    session: THETA_ONLY_SESSION_HASH,
    living: THETA_ONLY_LIVING_HASH,
    pinned,
    theta,
    phiStill,
    base,
    lane,
    pasteRewritten: false,
    secrets: false,
    ok: theta && phiStill && Math.abs(base.step - 0.01) < 1e-12 && Math.abs(lane.step - 0.028) < 1e-12,
    note: 'theta advances by (0.01 + idx * 0.002) * gravityPull. Phi is read by the tube and is not incremented in update(t). Paste not rewritten.',
  };
}

export function compileSessionStage481(source) {
  const hold = noteSessionThetaOnlyAdvance(source);
  return {
    current: THETA_ONLY_STAGE,
    session: THETA_ONLY_SESSION_HASH,
    living: THETA_ONLY_LIVING_HASH,
    paste: '2026-10-07 18:06 CDT',
    hold,
    next: [
      { stage: 482, title: 'hold lerp alpha 0.05 as the only blend into the geometric target' },
      { stage: 483, title: 'hold major = 10 + idx * 2 and minor = 3 + toroidalWeave * 2 as the shared radii' },
      { stage: 484, title: 'hold uniforms uTime and uGravity as the only material writes in update(t)' },
    ],
  };
}
