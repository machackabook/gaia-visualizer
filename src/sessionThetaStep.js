/** Stage 550 — hold theta step = (0.01 + this.idx * 0.002) * state.gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_STEP_STAGE = 550;
export const THETA_STEP_SESSION_HASH = 'beec41f1';
export const THETA_STEP_LIVING_HASH = '7cd81012';
export const THETA_BASE = 0.01;
export const THETA_IDX = 0.002;

const PINNED = [
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

export function sampleThetaStep(idx = 0, gravityPull = 1) {
  const step = (THETA_BASE + idx * THETA_IDX) * gravityPull;
  return {
    idx,
    gravityPull,
    base: THETA_BASE,
    idxFactor: THETA_IDX,
    step,
    usesPull: true,
  };
}

export function noteSessionThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const step = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const sample = sampleThetaStep(5, 1.2);
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    pinned,
    step,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: step && sample.usesPull,
    note: 'theta step is (0.01 + this.idx * 0.002) * state.gravityPull. Multiplies the base+idx term by gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage550(source) {
  const hold = noteSessionThetaStep(source);
  return {
    current: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    paste: '2026-10-10 12:06 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 551, title: 'hold lerp alpha literal 0.05 and Vector3 alloc inside lerp' },
      { stage: 552, title: 'hold uniform write order uTime then uGravity' },
      { stage: 553, title: 'hold phi as read-only in session paste (no phi +=)' },
    ],
  };
}
