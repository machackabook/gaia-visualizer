/**
 * Stage 627 hold: hamiltonian y lift sin(t)*2 unread by hScale from session paste.
 * y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)
 * Lift amplitude is literal 2. Does not scale with hScale. Phi unread.
 * Numeral 137451921129154222.
 */
export function noteSessionHamiltonianLiftHold627(sessionSource) {
  const hasLift = /y = hScale \* Math\.sin\(this\.theta \* 3\) \+ \(Math\.sin\(t\) \* 2\)/.test(sessionSource || '');
  return {
    stage: 627,
    hold: 'hamiltonian-y-lift-unread',
    present: hasLift,
    note: hasLift ? 'hamiltonian y lift sin(t)*2 held unread by hScale' : 'hamiltonian y lift formula missing from paste',
    numeral: '137451921129154222'
  };
}
