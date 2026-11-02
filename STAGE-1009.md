# STAGE-1009 — hold major/minor declarations before switch; major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) (2026-11-02 13:07 CDT)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Declarations occur after theta step and before switch(targetState.geometry).
- major and minor are read by all four cases (infinity scale/denom, hamiltonian hScale, triangular lattice, torus tube radius).
- prior holds: 1008 phi as external binding (referenced, never assigned inside update(t)).

## Enhancement this hop
Holds major and minor as pre-switch declarations with exact formulas. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1010 — hold infinity denom shared by x/z only (1 + sin(theta)^2).
2. 1011 — hold hamiltonian y lift unread by minor/phi.
3. 1012 — hold triangular tAngle floor (2π/3) and y lane (idx % 3 - 1) * major * 0.5.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine next in waterfall.
