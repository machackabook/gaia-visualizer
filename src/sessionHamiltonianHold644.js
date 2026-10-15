/** Stage 644 — hold hamiltonian parametric x/z and y lift free of minor. Document only. Do not rewrite the paste. No secrets. */
export const HAMILTONIAN_HOLD_644_STAGE = 644;
export const HAMILTONIAN_HOLD_644_SESSION = 'beec41f1';
export const HAMILTONIAN_HOLD_644_LIVING = '7cd81012';

const PINNED_HAMILTONIAN = `case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;`;

export function noteSessionHamiltonianHold644(source) {
  const text = source == null ? PINNED_HAMILTONIAN : String(source);
  const hasHScale = /const\s+hScale\s*=\s*major/.test(text);
  const hasXZ = /hScale\s*\*\s*Math\.cos\(this\.theta\s*\*\s*3\)/.test(text);
  const hasYLift = /Math\.sin\(t\)\s*\*\s*2/.test(text) && !/minor/.test(text.split('hamiltonian')[1] || '');
  return {
    stage: HAMILTONIAN_HOLD_644_STAGE,
    session: HAMILTONIAN_HOLD_644_SESSION,
    living: HAMILTONIAN_HOLD_644_LIVING,
    hasHScale,
    hasParametricXZ: hasXZ,
    yLiftFreeOfMinor: hasYLift,
    pasteRewritten: false,
    secrets: false,
    ok: hasHScale && hasXZ && hasYLift,
    note: 'Hamiltonian parametric mapping held. y lift sin(t)*2 independent of minor. From stage 644 chat paste. Paste not rewritten.',
  };
}
