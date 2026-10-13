/** Stage 618 — hold minor = 3 + (toroidalWeave * 2) before switch. Document only. Do not rewrite the paste. No secrets. */
export const MINOR_HOLD_618_STAGE = 618;
export const MINOR_HOLD_618_SESSION = 'beec41f1';
export const MINOR_HOLD_618_LIVING = '7cd81012';

const PINNED_MINOR = `let minor = 3 + (state.toroidalWeave * 2);`;

export function noteSessionMinorHold618(source) {
  const pinned = source == null;
  const text = pinned ? PINNED_MINOR : String(source);
  const hasMinor = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\)/.test(text);
  const beforeSwitch = /let\s+minor\s*=\s*3\s*\+\s*\(\s*state\.toroidalWeave\s*\*\s*2\s*\);[\s\S]*?switch\s*\(\s*targetState\.geometry\s*\)/.test(text || PINNED_MINOR);
  return {
    stage: MINOR_HOLD_618_STAGE,
    session: MINOR_HOLD_618_SESSION,
    living: MINOR_HOLD_618_LIVING,
    pinned,
    hasMinor,
    beforeSwitch,
    usedByInfinityTriangularTorus: true,
    hamiltonianIgnores: true,
    pasteRewritten: false,
    secrets: false,
    ok: hasMinor && beforeSwitch,
    note: 'Minor = 3 + (toroidalWeave * 2) assigned before switch. Used by infinity/triangular/torus. Hamiltonian ignores. From stage 618 chat paste. Paste not rewritten.',
  };
}

export function compileSessionStage618(source) {
  const hold = noteSessionMinorHold618(source);
  return {
    current: MINOR_HOLD_618_STAGE,
    session: MINOR_HOLD_618_SESSION,
    living: MINOR_HOLD_618_LIVING,
    paste: '2026-10-13',
    hold,
    next: [
      { stage: 619, title: 'hold switch(targetState.geometry) sole four-case dispatch' },
      { stage: 620, title: 'hold infinity scale = major * 1.5' },
      { stage: 621, title: 'hold hamiltonian hScale = major' },
    ],
  };
}
