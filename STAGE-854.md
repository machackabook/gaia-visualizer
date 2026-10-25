# Stage 854 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by the geometry switch (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- After uniforms:
  `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- The step is applied once, before major/minor and before switch(targetState.geometry).
- Unread by any case arm. GravityPull modulates the angular step uniformly across infinity | hamiltonian | triangular | torus/default.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 855 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 856 — hold phi referenced but never assigned inside the session paste (external binding).
3. 857 — hold living path Vector3 reuse for lerp (session paste still allocates).

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
