# Stage 862 — hold torus/default tube radius shared by x/z; y shared with infinity (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus / default case:
  - x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  - z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) shared by x and z only.
- Y form shared with the infinity arm (minor * sin(phi) * sin(t*0.5 + idx)).
- Phi external / unread assignment in paste.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 863 — hold phi referenced but never assigned inside the session paste (external binding).
2. 864 — hold living path Vector3 reuse while session paste allocates new THREE.Vector3 in lerp.
3. Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (14).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
