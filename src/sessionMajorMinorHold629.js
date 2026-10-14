/**
 * Stage 629 hold: major and minor assigned before switch(targetState.geometry).
 * let major = 10 + (this.idx * 2);
 * let minor = 3 + (state.toroidalWeave * 2);
 * Unread by pull. Hamiltonian ignores minor.
 * Numeral 137451921129154222.
 */
export function noteSessionMajorMinorHold629(sessionSource) {
  const hasMajor = /let major = 10 \+ \(this\.idx \* 2\);/.test(sessionSource || '');
  const hasMinor = /let minor = 3 \+ \(state\.toroidalWeave \* 2\);/.test(sessionSource || '');
  const beforeSwitch = hasMajor && hasMinor && /let minor = 3 \+ \(state\.toroidalWeave \* 2\);[\s\S]*switch\(targetState\.geometry\)/.test(sessionSource || '');
  return {
    stage: 629,
    hold: 'major-minor-before-switch',
    present: beforeSwitch,
    note: beforeSwitch ? 'session major and minor assigned before switch held' : 'session major/minor pre-switch formula missing from paste',
    numeral: '137451921129154222'
  };
}
