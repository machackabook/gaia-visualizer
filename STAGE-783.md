# Stage 783 — hold major/minor assignment order before switch (2026-10-21)

Connecting chat re-pasted the exact `update(t)` kernel.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `let major = 10 + (this.idx * 2);`
- `let minor = 3 + (state.toroidalWeave * 2);`
- Assigned immediately after theta step and before the switch(targetState.geometry).
- Used by infinity scale, hamiltonian hScale, triangular lattice/ripple, torus tube.
- Hamiltonian ignores minor. Infinity y, triangular y/ripple, torus y use minor.
- Paste not rewritten. No secrets.

## Next
- 784: hold lerp allocation literal alpha 0.05.
- 785: hold phi unread / external.
- 786: hold uniforms write order uTime then uGravity.

Token: hop-783.gaia-visualizer.137451921129154222
