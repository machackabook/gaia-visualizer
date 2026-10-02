# Stage 371 — session infinity y shares the torus tube formula (2026-10-01 23:06 CDT)

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
Infinity case only, compared with the torus default. `noteSessionInfinityTube` confirms both y terms are the same tube:

- infinity: `y = minor * sin(phi) * sin(t * 0.5 + idx)`
- torus default: `y = minor * sin(phi) * sin(t * 0.5 + idx)`

Lemniscate x/z stay on `scale = major * 1.5` and `denom = 1 + sin(theta)^2`. Phi is still not stepped in the paste. Living path already matches. The paste is not rewritten. No session case was added.

## Next
- 372 session default falls through to the torus body (document only)
- 373 session triangular minor ripple keeps raw `theta * 5` (document only)
- 374 session infinity scale is `major * 1.5` with denom `1 + sin(theta)^2` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
