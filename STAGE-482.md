# Stage 482 — hold lerp alpha 0.05 as the only blend into the geometric target (2026-10-07 19:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- final write stays `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- session path still allocates the Vector3; living path may reuse `_kernelTarget`
- no `position.set` in the paste. One lerp. Paste not rewritten. No secrets.

## Enhancement this hop
- checker: `noteSessionLerpAlpha`, compiled by `compileSessionStage482`
- bundle: `compileSessionStages451to482`
- sample alpha is `0.05`

## Compiled next stages (483+)
1. 483 — hold `major = 10 + idx * 2` and `minor = 3 + toroidalWeave * 2` as the shared radii before the switch.
2. 484 — hold uniforms `uTime` and `uGravity` as the only material writes in `update(t)`.
3. 485 — hold `switch(targetState.geometry)` as the only case dispatch. Do not add session case labels.

Klein / hopf / figure8 / trefoil / mobius stay runtime-only.
Numeral `137451921129154482`.
