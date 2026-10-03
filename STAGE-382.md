# Stage 382 — session triangular x is major * cos(tAngle) + minor * cos(theta * 5) (2026-10-02 20:07 CDT)

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
Triangular arm only. `noteSessionTriangularX` confirms the lattice x term:

- `tAngle = floor(theta / (2π/3)) * (2π/3)`
- `x = major * cos(tAngle) + minor * cos(theta * 5)`
- origin `theta = 0`, `major = 10`, `minor = 3` keeps `x = 13` (both cosines are 1)
- ripple `theta = π/5`, `major = 10`, `minor = 3` keeps `tAngle = 0` and `x = 7` (`cos(π) = -1`)
- vertex `theta = 2π/3`, `major = 10`, `minor = 3` keeps `x = -6.5` (`cos(2π/3) = cos(10π/3) = -1/2`)
- lane `idx = 1` (`major = 12`), `minor = 5`, `theta = 0` keeps `x = 17`
- phi and t do not enter x (t stays on y)
- infinity and hamiltonian do not use this x
- paste is not rewritten. No session case was added.

## Next
- 383 session triangular z is `major * sin(tAngle) + minor * sin(theta * 5)` (document only)
- 384 session torus x is `(major + minor * cos(phi)) * cos(theta)` (document only)
- 385 session torus z is `(major + minor * cos(phi)) * sin(theta)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
