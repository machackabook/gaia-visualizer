/** Stage 624 — compile next stages / held invariants from current chat paste of update(t). Document only. Do not rewrite the paste. No secrets. */
export const COMPILE_624_STAGE = 624;
export const COMPILE_624_SESSION = 'beec41f1';
export const COMPILE_624_LIVING = '7cd81012';

export function noteSessionCompile624(source) {
  const pinned = source == null;
  const text = pinned ? 'update(t) { ... four-case switch ... lerp 0.05 }' : String(source);
  const hasSwitch = /switch\s*\(\s*targetState\.geometry\s*\)/.test(text);
  const hasLerp = /lerp\(\s*new\s+THREE\.Vector3/.test(text);
  const hasTheta = /theta\s*\+=\s*\(\s*0\.01/.test(text);
  return {
    stage: COMPILE_624_STAGE,
    session: COMPILE_624_SESSION,
    living: COMPILE_624_LIVING,
    pinned,
    hasSwitch,
    hasLerp,
    hasTheta,
    pasteRewritten: false,
    secrets: false,
    ok: hasSwitch && hasLerp && hasTheta,
    note: 'Compilation of session kernel invariants from stage 624 connecting chat. Paste not rewritten.',
  };
}

export function compileSessionStage624(source) {
  const hold = noteSessionCompile624(source);
  return {
    current: COMPILE_624_STAGE,
    session: COMPILE_624_SESSION,
    living: COMPILE_624_LIVING,
    paste: '2026-10-13 15:09 CDT',
    hold,
    next: [
      { stage: 625, title: 'hold triangular y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor' },
      { stage: 626, title: 'hold infinity/torus y shared minor * sin(phi) * sin(t*0.5 + idx)' },
      { stage: 627, title: 'hold hamiltonian y = hScale * sin(theta*3) + sin(t)*2' },
    ],
  };
}
