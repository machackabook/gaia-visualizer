/** Stage 459 — uGravity is a copy of gravityPull, not a product. Document only. Do not rewrite the paste. No secrets. */
export const UGRAVITY_COPY_STAGE = 459;
export const UGRAVITY_COPY_SESSION_HASH = 'beec41f1';
export const UGRAVITY_COPY_LIVING_HASH = '7cd81012';
export const UGRAVITY_COPY_EXTRAS = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'];

const PINNED = [
  'this.material.uniforms.uTime.value = t;',
  'this.material.uniforms.uGravity.value = state.gravityPull;',
  'this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;',
].join('\n');

function hasCase(source, name) {
  return new RegExp("case\\s*['\"]" + name + "['\"]").test(source || '');
}

export function noteSessionUGravityCopy(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const copy = /uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  const notProduct = !/uGravity\.value\s*=\s*[^;]*\*/.test(text);
  const products = text.match(/\*\s*state\.gravityPull/g) || [];
  const onlyTheta = products.length === 1 && /this\.theta\s*\+=\s*\(\s*0\.01\s*\+\s*this\.idx\s*\*\s*0\.002\s*\)\s*\*\s*state\.gravityPull\s*;/.test(text);
  const timeFirst = text.indexOf('uTime') >= 0 && text.indexOf('uTime') < text.indexOf('uGravity');
  const invented = UGRAVITY_COPY_EXTRAS.filter((name) => hasCase(text, name));
  return {
    stage: UGRAVITY_COPY_STAGE,
    session: UGRAVITY_COPY_SESSION_HASH,
    living: UGRAVITY_COPY_LIVING_HASH,
    pinned,
    copy,
    notProduct,
    onlyTheta,
    productCount: products.length,
    timeFirst,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: copy && notProduct && onlyTheta && timeFirst && invented.length === 0,
    note: 'uGravity.value is assigned state.gravityPull. The only gravityPull product is the theta step. Paste not rewritten.',
  };
}

export function compileSessionStage459(source) {
  const hold = noteSessionUGravityCopy(source);
  return {
    current: UGRAVITY_COPY_STAGE,
    session: UGRAVITY_COPY_SESSION_HASH,
    living: UGRAVITY_COPY_LIVING_HASH,
    paste: '2026-10-06 18:15 CDT',
    geometries: ['infinity', 'hamiltonian', 'triangular', 'torus'],
    hold,
    next: [
      { stage: 460, title: 'hold hamiltonian y lift sin(t)*2 independent of hScale' },
      { stage: 461, title: 'hold lemniscate denom shared by x and z only' },
      { stage: 462, title: 'hold default fallthrough on the torus tube, no fifth case' },
    ],
  };
}
