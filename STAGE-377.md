# Stage 377 — session lemniscate z is (scale * sin(theta) * cos(theta)) / denom (2026-10-02 15:10 CDT)

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
Infinity arm only. `noteSessionLemniscateZ` confirms the figure-eight crossing:

- `scale = major * 1.5` and `denom = 1 + sin(theta)^2` still own the shared Bernoulli frame
- `z = (scale * sin(theta) * cos(theta)) / denom`
- z is zero at the nodes `theta = 0` and `theta = π/2`
- lobe sample `theta = π/4`, `major = 10` keeps `z = 5` (`scale = 15`, `denom = 1.5`)
- opposite lobe `theta = -π/4` keeps `z = -5` (the curve crosses itself)
- phi and minor do not enter z (they stay on the shared tube y)
- paste is not rewritten. No session case was added.

## Next
- 378 session torus y is `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)
- 379 session infinity x is `(scale * cos(theta)) / denom` (document only)
- 380 session hamiltonian x is `hScale * cos(theta * 3) * cos(theta)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
