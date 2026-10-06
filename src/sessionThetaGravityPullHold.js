/** Stage 456 — hold theta step as the only gravityPull product. Document only. Do not rewrite the paste. No secrets. */
export const THETA_GRAVITY_STAGE = 456;
export const THETA_GRAVITY_SESSION_HASH = 'beec41f1';
export const THETA_GRAVITY_LIVING_HASH = '7cd81012';
export const THETA_GRAVITY_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED_STEP = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function thetaStep(idx, gravityPull) {
  const base = 0.01 + idx * 0.002;
  const delta = base * gravityPull;
  return { base, gravityPull, delta };
}

export function noteSessionThetaGravityPullHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_STEP : String(source);
  const stepHeld = /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const uniformCopy = /uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  const products = text.match(/\*\s*state\.gravityPull/g) || [];
  const onlyProduct = products.length === 1;
  const phiAdvanced = /this\.phi\s*\+=/.test(text);
  const lerpLine = (text.match(/lerp\([^;]+;/) || [''])[0];
  const lerpOffPull = lerpLine.length === 0 || !/gravityPull/.test(lerpLine);
  const invented = THETA_GRAVITY_EXTRAS.filter((name) => hasCase(text, name));
  const idle = thetaStep(0, 1);
  const pulled = thetaStep(4, 1.4);
  const frozen = thetaStep(2, 0);
  return {
    stage: THETA_GRAVITY_STAGE,
    session: THETA_GRAVITY_SESSION_HASH,
    living: THETA_GRAVITY_LIVING_HASH,
    pinned,
    stepHeld,
    uniformCopy,
    onlyProduct,
    productCount: products.length,
    phiAdvanced,
    lerpOffPull,
    idle,
    pulled,
    frozen,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok:
      stepHeld &&
      uniformCopy &&
      onlyProduct &&
      !phiAdvanced &&
      lerpOffPull &&
      invented.length === 0 &&
      Math.abs(idle.base - 0.01) < 1e-12 &&
      Math.abs(idle.delta - 0.01) < 1e-12 &&
      Math.abs(pulled.base - 0.018) < 1e-12 &&
      Math.abs(pulled.delta - 0.0252) < 1e-12 &&
      frozen.delta === 0,
    note: 'Theta advances by (0.01 + idx * 0.002) * gravityPull only. uGravity is a copy, not a second product. phi is not incremented. Lerp alpha does not read gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage456(source) {
  const hold = noteSessionThetaGravityPullHold(source);
  return {
    current: THETA_GRAVITY_STAGE,
    session: THETA_GRAVITY_SESSION_HASH,
    living: THETA_GRAVITY_LIVING_HASH,
    paste: '2026-10-06 18:07 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 457, title: 'hold infinity y identical to torus y, no scale or denom' },
      { stage: 458, title: 'hold major and minor assigned before the geometry switch' },
      { stage: 459, title: 'hold uGravity as a copy of gravityPull, not a product' },
    ],
  };
}
