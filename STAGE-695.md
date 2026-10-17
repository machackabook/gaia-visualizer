# Stage 695 — hold uniforms write order uTime then uGravity (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms:
  this.material.uniforms.uTime.value = t;
  this.material.uniforms.uGravity.value = state.gravityPull;
- Written first in update(t). uTime then uGravity. Only material writes in session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step as (0.01 + this.idx * 0.002) * state.gravityPull (694).

## Compiled next stages
1. 696 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 697 — hold switch(targetState.geometry) as sole four-case dispatch.
3. 698 — hold infinity lemniscate denom shared by x and z only.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
