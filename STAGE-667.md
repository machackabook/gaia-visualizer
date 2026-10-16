# Stage 667 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta increment held as `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- Base step 0.01 scaled by particle idx * 0.002, then multiplied by gravityPull.
- No other theta mutation in the session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05 (666), phi unused in hamiltonian/triangular and no this.phi += (665), torus/default tube on x/z only y shared with infinity (664).

## Compiled next stages
1. 668 — hold uniforms write order uTime then uGravity.
2. 669 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before switch.
3. 670 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
