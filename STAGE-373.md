# Stage 373 — session triangular minor ripple keeps raw theta * 5 (2026-10-02 11:08 CDT)

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
Triangular arm only. `noteSessionTriangularRipple` confirms the minor ripple is not snapped to the sector angle:

- sector snap stays on `tAngle = floor(theta / (2π/3)) * (2π/3)`
- ripple stays raw: `minor * cos(theta * 5)` and `minor * sin(theta * 5)`
- a sample at `theta = π/2`, `minor = 3` keeps sector `0` and ripple `(0, 3)`
- living `evaluateChatKernelPosition` already uses the same split
- paste is not rewritten. No session case was added.

## Next
- 374 session infinity scale is `major * 1.5` with denom `1 + sin(theta)^2` (document only)
- 375 session hamiltonian y is `hScale * sin(theta * 3) + sin(t) * 2` (document only)
- 376 session triangular y shelf is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
