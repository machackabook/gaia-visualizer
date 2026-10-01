/** Stage 357 — honor session lerp(0.05) without allocating THREE.Vector3 each frame. */
export const SESSION_LERP = 0.05;

export function reuseSessionLerpTarget(target, x, y, z, alpha = SESSION_LERP, scratch) {
  if (!target) return target;
  const dest = scratch || { x: 0, y: 0, z: 0 };
  dest.x = Number.isFinite(x) ? x : 0;
  dest.y = Number.isFinite(y) ? y : 0;
  dest.z = Number.isFinite(z) ? z : 0;
  const a = Number.isFinite(alpha) ? alpha : SESSION_LERP;
  if (typeof target.lerp === 'function') target.lerp(dest, a);
  else {
    target.x += (dest.x - target.x) * a;
    target.y += (dest.y - target.y) * a;
    target.z += (dest.z - target.z) * a;
  }
  return target;
}
