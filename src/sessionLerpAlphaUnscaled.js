/** Stage 427 — session lerp alpha stays 0.05 and does not scale with gravityPull. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_STAGE = 427;
export const LERP_ALPHA_SESSION_HASH = 'beec41f1';
export const LERP_ALPHA_LIVING_HASH = '7cd81012';
export const SESSION_LERP_ALPHA = 0.05;

const PINNED_LERP = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sessionLerpAlpha(gravityPull) {
  const pull = Number.isFinite(gravityPull) ? gravityPull : 1;
  return {
    alpha: SESSION_LERP_ALPHA,
    gravityPull: pull,
    alphaUsesGravityPull: false,
  };
}

export function noteSessionLerpAlphaUnscaled(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_LERP : String(source);
  const lerpLine = /this\.mesh\.position\.lerp\(new THREE\.Vector3\(x, y, z\), 0\.05\);/.test(text);
  const alphaScaled = /lerp\([^\n]*gravityPull/.test(text) || /lerp\([^\n]*\*\s*0\.05/.test(text);
  const idle = sessionLerpAlpha(0);
  const unit = sessionLerpAlpha(1);
  const doubled = sessionLerpAlpha(2);
  const near = (a, b) => Math.abs(a - b) < 1e-12;
  return {
    stage: LERP_ALPHA_STAGE,
    session: LERP_ALPHA_SESSION_HASH,
    living: LERP_ALPHA_LIVING_HASH,
    pinned,
    formula: 'lerp(new THREE.Vector3(x, y, z), 0.05); alpha does not take gravityPull',
    lerpLine,
    alphaScaled,
    idle,
    unit,
    doubled,
    pasteRewritten: false,
    secrets: false,
    ok: lerpLine && !alphaScaled
      && near(idle.alpha, 0.05) && idle.alphaUsesGravityPull === false
      && near(unit.alpha, 0.05) && near(doubled.alpha, 0.05)
      && near(idle.alpha, unit.alpha) && near(unit.alpha, doubled.alpha),
    note: 'Stage 427 holds the session lerp alpha at 0.05. gravityPull still scales the theta step and is written to uGravity. It does not scale the lerp alpha. Paste not rewritten.',
  };
}
