# Stage 406 — hold infinity denom shared by x and z (2026-10-04 11:08 CDT)

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
`noteSessionInfinityDenomShare` confirms the lemniscate denom is one value for both horizontal axes:

- `denom = 1 + sin(theta)^2`
- x divides by that denom
- z divides by the same denom
- y is the shared weave lift and is not divided by denom
- paste is not rewritten. No session case was added.

## Next
- 407 hold phi as an external weave; this paste does not advance phi inside `update(t)`
- 408 hold uniform writes (`uTime`, `uGravity`) before the theta step
- 409 hold lemniscate z factor `sin(theta)*cos(theta)` on the same denom, not a second denom

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
