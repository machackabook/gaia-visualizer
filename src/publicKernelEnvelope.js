/** Stage 358 — public signed kernel envelope. Token never enters the object. */
export const PUBLIC_ENVELOPE_STAGE = 358;
export const PUBLIC_ENVELOPE_SESSION_HASH = 'beec41f1';
export const PUBLIC_ENVELOPE_LIVING_HASH = '7cd81012';
export const PUBLIC_ENVELOPE_GEOMETRIES = ['infinity', 'hamiltonian', 'triangular', 'torus'];
export const PUBLIC_ENVELOPE_LERP = 0.05;
export const PUBLIC_ENVELOPE_PHI_WEAVE = 0.007;

const FORBIDDEN = ['token', 'secret', 'password', 'authorization', 'cookie', 'privatekey', 'gaia_pulse_token'];

export function envelopeHasForbiddenKey(value) {
  if (!value || typeof value !== 'object') return false;
  return Object.keys(value).some((key) => FORBIDDEN.some((word) => key.toLowerCase().includes(word)));
}

export function publicKernelEnvelope(input = {}) {
  const geometry = PUBLIC_ENVELOPE_GEOMETRIES.includes(input.geometry) ? input.geometry : 'torus';
  return {
    type: 'gaia:kernel-public',
    stage: PUBLIC_ENVELOPE_STAGE,
    sessionHash: PUBLIC_ENVELOPE_SESSION_HASH,
    livingHash: PUBLIC_ENVELOPE_LIVING_HASH,
    geometries: [...PUBLIC_ENVELOPE_GEOMETRIES],
    geometry,
    uniforms: ['uTime', 'uGravity'],
    thetaRule: '(0.01 + idx * 0.002) * gravityPull',
    lerp: PUBLIC_ENVELOPE_LERP,
    sessionAllocatesVector3: true,
    livingReusesTarget: true,
    phiAdvancedInSession: false,
    phiWeaveLiving: PUBLIC_ENVELOPE_PHI_WEAVE,
    extrasInSession: false,
    count: Number.isFinite(input.count) ? input.count : 0,
    gravityPull: Number.isFinite(input.gravityPull) ? input.gravityPull : 1,
    toroidalWeave: Number.isFinite(input.toroidalWeave) ? input.toroidalWeave : 1,
    hmacPresent: typeof input.hmac === 'string' && input.hmac.length > 0,
    secrets: false,
    tokenInEnvelope: false,
  };
}

export function assertPublicEnvelope(envelope) {
  const ok = !!envelope && envelope.secrets === false && envelope.tokenInEnvelope === false && !envelopeHasForbiddenKey(envelope);
  return { ok, stage: PUBLIC_ENVELOPE_STAGE, reason: ok ? 'public' : 'forbidden key or secret flag' };
}
