# Stage 704 — hold uniforms write order uTime then uGravity (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms:
  this.material.uniforms.uTime.value = t;
  this.material.uniforms.uGravity.value = state.gravityPull;
- uTime written first, then uGravity. Order held. Paste not rewritten. No secrets.
- Prior holds remain: theta step (703), session lerp (702).

## Compiled next stages
1. 705 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 706 — hold infinity lemniscate scale = major * 1.5 before denom.
3. 707 — hold hamiltonian hScale = major (no 1.5).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
