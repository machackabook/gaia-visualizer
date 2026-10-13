/** Stage 621 — hold hamiltonian hScale = major. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_HSCALE_HOLD_621_STAGE = 621;
export const HAMILTONIAN_HSCALE_HOLD_621_SESSION = 'beec41f1';
export const HAMILTONIAN_HSCALE_HOLD_621_LIVING = '7cd81012';

const PINNED_HSCALE = `const hScale = major;`;

export function noteSessionHamiltonianHScaleHold621(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_HSCALE : String(source);
  const hasHScale = /const\s+hScale\s*=\s*major/.test(text);
  const inHamiltonian = /case\s*['"]hamiltonian['"][\s\S]*?const\s+hScale\s*=\s*major/.test(text || PINNED_HSCALE);
  return {
    stage: HAMILTONIAN_HSCALE_HOLD_621_STAGE,
    session: HAMILTONIAN_HSCALE_HOLD_621_SESSION,
    living: HAMILTONIAN_HSCALE_HOLD_621_LIVING,
    pinned,
    hasHScale,
    inHamiltonian,
    infinityHasScale: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasHScale && inHamiltonian,
    note: 'Hamiltonian hScale = major. Infinity scale = major * 1.5. From stage 621 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage621(source) {
  const hold = noteSessionHamiltonianHScaleHold621(source);
  return {
    current: HAMILTONIAN_HSCALE_HOLD_621_STAGE,
    session: HAMILTONIAN_HSCALE_HOLD_621_SESSION,
    living: HAMILTONIAN_HSCALE_HOLD_621_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 622, title: 'hold triangular floor snap tAngle' },
      { stage: 623, title: 'hold torus default fallthrough' },
      { stage: 624, title: 'hold lemniscate denom shared by x and z' },
    ],
  };
}
