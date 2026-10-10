# Stage 562 — hold major and minor radii assignment before the switch (2026-10-10 17:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- both assigned after theta step, before switch(targetState.geometry)
- major used by all cases; minor used by infinity y, triangular ripple, torus tube
- hamiltonian uses only major (as hScale); gravityPull does not scale radii

## Enhancement this hop
- radii block held exactly as session paste. Parentheses form on major and minor preserved.
- paste not rewritten. No fifth case. No secrets.

## Next
- 563 hold switch(targetState.geometry) as sole four-case dispatch
- 564 hold phi read-only in infinity and torus y formulas
- 565 hold lemniscate scale = major * 1.5 and shared denom

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`.
