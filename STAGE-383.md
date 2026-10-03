# Stage 383 — session triangular z is major * sin(tAngle) + minor * sin(theta * 5) (2026-10-02 21:06 CDT)

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
Triangular arm only. `noteSessionTriangularZ` confirms the lattice z term:

- `tAngle = floor(theta / (2π/3)) * (2π/3)`
- `z = major * sin(tAngle) + minor * sin(theta * 5)`
- origin `theta = 0`, `major = 10`, `minor = 3` keeps `z = 0` (both sines are 0)
- ripple `theta = π/10`, `major = 10`, `minor = 3` keeps `tAngle = 0` and `z = 3` (`sin(π/2) = 1`)
- vertex `theta = 2π/3`, `major = 10`, `minor = 3` keeps `z = 7√3/2` (`sin(2π/3) = √3/2`, `sin(10π/3) = -√3/2`)
- lane `idx = 1` (`major = 12`), `minor = 5`, `theta = 0` keeps `z = 0`
- phi and t do not enter z (t stays on y)
- infinity and hamiltonian do not use this z
- paste is not rewritten. No session case was added.

## Next
- 384 session torus x is `(major + minor * cos(phi)) * cos(theta)` (document only)
- 385 session torus z is `(major + minor * cos(phi)) * sin(theta)` (document only)
- 386 session torus y is `minor * sin(phi) * sin(t * 0.5 + idx)` already noted; hold unless the paste changes

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
