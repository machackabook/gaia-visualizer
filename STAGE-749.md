# STAGE-749 — Hold full update(t) kernel as pinned session source of truth (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Full kernel held exactly as pasted:
  - uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
  - theta += (0.01 + this.idx * 0.002) * state.gravityPull;
  - major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
  - switch(targetState.geometry): infinity (lemniscate scale=major*1.5, denom=1+sin^2), hamiltonian (hScale=major, y lift sin(t)*2), triangular (tAngle floor to 2π/3, y sector (idx%3-1)*major*0.5), torus/default (tube major+minor*cos(phi) shared x/z, y minor*sin(phi)*sin(...)).
  - this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- All formulas held exactly. Phi external. Paste not rewritten. No secrets.
- Prior holds: lerp (748), torus (747), triangular (746), hamiltonian (745), infinity (744), uniforms (743).

## Compiled next stages
1. 750 — hold phi referenced but never assigned inside the session paste (external).
2. 751 — optional living path optimizations (_kernelTarget reuse) while session paste remains source.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
