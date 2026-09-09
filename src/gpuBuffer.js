/**
 * Stage-10 / 11 GPU attribute buffer.
 * CPU evaluateGeometry remains the reference mapping.
 * Positions + theta/phi live in packed Float32Arrays that can feed
 * InstancedMesh matrices or the stage-11 GLSL kernel in evaluateKernel.glsl.js.
 */
export function createGpuBuffers(count) {
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const theta = new Float32Array(count);
  const phi = new Float32Array(count);
  scales.fill(1);
  return { count, positions, scales, theta, phi };
}

export function writeNode(buffers, idx, x, y, z, scale, th, ph) {
  const o = idx * 3;
  buffers.positions[o] = x;
  buffers.positions[o + 1] = y;
  buffers.positions[o + 2] = z;
  buffers.scales[idx] = scale;
  if (th != null) buffers.theta[idx] = th;
  if (ph != null) buffers.phi[idx] = ph;
}

export function snapshotPositions(buffers) {
  const nodes = [];
  for (let i = 0; i < buffers.count; i++) {
    const o = i * 3;
    nodes.push({
      idx: i,
      x: +buffers.positions[o].toFixed(3),
      y: +buffers.positions[o + 1].toFixed(3),
      z: +buffers.positions[o + 2].toFixed(3),
    });
  }
  return nodes;
}
