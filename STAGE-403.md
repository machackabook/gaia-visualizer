# Stage 403 — hold triangular sector snap independent of the y ripple (2026-10-04 09:09 CDT)

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
`noteSessionTriangularSectorSnapHold` on gaia-visualizer confirms the sector snap does not read the y ripple:

- `tAngle = floor(theta / (2π/3)) * (2π/3)` depends on theta only
- x/z use `cos/sin(tAngle)` plus the raw `theta * 5` minor ripple
- y stays `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` and does not mention `tAngle`
- same theta, later t: tAngle and xz unchanged, y ripple moves
- larger minor moves the theta*5 ripple and y, not the snapped angle
- paste is not rewritten. No session case was added.

## Next
- 404 hold hamiltonian xz product `cos(theta * 3) * cos/sin(theta)` against hScale
- 405 hold an unrecognized geometry label on the torus fallthrough only
- 406 hold infinity denom shared by x and z, not applied to y

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
