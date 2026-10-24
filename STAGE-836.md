# Stage 836 — hold infinity lemniscate denom shared by x/z only (2026-10-24 11:08 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Infinity case (Lemniscate of Bernoulli):
  - const denom = 1 + Math.pow(Math.sin(this.theta), 2);
  - x = (scale * Math.cos(this.theta)) / denom;
  - z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom;
- Denom is shared by x and z only. Y is unread by denom and shares the torus form: minor * sin(phi) * sin(t * 0.5 + idx). Scale = major * 1.5. No secrets. Paste not rewritten.

## Compiled next stages
1. 837 — hold hamiltonian y lift sin(t)*2 unread by hScale/minor/phi.
2. 838 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 839 — hold torus/default tube radius (major + minor * cos(phi)) shared by x/z; y shared with infinity.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
