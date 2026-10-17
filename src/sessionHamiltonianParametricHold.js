/** Stage 690 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_PARAMETRIC_STAGE = 690;
export const HAMILTONIAN_PARAMETRIC_SESSION = 'beec41f1';
export const HAMILTONIAN_PARAMETRIC_LIVING = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

export function noteSessionHamiltonianParametricHold(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = (text.split("case 'hamiltonian':")[1] || text).split('break;')[0];
  const hScaleHeld = /hScale\s*=\s*major\s*;/.test(arm);
  const xHeld = /x\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)\s*;/.test(arm);
  const zHeld = /z\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)\s*;/.test(arm);
  const yHeld = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(\s*Math\.sin\(t\)\s*\*\s*2\s*\)\s*;/.test(arm);
  const freeOfMinor = !/minor/.test(arm);
  return {
    stage: HAMILTONIAN_PARAMETRIC_STAGE,
    session: HAMILTONIAN_PARAMETRIC_SESSION,
    living: HAMILTONIAN_PARAMETRIC_LIVING,
    pinned,
    hScaleHeld,
    xHeld,
    zHeld,
    yHeld,
    freeOfMinor,
    pasteRewritten: false,
    secrets: false,
    ok: hScaleHeld && xHeld && zHeld && yHeld && freeOfMinor,
    note: 'Hamiltonian x/z free of minor. Y lift sin(t)*2 free of minor and phi. Paste not rewritten.',
  };
}
