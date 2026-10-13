/**
 * Stage 625 hold: triangular y formula from session paste.
 * y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor
 * Does not take theta * 5. Floor snap and weave held prior.
 * Numeral 137451921129154222.
 */
export function noteSessionTriangularYHold625(sessionSource) {
  const hasY = /y = \(this\.idx % 3 - 1\) \* major \* 0\.5 \+ Math\.sin\(t\) \* minor/.test(sessionSource || '');
  return {
    stage: 625,
    hold: 'triangular-y-sector',
    present: hasY,
    note: hasY ? 'triangular y sector held' : 'triangular y formula missing from paste',
    numeral: '137451921129154222'
  };
}
