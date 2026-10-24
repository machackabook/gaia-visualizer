# Stage 832 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry (2026-10-24 10:08 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta increment:
  - this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Step is independent of geometry. Scales only by gravityPull. Not read by major/minor or cases. Phi unread. No secrets. Paste not rewritten.

## Compiled next stages
1. 833 — hold switch(targetState.geometry) as sole four-case dispatcher.
2. 834 — hold lerp alpha 0.05 with new Vector3 allocation (living path may reuse).
3. 835 — hold phi as external / unread inside update(t).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
