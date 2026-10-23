# Stage 822 — hold full kernel uniforms order, theta step, major/minor before switch, lerp allocation (2026-10-23 18:07 CDT)

Connecting chat re-pasted the complete `update(t)` function.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Full kernel held exactly as pasted:
  - uniforms: uTime = t then uGravity = state.gravityPull
  - theta += (0.01 + this.idx * 0.002) * state.gravityPull
  - major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2) assigned before switch
  - switch(targetState.geometry) sole four-case (infinity | hamiltonian | triangular | torus|default)
  - this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05) — session allocates new Vector3, alpha literal 0.05
- Phi referenced but never assigned inside paste. GravityPull only to uGravity and theta multiplier. No secrets. Paste not rewritten.

## Compiled next stages
1. 823 — hold torus/default tube (major + minor*cos(phi)) on x/z and shared y.
2. 824 — living path may reuse Vector3 target while session paste keeps new allocation.
3. 825 — hold infinity lemniscate scale and shared y unread by denom.

NUMERAL=137451921129154222
Connecting repos: The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, living-bibliography-continuity-engine.
