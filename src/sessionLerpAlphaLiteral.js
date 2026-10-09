/** Stage 516 — session lerp alpha is the literal 0.05. Document only. Paste not rewritten. No secrets. */
export const LERP_ALPHA_LITERAL_STAGE = 516;
export const LERP_ALPHA_LITERAL_SESSION = 'beec41f1';
export const LERP_ALPHA_LITERAL_LIVING = '7cd81012';

const PINNED = 'this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);';

export function sampleLerpAlphaLiteral() {
  return {
    alpha: 0.05,
    literal: true,
    readsGravity: false,
    allocatesVector3: true,
  };
}

export function noteSessionLerpAlphaLiteral(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const line = text.split('\n').find((row) => row.includes('this.mesh.position.lerp(')) || '';
  const literal = /lerp\([^\n]*0\.05\)/.test(line);
  const notVariable = literal && !/gravityPull|state\.lerp|this\.lerp/.test(line);
  const sample = sampleLerpAlphaLiteral();
  return {
    stage: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    pinned,
    literal,
    notVariable,
    sample,
    pasteRewritten: false,
    secrets: false,
    ok: literal && notVariable && sample.alpha === 0.05 && sample.literal === true,
    note: 'session lerp alpha stays the literal 0.05. It does not read gravityPull. Paste not rewritten.',
  };
}

export function compileSessionStage516(source) {
  const hold = noteSessionLerpAlphaLiteral(source);
  return {
    current: LERP_ALPHA_LITERAL_STAGE,
    session: LERP_ALPHA_LITERAL_SESSION,
    living: LERP_ALPHA_LITERAL_LIVING,
    paste: '2026-10-09 09:08 CDT',
    hold,
    next: [
      { stage: 517, title: 'hold theta step as the only angle write' },
      { stage: 518, title: 'hold gravityPull as the theta-step multiplier only' },
      { stage: 519, title: 'hold phi read-only in the session paste' },
    ],
  };
}
