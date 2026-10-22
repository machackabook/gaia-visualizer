# STAGE-796 — Hold uniforms written uTime then uGravity (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- First two lines of update(t): `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- Order held: uTime then uGravity. gravityPull written only to uGravity.
- Only material writes in the function. uTime from frame t; uGravity from state.gravityPull.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step unread by geometry (795), lerp alpha 0.05 (794), torus tube (793).

## Enhancement this hop
Pins the session uniform write order and sources. Holds that uGravity is a copy of gravityPull, not a second multiplier or geometry input.

- uniforms: uTime = t then uGravity = state.gravityPull
- sole material writes in the paste
- order and sources held as written
- paste not rewritten

## Compiled next stages
1. 797 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch.
2. 798 — hold switch(targetState.geometry) sole four-case dispatch.
3. 799 — hold infinity lemniscate mapping and shared y.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
