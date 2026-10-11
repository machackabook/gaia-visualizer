# Stage 571 — hold major = 10 + idx*2 and minor = 3 + toroidalWeave*2 before switch (2026-10-10 22:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- both assigned after theta step, before switch(targetState.geometry)
- major used by all cases; minor used by infinity y, triangular ripple, torus tube
- hamiltonian uses only major (as hScale); gravityPull does not scale radii

## Enhancement this hop
- major and minor radii held exactly as session paste, assigned before the four-case switch.
- paste not rewritten. No secrets.

## Next
- 572 hold switch(targetState.geometry) sole four-case dispatch
- 573 hold infinity lemniscate denom shared by x and z
- 574 hold phi read-only in shared y formulas

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`.
