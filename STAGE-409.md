# Stage 409 — hold lemniscate z factor on the same denom (2026-10-04 13:06 CDT)

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
`noteSessionLemniscateZFactor` confirms the infinity arm:

- one `denom = 1 + sin(theta)^2`
- x is `(scale * cos(theta)) / denom`
- z is `(scale * sin(theta) * cos(theta)) / denom` — same `denom`, not a second denom
- y stays the shared weave lift and does not take the crossing factor
- theta π/4, major 10 → scale 15, factor 0.5, denom 1.5, z 5
- theta 0 and theta π/2 keep z at 0 (factor vanishes)
- paste is not rewritten. No session case was added.

## Next
- 410 hold triangular high frequency `theta * 5` on both x and z offsets, not on y
- 411 hold session lerp still allocating `new THREE.Vector3` (hash `beec41f1`); living path keeps `_kernelTarget`
- 412 hold hamiltonian y lift `sin(t) * 2` independent of `hScale`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
