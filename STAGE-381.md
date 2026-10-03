# Stage 381 — session hamiltonian z is hScale * cos(theta * 3) * sin(theta) (2026-10-02 19:10 CDT)

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
Hamiltonian arm only. `noteSessionHamiltonianZ` confirms the vertex-traversal z term:

- `hScale = major`
- `z = hScale * cos(theta * 3) * sin(theta)`
- pole `theta = 0`, `major = 10` keeps `z = 0` (sin is 0)
- waist `theta = π/2`, `major = 10` keeps `z = 0` (cos(3π/2) is 0)
- sixth `theta = π/6`, `major = 10` keeps `z = 0` (cos(π/2) is 0)
- third `theta = π/3`, `major = 10` keeps `z = -5√3`
- anti-pole `theta = π`, `major = 10` keeps `z = 0`
- lane `idx = 1` (`major = 12`), `theta = π/3` keeps `z = -6√3`
- minor, phi, and t do not enter z (t stays on y)
- infinity and triangular do not use this z
- paste is not rewritten. No session case was added.

## Next
- 382 session triangular x is `major * cos(tAngle) + minor * cos(theta * 5)` (document only)
- 383 session triangular z is `major * sin(tAngle) + minor * sin(theta * 5)` (document only)
- 384 session torus x is `(major + minor * cos(phi)) * cos(theta)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
