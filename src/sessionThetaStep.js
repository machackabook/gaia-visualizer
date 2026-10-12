/** Stage 584 — session theta step (0.01 + idx * 0.002) * gravityPull. Document only. Do not rewrite the paste. No secrets. */
export const THETA_STEP_STAGE = 584;
export const THETA_STEP_SESSION_HASH = 'beec41f1';
export const THETA_STEP_LIVING_HASH = '7cd81012';
export const THETA_BASE = 0.01;
export const THETA_IDX = 0.002;

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    let major = 10 + (this.idx * 2);
    let minor = 3 + (state.toroidalWeave * 2);
    switch(targetState.geometry) { default: break; }
    this.mesh.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);
}`;

export function sampleThetaStep(idx, gravityPull) {
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  const step = (THETA_BASE + idx * THETA_IDX) * pull;
  return { idx, pull, base: THETA_BASE, idxCoeff: THETA_IDX, step };
}

export function noteSessionThetaStep(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const stepAssign = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const sample = sampleThetaStep(0, 1);
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: THETA_STEP_STAGE,
    session: THETA_STEP_SESSION_HASH,
    living: THETA_STEP_LIVING_HASH,
    pinned,
    formula: 'theta += (0.01 + idx * 0.002) * gravityPull',
    stepAssign,
    sample,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: stepAssign && invented.length === 0 && sample.step === 0.01,
    note: 'Session theta step is (0.01 + idx * 0.002) * gravityPull. Applied after uniforms, before geometry switch. Paste not rewritten.',
  };
}
