# Stage 850 — hold major = 10 + (idx * 2) unread by gravityPull; used for scale/hScale/sector (2026-10-25 11:08 CDT)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- After theta step and before the switch:
  `let major = 10 + (this.idx * 2);`
  `let minor = 3 + (state.toroidalWeave * 2);`
- Major is held unread by gravityPull. GravityPull only multiplies the theta advance.
- Major feeds:
  - infinity: `const scale = major * 1.5;`
  - hamiltonian: `const hScale = major;`
  - triangular: sector offset `(this.idx % 3 - 1) * major * 0.5` and the floor snap base.
- Minor remains the toroidalWeave-scaled tube / y amplitude (stage 849). Hamiltonian ignores both minor and phi.
- Paste not rewritten. No secrets. No fifth session case. Switch remains sole four-case dispatcher.

## Compiled next stages
1. 851 — uniforms order: uTime then uGravity; sources t and state.gravityPull respectively.
2. 852 — lerp alpha remains literal 0.05; no modulation by gravityPull or toroidalWeave.
3. 853 — session switch remains sole four-case; runtime extras (klein/hopf/etc.) stay non-promoted until paste.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
