# Stage 384 — session torus x is (major + minor * cos(phi)) * cos(theta) (2026-10-02 22:06 CDT)

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
Torus / default arm only. `noteSessionTorusX` confirms the tube x term:

- `x = (major + minor * cos(phi)) * cos(theta)`
- equator `phi = 0`, `theta = 0`, `major = 10`, `minor = 3` keeps `x = 13`
- pole `phi = π/2`, `theta = 0` keeps `x = 10` (`cos(π/2) = 0`, tube radius collapses to major)
- quarter `theta = π/2`, `phi = 0` keeps `x = 0`
- inner `phi = π`, `theta = 0` keeps `x = 7`
- lane `idx = 1` (`major = 12`), `minor = 5`, `phi = 0`, `theta = 0` keeps `x = 17`
- t and idx do not enter x (idx only scales major/minor before the formula)
- infinity, hamiltonian, and triangular do not use this x
- paste is not rewritten. No session case was added.

## Next
- 385 session torus z is `(major + minor * cos(phi)) * sin(theta)` (document only)
- 386 hold session torus y unless the paste changes (already `noteSessionTorusY`)
- 387 hold the four-case switch unless the paste adds a case

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
