# Stage 374 — session infinity scale is major * 1.5 with denom 1 + sin(theta)^2 (2026-10-02 12:06 CDT)

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
Infinity arm only. `noteSessionInfinityScale` confirms the lemniscate scale and denom:

- `scale = major * 1.5`
- `denom = 1 + sin(theta)^2` (range [1, 2], never zero)
- `x = (scale * cos(theta)) / denom`
- `z = (scale * sin(theta) * cos(theta)) / denom`
- sample at `major = 10`, `theta = 0` keeps `scale = 15`, `denom = 1`, `x = 15`
- sample at `theta = π/2` keeps `denom = 2` and a waist at the origin
- living `evaluateChatKernelPosition` already matches
- paste is not rewritten. No session case was added.

## Next
- 375 session hamiltonian y is `hScale * sin(theta * 3) + sin(t) * 2` (document only)
- 376 session triangular y shelf is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor` (document only)
- 377 session lemniscate z is `(scale * sin(theta) * cos(theta)) / denom` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
