# Stage 861 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case:
  - const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  - x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  - z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  - y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snaps to 2π/3 sectors for the lattice vertices.
- Raw theta*5 ripple stays on x/z minor offsets only.
- Y sector uses idx % 3 and sin(t)*minor; free of theta*5.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 862 — hold torus/default tube radius shared by x/z; y shared with infinity.
2. 863 — hold phi external binding (referenced, never assigned in paste).
3. Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (14).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
