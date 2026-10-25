# Stage 859 — hold session switch remains sole four-case; runtime extras stay non-promoted until paste (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Sole dispatcher: `switch(targetState.geometry) {`
- Cases: 'infinity' (lemniscate), 'hamiltonian' (parametric), 'triangular' (floor lattice), 'torus'/default (tube).
- No fifth case in the paste. Runtime extras (klein, hopf, figure8, trefoil, mobius) remain non-promoted.
- default falls through to torus tube.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 860 — hold hamiltonian parametric x/z free of minor and phi; y = hScale * sin(theta*3) + sin(t)*2.
2. 861 — hold triangular tAngle floor(theta / (2π/3)) * (2π/3); y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5.
3. 862 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y = minor*sin(phi)*sin(t*0.5+idx).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
