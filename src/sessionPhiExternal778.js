/** Stage 778 — hold phi as external driver unread inside paste assignment. Document only. Do not rewrite the paste. No secrets. */
export const PHI_EXTERNAL_778_STAGE = 778;
export const PHI_EXTERNAL_778_SESSION = 'beec41f1';
export const PHI_EXTERNAL_778_LIVING = '7cd81012';

const PINNED_PASTE_SNIPPET = `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`;

export function noteSessionPhiExternal778(source) {
  const text = source == null ? '' : String(source);
  const phiInSharedY = /y\s*=\s*minor\s*\*\s*Math\.sin\(this\.phi\)/.test(text);
  const phiInTube = /major\s*\+\s*minor\s*\*\s*Math\.cos\(this\.phi\)/.test(text);
  const phiAssigned = /this\.phi\s*=/.test(text) || /this\.phi\s*\+=/.test(text);
  const sharedFormula = text.includes(PINNED_PASTE_SNIPPET.trim()) || phiInSharedY;
  return {
    stage: PHI_EXTERNAL_778_STAGE,
    session: PHI_EXTERNAL_778_SESSION,
    living: PHI_EXTERNAL_778_LIVING,
    phiInSharedY,
    phiInTube,
    phiNotAssigned: !phiAssigned,
    sharedFormula,
    pasteRewritten: false,
    secrets: false,
    ok: phiInSharedY && phiInTube && !phiAssigned,
    note: 'Phi is external/unread inside session update(t). Used only in shared infinity/torus y and torus tube radius. From stage 778. Paste not rewritten.',
  };
}

export function compileSessionStage778(source) {
  const hold = noteSessionPhiExternal778(source);
  return {
    current: PHI_EXTERNAL_778_STAGE,
    session: PHI_EXTERNAL_778_SESSION,
    living: PHI_EXTERNAL_778_LIVING,
    paste: '2026-10-21 connecting chat',
    hold,
    next: [
      { stage: 779, title: 'hold switch(targetState.geometry) as sole case dispatch with default torus' },
      { stage: 780, title: 'hold uniforms write order uTime then uGravity' },
    ],
  };
}
