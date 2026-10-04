# Stage 408 — hold uniform writes before the theta step (2026-10-04 11:08 CDT)

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
`noteSessionUniformOrder` confirms the head of `update(t)`:

- `uTime` is written from `t` first
- `uGravity` is written from `state.gravityPull` second
- the theta step runs after both writes
- the step still uses `state.gravityPull` directly; the uniform is a mirror, not a second source
- paste is not rewritten. No session case was added.

## Next
- 409 hold lemniscate z factor `sin(theta)*cos(theta)` on the same denom, not a second denom
- 410 hold triangular high frequency `theta * 5` on both x and z offsets, not on y
- 411 hold session lerp still allocating `new THREE.Vector3` (hash `beec41f1`); living path keeps `_kernelTarget`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
