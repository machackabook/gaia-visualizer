# Stage 410 — hold triangular high frequency theta*5 on x and z (2026-10-04 15:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only (not in the session switch).

## Enhancement this hop
`noteSessionTriangularHighFreq` confirms the triangular arm:

- sector snap `tAngle` stays the low-frequency lattice on x and z
- high frequency is `theta * 5` on both offsets: `minor * cos(theta*5)` on x, `minor * sin(theta*5)` on z
- y is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` and does not take `theta * 5`
- theta 0, major 10, minor 3 → x 13, z 0 (offset sits on x)
- theta π/10, major 10, minor 3 → x 10, z 3 (offset sits on z)
- paste is not rewritten. No session case was added.

## Next
- 411 hold session lerp still allocating `new THREE.Vector3` (hash `beec41f1`); living path keeps `_kernelTarget`
- 412 hold hamiltonian y lift `sin(t) * 2` independent of `hScale`
- 413 hold triangular y sector `(idx % 3 - 1) * major * 0.5` independent of the high-frequency weave

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
