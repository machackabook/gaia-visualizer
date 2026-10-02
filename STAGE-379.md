# Stage 379 — session infinity x is (scale * cos(theta)) / denom (2026-10-02 17:07 CDT)

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
Infinity arm only. `noteSessionInfinityX` confirms the lemniscate x term:

- `scale = major * 1.5`
- `denom = 1 + sin(theta)^2`
- `x = (scale * cos(theta)) / denom`
- pole `theta = 0`, `major = 10` keeps `x = 15` (`denom = 1`)
- waist `theta = π/2`, `major = 10` keeps `x = 0` (`denom = 2`)
- anti-pole `theta = π`, `major = 10` keeps `x = -15`
- lane `idx = 1` (`major = 12`), `theta = 0` keeps `x = 18`
- minor, phi, and t do not enter x
- hamiltonian and triangular do not use this x
- paste is not rewritten. No session case was added.

## Next
- 380 session hamiltonian x is `hScale * cos(theta * 3) * cos(theta)` (document only)
- 381 session hamiltonian z is `hScale * cos(theta * 3) * sin(theta)` (document only)
- 382 session triangular x is `major * cos(tAngle) + minor * cos(theta * 5)` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
