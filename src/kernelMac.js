/** Stage 36 portable keyed MAC — matches The-Hive kernelFrame.signKernelMac. */
export const KERNEL_STAGE = 36;

export function hashKernelSource(src) {
  let h = 2166136261;
  const s = String(src || '');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ('00000000' + (h >>> 0).toString(16)).slice(-8);
}

export const KERNEL_SOURCE_HASH = 'beec41f1';

export function kernelMacBasis(frame) {
  return [
    frame?.stage ?? KERNEL_STAGE,
    frame?.sourceHash ?? KERNEL_SOURCE_HASH,
    frame?.count ?? 0,
    Array.isArray(frame?.theta) ? frame.theta[0] ?? 0 : 0,
    Array.isArray(frame?.phi) ? frame.phi[0] ?? 0 : 0,
  ].join('|');
}

export function signKernelMac(token, frame) {
  if (!token) return undefined;
  return hashKernelSource(`${token}:${kernelMacBasis(frame)}`);
}

export function attachKernelMac(token, frame) {
  if (!frame || !token) return frame;
  if (!frame.sourceHash) frame.sourceHash = KERNEL_SOURCE_HASH;
  if (frame.stage == null) frame.stage = KERNEL_STAGE;
  const hmac = signKernelMac(token, frame);
  if (hmac) frame.hmac = hmac;
  return frame;
}

export function verifyKernelMac(token, frame) {
  if (!token) return true;
  if (!frame) return false;
  const expected = signKernelMac(token, frame);
  return Boolean(expected && frame.hmac && expected === frame.hmac);
}
