# Stage 375 — session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2 (2026-10-02 13:06 CDT)

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
Hamiltonian arm only. `noteSessionHamiltonianY` confirms the y term:

- `hScale = major`
- `x = hScale * cos(theta * 3) * cos(theta)`
- `z = hScale * cos(theta * 3) * sin(theta)`
- `y = hScale * sin(theta * 3) + sin(t) * 2`
- ripple amplitude is 2, not `minor`
- phi is unused on this arm
- rest sample `major = 10`, `theta = 0`, `t = 0` keeps `y = 0`
- crest sample `theta = π/6`, `t = π/2` keeps `y = 12`
- paste is not rewritten. No session case was added.

## Next
- 376 session triangular y shelf is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` (document only)
- 377 session lemniscate z is `(scale * sin(theta) * cos(theta)) / denom` (document only)
- 378 session torus y is `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
