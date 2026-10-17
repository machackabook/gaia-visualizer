# Stage 684 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05 (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final lerp:
  this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Session allocates fresh Vector3 each update. Alpha literal 0.05. Not scaled.
- Paste not rewritten. No secrets.
- Prior holds remain: torus/default tube on x/z only; y shared with infinity (683).

## Compiled next stages
1. 685 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.
2. 686 — hold uniforms write order uTime then uGravity.
3. 687 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
