# STAGE-803 — Hold theta step and gravityPull multiplier (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta update: this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Base step 0.01 + idx * 0.002, scaled by gravityPull.
- GravityPull external (from state). Unread by geometry cases.
- Applied before major/minor assignment and switch.
- Session paste still allocates `new THREE.Vector3` inside lerp with alpha 0.05. Living path keeps no-alloc lerp.
- Paste not rewritten. No secrets.
- Prior holds remain: torus tube (802), triangular floor (801), hamiltonian parametric (800), infinity lemniscate (799).

## Enhancement this hop
Pins the session theta step. Holds the linear idx term and gravityPull multiplier unread by geometry.

- theta += (0.01 + idx * 0.002) * gravityPull
- step independent of major/minor/phi/geometry
- gravityPull from state.gravityPull
- paste not rewritten

## Compiled next stages
1. 804 — hold lerp alpha 0.05 and session allocation.
2. 805 — hold phi external / unread in session paste.
3. 806 — hold uniforms uTime then uGravity order.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
