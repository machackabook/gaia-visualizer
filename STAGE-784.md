# Stage 784 — hold lerp allocation literal alpha 0.05 (2026-10-21)

Connecting chat re-pasted the exact `update(t)` kernel.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Final line: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`
- Allocates a fresh `THREE.Vector3` each frame with literal alpha `0.05`.
- Smooth interpolation from current mesh position to the geometric target computed by the four-case switch.
- Session paste allocates inline. Living path may reuse `_kernelTarget`.
- Paste not rewritten. No secrets.

## Next
- 785: hold phi unread / external.
- 786: hold uniforms write order uTime then uGravity.
- 787: hold theta step (0.01 + idx * 0.002) * gravityPull.

Token: hop-784.gaia-visualizer.137451921129154222
