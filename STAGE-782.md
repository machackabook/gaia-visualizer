# Stage 782 — reconfirm session update(t) kernel from current chat (2026-10-21)

Connecting chat re-pasted the exact `update(t)` kernel.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- uniforms `uTime` then `uGravity`.
- `theta += (0.01 + this.idx * 0.002) * state.gravityPull`.
- `major = 10 + (this.idx * 2)`, `minor = 3 + (state.toroidalWeave * 2)` assigned before switch.
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default.
- session paste still calls `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`.
- Phi referenced but never assigned inside the paste (external).
- Hamiltonian y lift is `sin(t) * 2` unread by hScale/minor/phi.
- Infinity denom `1 + sin(theta)^2` shared by x/z only.
- Triangular floor snap to 2π/3; y sector `(idx % 3 - 1) * major * 0.5`.
- Torus tube radius shared by x/z; y uses minor * sin(phi) * sin(t * 0.5 + idx).
- Paste not rewritten. No secrets.

## Next
- 783: hold major/minor assignment order.
- 784: hold lerp allocation literal alpha.
- 785: hold phi unread.

Token: hop-782.gaia-visualizer.137451921129154222
