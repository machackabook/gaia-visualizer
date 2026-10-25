# Stage 851 — hold uniforms order: uTime then uGravity; sources t and state.gravityPull respectively (2026-10-25)

Connecting chat re-pasted the complete `update(t)` kernel for the geometric field (Three.js).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Opening writes:
  `this.material.uniforms.uTime.value = t;`
  `this.material.uniforms.uGravity.value = state.gravityPull;`
- Order is uTime then uGravity. Sources are the function parameter `t` and `state.gravityPull` respectively.
- No other uniform writes appear in the session paste.
- Paste not rewritten. No secrets. No fifth session case. Switch remains sole four-case dispatcher.

## Compiled next stages
1. 852 — lerp alpha remains literal 0.05; no modulation by gravityPull or toroidalWeave.
2. 853 — session switch remains sole four-case; runtime extras (klein/hopf/etc.) stay non-promoted until paste.
3. 854 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by the geometry switch.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion, Project-NexusCryptic.
