# Stage 668 — hold uniforms write order uTime then uGravity (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms written first in update(t):
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime then uGravity. Sole material uniform writes in the session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step as (0.01 + this.idx * 0.002) * state.gravityPull (667), final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05 (666), phi unused in hamiltonian/triangular and no this.phi += (665).

## Compiled next stages
1. 669 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before switch.
2. 670 — hold switch(targetState.geometry) as sole four-case dispatch.
3. 671 — hold infinity lemniscate denom shared by x and z only.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
