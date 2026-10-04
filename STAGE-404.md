# Stage 404 — hold hamiltonian xz product against hScale (2026-10-04 09:09 CDT)

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
`noteSessionHamiltonianProductHold` confirms the session product, not a sum:

- `x = hScale * cos(theta * 3) * cos(theta)`
- `z = hScale * cos(theta * 3) * sin(theta)`
- `hScale` stays `major` (stage 401); it is applied once
- y stays `hScale * sin(theta * 3) + sin(t) * 2` and does not reuse the xz product
- theta 0, major 10 → x 10, z 0
- theta π/2 → x 0, z 0 (frequency term is cos(3π/2) = 0)
- sin(t) lifts y only
- paste is not rewritten. No session case was added.

## Next
- 405 hold an unrecognized geometry label on the torus fallthrough only
- 406 hold infinity denom shared by x and z, not applied to y
- 407 hold phi as an external weave, not advanced inside update(t)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
