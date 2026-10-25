# Stage 858 — hold infinity lemniscate denom = 1 + sin(theta)^2 shared by x and z only (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case:
  `const scale = major * 1.5;`
  `const denom = 1 + Math.pow(Math.sin(this.theta), 2);`
  x and z divided by denom; y unread by denom (uses minor * sin(phi) * sin(t*0.5 + idx)).
- Scale = major * 1.5. Major pre-switch.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 859 — hold session switch sole four-case; runtime extras non-promoted.
2. 860 — hold hamiltonian free of minor/phi; y lift sin(t)*2 independent of hScale.
3. 861 — hold triangular floor snap to 2π/3 and y sector free of theta*5.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
