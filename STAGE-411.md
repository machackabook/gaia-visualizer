# Stage 411 — hold session lerp allocation vs living _kernelTarget (2026-10-04 17:08 CDT)

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
`noteSessionLerpAllocHold` confirms the tail:

- session call remains `lerp(new THREE.Vector3(x, y, z), 0.05)`
- living path keeps a reused `_kernelTarget` (`reuseSessionLerpTarget` writes into the same object)
- alpha stays 0.05 and is not scaled by gravityPull
- paste is not rewritten. No session case was added.

## Next
- 414 hold infinity scale `major * 1.5` before the lemniscate map
- 415 hold theta step as the product `(0.01 + idx * 0.002) * gravityPull`, not a sum
- 416 hold torus and infinity sharing the y tube; hamiltonian and triangular do not

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
