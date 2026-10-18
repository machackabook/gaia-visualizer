# Stage 712 — hold uniforms written uTime then uGravity (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniform writes:
  this.material.uniforms.uTime.value = t;
  this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime first, then uGravity. No other material uniforms written in the session paste. Paste not rewritten. No secrets.
- Prior holds remain: theta step (711), final lerp (710), torus tube (709).

## Compiled next stages
1. 713 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) before switch.
2. 714 — hold switch(targetState.geometry) as sole four-case dispatch.
3. 715 — hold infinity lemniscate scale = major * 1.5 before denom.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
