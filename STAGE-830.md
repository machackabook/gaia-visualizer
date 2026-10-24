# Stage 830 — hold uniforms uTime then uGravity order and sources (2026-10-24 09:09 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms written first:
  - this.material.uniforms.uTime.value = t;
  - this.material.uniforms.uGravity.value = state.gravityPull;
- Order is uTime then uGravity. Sources are the raw time argument and state.gravityPull. No other uniforms written in the session paste. Phi unread. No secrets. Paste not rewritten.

## Compiled next stages
1. 831 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch.
2. 832 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry.
3. 833 — hold switch(targetState.geometry) as sole four-case dispatcher.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine, hamiltonian-incursion.
