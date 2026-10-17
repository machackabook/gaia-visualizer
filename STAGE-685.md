# Stage 685 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance:
  this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Step is linear in gravityPull. Index-scaled base rate held.
- Paste not rewritten. No secrets.
- Prior holds remain: final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05 (684).

## Compiled next stages
1. 686 — hold uniforms write order uTime then uGravity.
2. 687 — hold major/minor assigned before the switch.
3. 688 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
