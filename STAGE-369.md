# Stage 369 — session torus reuses the same phi (2026-10-01 21:07 CDT)

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
Torus / default case only. `noteSessionTorusPhiReuse` confirms the paste uses one `this.phi` in all three terms:

- `x = (major + minor * cos(phi)) * cos(theta)`
- `z = (major + minor * cos(phi)) * sin(theta)`
- `y = minor * sin(phi) * sin(t * 0.5 + idx)`

`phi` is not advanced in `update(t)`. `case 'torus'` falls through to `default`. Living path already matches. The paste is not rewritten. No session case was added.

## Next
- 370 session triangular floor snaps theta to 2π/3 (document only)
- 371 session infinity y shares the torus tube formula `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)
- 372 session default falls through to the torus body (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
