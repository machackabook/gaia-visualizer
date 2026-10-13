# Stage 616 — hold final lerp session allocates Vector3 alpha 0.05 (2026-10-12 23:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- blend: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`
- Alpha is the literal `0.05` and is not scaled by `gravityPull`. Session allocates `new THREE.Vector3` by contract. Living path may reuse `_kernelTarget`.
- Prior hold remains: theta step (615).
