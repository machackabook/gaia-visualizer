/** Stage 340 living cycler. Session switch unchanged. Walks only four chat geometries. */
export const CYCLE_STAGE = 340;
export const CHAT_KERNEL_CHAT_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];

export function cycleChatKernelGeometry(current, direction = 1) {
  const list = CHAT_KERNEL_CHAT_GEOMETRIES;
  const idx = list.indexOf(current);
  const start = idx >= 0 ? idx : list.indexOf('torus');
  const step = direction < 0 ? -1 : 1;
  return list[(start + step + list.length) % list.length];
}
