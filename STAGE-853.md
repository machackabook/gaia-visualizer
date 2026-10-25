# Stage 853 — hold session switch remains sole four-case; runtime extras stay non-promoted until paste (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Sole dispatcher:
  `switch(targetState.geometry) {`
- Cases present in the paste:
  - `'infinity'` — Lemniscate of Bernoulli (scale = major * 1.5, denom = 1 + sin(theta)^2 shared by x and z only)
  - `'hamiltonian'` — parametric vertex traversal (hScale = major, y = hScale * sin(theta*3) + sin(t)*2)
  - `'triangular'` — modulo floor snap lattice (tAngle = floor(theta / (2π/3)) * (2π/3), y sector free of theta*5)
  - `'torus'` / `default` — standard toroidal tube
- No fifth case appears in the session paste. Runtime extras (klein, hopf, figure8, trefoil, mobius, etc.) remain non-promoted until a future paste includes them.
- `default` falls through to the torus tube. It is not a fifth session case.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 854 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by the geometry switch.
2. 855 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
3. 856 — hold phi referenced but never assigned inside the session paste (external binding).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
