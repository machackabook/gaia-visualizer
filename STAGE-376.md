# Stage 376 — session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor (2026-10-02 14:06 CDT)

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
Triangular arm only. `noteSessionTriangularY` confirms the y shelf:

- snap `tAngle = floor(theta / (2π/3)) * (2π/3)` still owns x/z, not this note
- `y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- three bands: idx % 3 = 0 sits at `-major/2`, 1 sits at 0, 2 sits at `+major/2`
- ripple amplitude is `minor`, not a constant
- phi is unused on this arm
- mid sample `idx = 1`, `major = 10`, `minor = 3`, `t = 0` keeps `y = 0`
- low sample `idx = 0` keeps `y = -5`
- crest sample `idx = 2`, `t = π/2` keeps `y = 8`
- paste is not rewritten. No session case was added.

## Next
- 377 session lemniscate z is `(scale * sin(theta) * cos(theta)) / denom` (document only)
- 378 session torus y is `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)
- 379 session infinity x is `(scale * cos(theta)) / denom` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
