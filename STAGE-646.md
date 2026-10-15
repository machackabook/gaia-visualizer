# Stage 646 — hold final lerp session allocates new THREE.Vector3(x, y, z) alpha 0.05 (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- final: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Session allocates new Vector3 each call. Alpha is the literal 0.05. Does not take gravityPull, idx, t, or toroidalWeave.
- Paste not rewritten. No secrets.
- Prior holds remain: torus/default tube (645), hamiltonian parametric (644), triangular floor (643), infinity scale/denom (642).

## Compiled next stages
1. 647 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull.
2. 648 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
3. 649 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
