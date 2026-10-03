# Stage 388 — tube identity x^2 + z^2 = (major + minor * cos(phi))^2 (2026-10-03 10:08 CDT)

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
Torus / default arm only. `noteSessionTubeIdentity` documents the radial identity implied by stages 384 and 385:

- `x = (major + minor * cos(phi)) * cos(theta)`
- `z = (major + minor * cos(phi)) * sin(theta)`
- therefore `x^2 + z^2 = (major + minor * cos(phi))^2`
- equator `phi = 0`, `major = 10`, `minor = 3` keeps radial squared `169`
- pole `phi = π/2` keeps radial squared `100`
- inner `phi = π` keeps radial squared `49`
- lane `idx = 1` (`major = 12`), `minor = 5`, `phi = 0` keeps radial squared `289`
- three-quarter `theta = 3π/2` keeps radial squared `169` (sign lives in z, not the radius)
- y does not enter the identity
- paste is not rewritten. No session case was added.

## Next
- 389 hold lerp alpha `0.05` unless the paste changes
- 390 hold theta step `(0.01 + idx * 0.002) * gravityPull`
- 391 hold `major = 10 + idx * 2` and `minor = 3 + toroidalWeave * 2`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
