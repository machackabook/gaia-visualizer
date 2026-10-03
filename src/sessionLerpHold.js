/** Stage 389 — hold lerp alpha 0.05. Document only. Do not rewrite the paste. No secrets. */
export const LERP_HOLD_STAGE = 389;
export const LERP_HOLD_SESSION_HASH = 'beec41f1';
export const LERP_HOLD_LIVING_HASH = '7cd81012';
export const SESSION_LERP_ALPHA = 0.05;

const PINNED_TAIL = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sessionLerpStep(from, to, alpha = SESSION_LERP_ALPHA) {
  const a = Number.isFinite(alpha) ? alpha : SESSION_LERP_ALPHA;
  const fx = Number.isFinite(from && from.x) ? from.x : 0;
  const fy = Number.isFinite(from && from.y) ? from.y : 0;
  const fz = Number.isFinite(from && from.z) ? from.z : 0;
  const tx = Number.isFinite(to && to.x) ? to.x : 0;
  const ty = Number.isFinite(to && to.y) ? to.y : 0;
  const tz = Number.isFinite(to && to.z) ? to.z : 0;
  return {
    x: fx + (tx - fx) * a,
    y: fy + (ty - fy) * a,
    z: fz + (tz - fz) * a,
    alpha: a,
  };
}

export function noteSessionLerpHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_TAIL : String(source);
  const hasLerp = /this\.mesh\.position\.lerp\(\s*new THREE\.Vector3\(\s*x\s*,\s*y\s*,\s*z\s*\)\s*,\s*0\.05\s*\)/.test(text);
  const origin = sessionLerpStep({ x: 0, y: 0, z: 0 }, { x: 10, y: 0, z: 0 });
  const held = sessionLerpStep({ x: 0, y: 4, z: -2 }, { x: 0, y: 4, z: -2 });
  return {
    stage: LERP_HOLD_STAGE,
    session: LERP_HOLD_SESSION_HASH,
    living: LERP_HOLD_LIVING_HASH,
    pinned,
    alpha: SESSION_LERP_ALPHA,
    hasSessionLerp: hasLerp,
    originStep: origin,
    stationary: held,
    pasteRewritten: false,
    secrets: false,
    ok: hasLerp && Math.abs(origin.x - 0.5) < 1e-9 && Math.abs(held.y - 4) < 1e-9 && origin.alpha === 0.05,
    note: 'Stage 389 holds the chat lerp alpha at 0.05. It is not scaled by gravityPull. Paste not rewritten.',
  };
}
