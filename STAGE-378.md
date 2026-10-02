# Stage 378 — session torus y is minor * sin(phi) * sin(t * 0.5 + idx) (2026-10-02 16:06 CDT)

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
Torus arm only. `noteSessionTorusY` confirms the shared tube lift:

- `y = minor * sin(phi) * sin(t * 0.5 + idx)`
- equator `phi = 0` keeps `y = 0` (sin(phi) is zero)
- time node `t = 0`, `idx = 0`, `phi = π/2` keeps `y = 0`
- crest `t = π`, `idx = 0`, `phi = π/2`, `minor = 3` keeps `y = 3`
- lane `idx = 1`, `minor = 5` keeps `y = 5 * sin(π/2 + 1)`
- major and theta do not enter y
- infinity uses the same y; hamiltonian and triangular do not
- paste is not rewritten. No session case was added.

## Next
- 379 session infinity x is `(scale * cos(theta)) / denom` (document only)
- 380 session hamiltonian x is `hScale * cos(theta * 3) * cos(theta)` (document only)
- 381 session hamiltonian z is `hScale * cos(theta * 3) * sin(theta)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
