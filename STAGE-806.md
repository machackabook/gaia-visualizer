# STAGE-806 — Hold uniforms write order uTime then uGravity (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- First two lines of the kernel:
  - this.material.uniforms.uTime.value = t;
  - this.material.uniforms.uGravity.value = state.gravityPull;
- Order is uTime then uGravity. Held exactly as in the chat paste.
- Paste not rewritten. No secrets.
- Prior holds remain: phi external (805), lerp alpha (804), theta step (803).

## Enhancement this hop
Pins the uniform write order. Holds that uTime is written before uGravity.

- uniforms written in order uTime, uGravity
- values from t and state.gravityPull
- living path may add defaults or sessionMode guards
- paste not rewritten

## Compiled next stages
1. 807 — hold major/minor assignment before switch.
2. 808 — hold switch as sole four-case dispatch.
3. 809 — hold infinity lemniscate scale/denom shared by x/z.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
