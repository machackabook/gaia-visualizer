# Stage 862 — hold torus/default tube radius shared by x/z; y shared with infinity (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case:
  - x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  - z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only.
- Y formula shared with the infinity case (minor * sin(phi) * sin(t*0.5 + idx)).
- Paste not rewritten. No secrets.
- Prior holds remain: triangular floor 2π/3 (861), hamiltonian y lift sin(t)*2 (860), infinity lemniscate denom (858).

## Compiled next stages
1. 863 — hold phi external binding (referenced, never assigned in paste).
2. 864 — hold lerp alpha remains literal 0.05; no modulation by gravityPull or toroidalWeave.
3. Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (14).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
