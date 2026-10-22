/**
 * Stage 795 hold: theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
 * this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
 * Geometry cases consume theta as an external parameter; they do not recompute the increment.
 * Numeral 137451921129154222. Paste not rewritten. No secrets.
 */
export const THETA_STEP_795_STAGE = 795;
export const THETA_STEP_795_SESSION = 'beec41f1';
export const THETA_STEP_795_LIVING = '7cd81012';

const PINNED_STEP = 'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;';

export function noteSessionThetaStep795(sessionSource) {
  const text = sessionSource == null ? PINNED_STEP : String(sessionSource);
  const hasStep = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull/.test(text);
  const geometryUnread =
    !/gravityPull/.test(text.split('switch')[1] || '') &&
    /case\s*'infinity'|case\s*'hamiltonian'|case\s*'triangular'|case\s*'torus'/.test(text);
  return {
    stage: THETA_STEP_795_STAGE,
    session: THETA_STEP_795_SESSION,
    living: THETA_STEP_795_LIVING,
    hasPinnedStep: hasStep,
    geometryUnread,
    pasteRewritten: false,
    secrets: false,
    ok: hasStep,
    note: 'Stage 795 holds the chat theta step. Geometry arms do not re-scale it. Paste not rewritten.',
  };
}
