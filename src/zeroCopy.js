/**
 * Stage 23 — bind Three instanceOffset to the same WebGLBuffer the
 * transform-feedback kernel writes (ping/pong vPos). No dummy CPU array
 * on the visual path. Rebind every frame after tf.step() because read.pos swaps.
 *
 * Stage 22 marked the buffer on userData and skipped getBufferSubData.
 */
export const STAGE = 23;

export function shouldZeroCopy(params, skipCpuPath) {
  if (params.get('zerocopy') === '0') return false;
  if (params.get('zerocopy') === '1') return true;
  return Boolean(skipCpuPath);
}

export function markZeroCopyAttribute(attribute, nativeBuffer) {
  if (!attribute) return attribute;
  attribute.userData = attribute.userData || {};
  attribute.userData.gaiaTfPos = nativeBuffer;
  attribute.userData.gaiaZeroCopy = true;
  return attribute;
}

const ARRAY_BUFFER = 0x8892;

/**
 * Point Three's uploaded instanceOffset attribute at the TF write target.
 * Safe to call every frame; ping-pong requires the pointer to follow read.pos.
 */
export function bindTfPosAttribute(renderer, attribute, nativeBuffer) {
  if (!renderer || !attribute || !nativeBuffer) return false;
  markZeroCopyAttribute(attribute, nativeBuffer);
  const props = renderer.properties.get(attribute);
  if (!props.__webglBuffer && typeof renderer.attributes?.update === 'function') {
    attribute.needsUpdate = true;
    try {
      renderer.attributes.update(attribute, ARRAY_BUFFER);
    } catch (_err) {
      /* first-frame seed may fail before program compile; retry next frame */
    }
  }
  const slot = renderer.properties.get(attribute);
  if (!slot) return false;
  slot.__webglBuffer = nativeBuffer;
  if (typeof attribute.version === 'number') slot.version = attribute.version;
  attribute.needsUpdate = false;
  attribute.userData.gaiaBoundTf = true;
  return true;
}
