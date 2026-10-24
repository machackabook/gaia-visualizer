# Stage 840 — hold major/minor assignment before switch unread by geometry case (2026-10-24 14:06 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Major and minor radii assigned before the switch:
  - let major = 10 + (this.idx * 2);
  - let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Paste not rewritten. No secrets.

## Compiled next stages
1. 841 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
2. 842 — hold uniforms uTime then uGravity order and sources.
3. 843 — hold switch(targetState.geometry) as sole four-case dispatcher.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
