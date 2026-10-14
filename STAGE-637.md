# Stage 637 — hold lerp session allocation (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- lerp held exactly as:
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Allocates fresh Vector3 each frame (session; enhanced path caches targetPos).
- Alpha fixed at 0.05. No adaptive factor in pure sessionMode.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step (636), shared y tube (635), torus x/z tube (634), triangular sector (633), hamiltonian lift (632), infinity denom (631).

## Compiled next stages
1. 638 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 639 — hold uniforms write order uTime then uGravity.
3. 640 — hold phi unused in hamiltonian/triangular; no this.phi += in session paste.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
