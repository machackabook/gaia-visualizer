# Stage 675 — hold lerp alpha literal 0.05 and new THREE.Vector3 allocation each update (2026-10-16)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final line:
  this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Alpha is the literal `0.05`. Session path allocates a fresh `THREE.Vector3` on every update.
- Living / enhanced path continues to reuse `_kernelTarget` / `_target` (runtime-only; not promoted into the four-case session switch).
- Paste not rewritten. No secrets.
- Prior holds remain: torus/default tube on x/z only; y shared with infinity (674), triangular floor snap (673), hamiltonian free of minor (672).

## Compiled next stages
1. 676 — hold theta step (0.01 + idx*0.002)*gravityPull.
2. 677 — hold uniforms written uTime then uGravity.
3. 678 — hold major/minor assigned before the switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
