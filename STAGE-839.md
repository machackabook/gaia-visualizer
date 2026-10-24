# Stage 839 — hold torus/default tube radius (major + minor * cos(phi)) shared by x/z; y shared with infinity (2026-10-24 14:06 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus/default case (standard toroidal math):
  - x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  - z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only. Y formula is identical to the infinity case y. Phi external. No secrets. Paste not rewritten.

## Compiled next stages
1. 840 — hold major/minor assignment before switch unread by geometry case.
2. 841 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
3. 842 — hold uniforms uTime then uGravity order and sources.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
