# Stage 649 — hold uniforms write order uTime then uGravity (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- uniforms write order:
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
- uTime written first, then uGravity. No other uniforms in the session paste. Order held exactly.
- Paste not rewritten. No secrets.
- Prior holds remain: major/minor pre-switch (648), theta step (647), final lerp Vector3 alpha 0.05 (646), torus/default tube (645), hamiltonian parametric (644), triangular floor (643).

## Compiled next stages
1. 650 — hold switch(targetState.geometry) as sole four-case dispatch.
2. 651 — hold infinity lemniscate denom shared by x and z only.
3. 652 — hold hamiltonian parametric x/z free of minor and y lift sin(t)*2.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
