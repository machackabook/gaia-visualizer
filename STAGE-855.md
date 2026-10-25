# Stage 855 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- After theta step:
  `let major = 10 + (this.idx * 2);`
  `let minor = 3 + (state.toroidalWeave * 2);`
- Assigned once, before switch(targetState.geometry).
- Major used for infinity scale (major*1.5), hamiltonian hScale, triangular sector.
- Minor used by infinity y, triangular ripple/y, torus tube. Hamiltonian ignores minor.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 856 — hold phi referenced but never assigned inside the session paste (external binding).
2. 857 — hold living path Vector3 reuse for lerp (session paste still allocates).
3. 858 — hold infinity lemniscate denom shared by x/z only.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
