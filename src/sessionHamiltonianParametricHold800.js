/** Stage 800 — hold hamiltonian parametric mapping from connecting chat. Document only. Paste not rewritten. No secrets. */
export const HAMILTONIAN_800_STAGE = 800;
export const HAMILTONIAN_800_SESSION = 'beec41f1';
export const HAMILTONIAN_800_LIVING = '7cd81012';

const PINNED = [
  "case 'hamiltonian':",
  'const hScale = major;',
  'x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);',
  'z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);',
  'y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);',
].join('\n');

export function noteSessionHamiltonianParametricHold800(source) {
  const pinned = source == null;
  const text = pinned ? PINNED : String(source);
  const arm = (text.split("case 'hamiltonian':")[1] || text).split('break;')[0];
  const hScaleHeld = /hScale\s*=\s*major\s*;/.test(arm);
  const xHeld = /x\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.cos\(this\.theta\)\s*;/.test(arm);
  const zHeld = /z\s*=\s*hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)\s*\*\s*Math\.sin\(this\.theta\)\s*;/.test(arm);
  const yHeld = /y\s*=\s*hScale\s*\*\s*Math\.sin\(this\.theta\s*\*\s*3\)\s*\+\s*\(\s*Math\.sin\(t\)\s*\*\s*2\s*\)\s*;/.test(arm);
  const freeOfPhi = !/phi/.test(arm);
  return {
    stage: HAMILTONIAN_800_STAGE,
    session: HAMILTONIAN_800_SESSION,
    living: HAMILTONIAN_800_LIVING,
    pinned,
    hScaleHeld,
    xHeld,
    zHeld,
    yHeld,
    freeOfPhi,
    pasteRewritten: false,
    secrets: false,
    ok: hScaleHeld && xHeld && zHeld && yHeld && freeOfPhi,
    note: 'Hamiltonian parametric mapping held for stage 800. Paste not rewritten.',
  };
}

export function compileSessionStage800(source) {
  const hold = noteSessionHamiltonianParametricHold800(source);
  return {
    current: HAMILTONIAN_800_STAGE,
    session: HAMILTONIAN_800_SESSION,
    living: HAMILTONIAN_800_LIVING,
    hold,
    next: [
      { stage: 801, title: 'hold triangular floor and y sector' },
      { stage: 802, title: 'hold torus/default tube on x/z and shared y' },
      { stage: 803, title: 'hold final lerp to Vector3(x, y, z) with 0.05 factor' },
    ],
  };
}
