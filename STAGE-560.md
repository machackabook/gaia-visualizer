# Stage 560 — hold theta step (0.01 + idx * 0.002) * gravityPull and uniforms (2026-10-10 16:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- gravityPull scales only the theta step and is copied to uGravity. No other multipliers.

## Enhancement this hop
- theta advance and material writes held exactly as session paste. Order uTime then uGravity preserved.
- paste not rewritten. No fifth case. No secrets.

## Next
- 561 hold lerp (new THREE.Vector3, alpha 0.05)
- 562 hold radii major = 10 + idx*2, minor = 3 + toroidalWeave*2 before switch
- 563 hold switch as sole dispatch with four cases

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`.
