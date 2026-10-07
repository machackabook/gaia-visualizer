# Stage 460 — hold hamiltonian y lift sin(t)*2 independent of hScale (2026-10-06 19:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- hamiltonian arm: `const hScale = major`
- `x = hScale * cos(theta * 3) * cos(theta)`
- `z = hScale * cos(theta * 3) * sin(theta)`
- `y = hScale * sin(theta * 3) + (sin(t) * 2)`
- the lift `(sin(t) * 2)` is not multiplied by `hScale`
- prior hold remains: `uGravity.value = state.gravityPull` is a copy, not a product

## Enhancement this hop
- checker: `noteSessionHamiltonianYLift`, compiled by `compileSessionStage460`
- numeric sample: `sampleHamiltonianYLift` splits orbit and lift; dY/dHScale is `sin(theta*3)` only
- bundle: `compileSessionStages451to460`
- paste not rewritten. No secrets.

Next: 461 lemniscate denom shared by x and z only, 462 default fallthrough stays the torus tube, 463 triangular tAngle is a floor snap to `2pi/3`.
Numeral `137451921129154460`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
