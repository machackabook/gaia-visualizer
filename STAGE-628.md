# Stage 628 — hold lerp alpha literal 0.05 and session Vector3 allocation (2026-10-14)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- final interpolation:
    // Smoothly interpolate current position to the new geometric state target
    this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- alpha is literal 0.05. Allocates new THREE.Vector3 each call. Living path reuses `_kernelTarget` and may modulate via chatKernelLerpAlpha.
- Prior holds remain: hamiltonian y lift sin(t)*2 unread by hScale (627), torus y shared with infinity (626), triangular y sector (625).
- Paste not rewritten. No secrets.

## Compiled next stages (629+)
1. 629 — hold major/minor assignment before switch unread by pull.
2. 630 — hold uniforms uTime then uGravity as sole material writes.
3. 631 — hold theta step (0.01 + idx * 0.002) * gravityPull.

Numeral 137451921129154222.
