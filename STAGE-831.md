# Stage 831 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch (2026-10-24 10:08 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Major and minor radii assigned before the switch:
  - let major = 10 + (this.idx * 2);
  - let minor = 3 + (state.toroidalWeave * 2);
- Assigned once, before geometry dispatch. Used by infinity scale, hamiltonian hScale, triangular, torus. Hamiltonian ignores minor. Phi unread. No secrets. Paste not rewritten.

## Compiled next stages
1. 832 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
2. 833 — hold switch(targetState.geometry) as sole four-case dispatcher.
3. 834 — hold lerp alpha 0.05 with new Vector3 allocation (living path may reuse).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
