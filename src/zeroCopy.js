/**
 * Stage 22 — keep the WebGL TF vPos buffer object and skip getBufferSubData
 * when Three can consume GPU-resident instanceOffset.
 *
 * True bind (same WebGLBuffer as TF write target) still depends on the
 * renderer not reallocating the attribute. Until then, prefer ?zerocopy=1
 * which skips the CPU Float32 copy on the skipCpuPath.
 */
export const STAGE = 22;

export function shouldZeroCopy(params, skipCpuPath) {
  if (params.get('zerocopy') === '0') return false;
  if (params.get('zerocopy') === '1') return true;
  return Boolean(skipCpuPath);
}

/**
 * Record the native TF position buffer on a Three BufferAttribute so later
 * frames can skip CPU readback. Does not mutate Three internals.
 */
export function markZeroCopyAttribute(attribute, nativeBuffer) {
  if (!attribute) return attribute;
  attribute.userData = attribute.userData || {};
  attribute.userData.gaiaTfPos = nativeBuffer;
  attribute.userData.gaiaZeroCopy = true;
  return attribute;
}
