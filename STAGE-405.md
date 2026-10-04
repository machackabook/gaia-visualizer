# Stage 405 — hold unrecognized labels on the torus fallthrough (2026-10-04 09:09 CDT)

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
`noteSessionUnknownLabelHold` confirms a label that is not in the session switch uses the existing fallthrough:

- `case 'torus':` still falls through `default:`
- klein / hopf / figure8 / trefoil / mobius do not appear as session cases
- those labels route to the torus tube arm without inventing a fifth formula
- infinity / hamiltonian / triangular stay on their own arms
- paste is not rewritten. No session case was added.

## Next
- 406 hold infinity denom `1 + sin(theta)^2` shared by x and z, not applied to y
- 407 hold phi as an external weave; this paste does not advance phi inside `update(t)`
- 408 hold uniform writes (`uTime`, `uGravity`) before the theta step

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
