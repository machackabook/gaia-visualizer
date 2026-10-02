# Stage 370 — session triangular floor snaps theta to 2π/3 (2026-10-01 22:06 CDT)

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
Triangular case only. `noteSessionTriangularFloor` confirms the paste snaps theta before the lattice vertex:

- `tAngle = floor(theta / (2π/3)) * (2π/3)`
- `x = major * cos(tAngle) + minor * cos(theta * 5)`
- `z = major * sin(tAngle) + minor * sin(theta * 5)`
- `y` stays the stage-367 lane `(idx % 3 - 1) * major * 0.5 + sin(t) * minor`

The floor is the vertex snap. `theta * 5` is the minor ripple and is not floored. Living path already matches. The paste is not rewritten. No session case was added.

## Next
- 371 session infinity y shares the torus tube formula `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)
- 372 session default falls through to the torus body (document only)
- 373 session triangular minor ripple keeps raw `theta * 5` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
