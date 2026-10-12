/** Stage 585 — session uniforms uTime then uGravity as sole material writes. Document only. Do not rewrite the paste. No secrets. */
export const UNIFORMS_HOLD_STAGE = 585;
export const UNIFORMS_HOLD_SESSION_HASH = 'beec41f1';
export const UNIFORMS_HOLD_LIVING_HASH = '7cd81012';

const PINNED_PASTE = `update(t) {
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
    switch(targetState.geometry) { default: break; }
    this.mesh.position.lerp(new THREE.Vector3(0, 0, 0), 0.05);
}`;

export function noteSessionUniformsHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_PASTE : String(source);
  const uTime = /this\.material\.uniforms\.uTime\.value\s*=\s*t\s*;/.test(text);
  const uGravity = /this\.material\.uniforms\.uGravity\.value\s*=\s*state\.gravityPull\s*;/.test(text);
  const order = text.indexOf('uTime.value = t') >= 0 && text.indexOf('uTime.value = t') < text.indexOf('uGravity.value = state.gravityPull');
  const sole = (text.match(/uniforms\./g) || []).length === 2;
  const invented = ['klein', 'hopf', 'figure8', 'trefoil', 'mobius'].filter((name) =>
    new RegExp("case\\s*['\"]" + name + "['\"]").test(text)
  );
  return {
    stage: UNIFORMS_HOLD_STAGE,
    session: UNIFORMS_HOLD_SESSION_HASH,
    living: UNIFORMS_HOLD_LIVING_HASH,
    pinned,
    order: 'uTime then uGravity',
    uTime,
    uGravity,
    orderHeld: order,
    soleWrites: sole,
    inventedCases: invented,
    sessionSwitchUntouched: invented.length === 0,
    pasteRewritten: false,
    secrets: false,
    ok: uTime && uGravity && order && invented.length === 0,
    note: 'Session material writes are solely uTime = t then uGravity = state.gravityPull at the top of update(t). Living path may add optional uniforms. Paste not rewritten.',
  };
}
