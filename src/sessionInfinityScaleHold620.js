/** Stage 620 — hold infinity scale = major * 1.5. Document only. Do not rewrite the paste. No secrets. */
export const INFINITY_SCALE_HOLD_620_STAGE = 620;
export const INFINITY_SCALE_HOLD_620_SESSION = 'beec41f1';
export const INFINITY_SCALE_HOLD_620_LIVING = '7cd81012';

const PINNED_SCALE = `const scale = major * 1.5;`;

export function noteSessionInfinityScaleHold620(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_SCALE : String(source);
  const hasScale = /const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(text);
  const inInfinity = /case\s*['"]infinity['"][\s\S]*?const\s+scale\s*=\s*major\s*\*\s*1\.5/.test(text || PINNED_SCALE);
  return {
    stage: INFINITY_SCALE_HOLD_620_STAGE,
    session: INFINITY_SCALE_HOLD_620_SESSION,
    living: INFINITY_SCALE_HOLD_620_LIVING,
    pinned,
    hasScale,
    inInfinity,
    hamiltonianNoScale: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasScale && inInfinity,
    note: 'Infinity scale = major * 1.5. Hamiltonian hScale = major. From stage 620 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage620(source) {
  const hold = noteSessionInfinityScaleHold620(source);
  return {
    current: INFINITY_SCALE_HOLD_620_STAGE,
    session: INFINITY_SCALE_HOLD_620_SESSION,
    living: INFINITY_SCALE_HOLD_620_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 621, title: 'hold hamiltonian hScale = major' },
      { stage: 622, title: 'hold triangular floor snap tAngle' },
      { stage: 623, title: 'hold torus default fallthrough' },
    ],
  };
}
