# STAGE-719 — Hold lerp alpha 0.05 and session new Vector3 allocation (living reuses _kernelTarget) (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- final line: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Alpha held at 0.05. Session paste allocates new THREE.Vector3 inside the lerp call. Living runtime reuses a scratch _kernelTarget to avoid per-frame allocation.
- Prior holds remain: torus tube radius on x/z only (718), triangular floor (717), hamiltonian (716), infinity denom (715), switch (714), major/minor (713), uniforms (712), theta (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 720 — hold phi unread (no assignment in session paste).
2. 721 — hold full update(t) kernel as pinned session source; living path may optimize allocations.
3. 722 — hold state.gravityPull and state.toroidalWeave as external drivers.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
