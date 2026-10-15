# Stage 647 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- theta increment:
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Step base 0.01 + idx*0.002 scaled by gravityPull. Does not take toroidalWeave, t, or phi.
- Paste not rewritten. No secrets.
- Prior holds remain: final lerp Vector3 alpha 0.05 (646), torus/default tube (645), hamiltonian parametric (644), triangular floor (643).

## Compiled next stages
1. 648 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 649 — hold uniforms write order uTime then uGravity.
3. 650 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
