# Stage 427 — lerp alpha stays 0.05 and does not scale with gravityPull (2026-10-05 14:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- lerp call remains `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- the alpha is the literal `0.05` and does not take `gravityPull`, `idx`, `toroidalWeave`, or `t`
- `gravityPull` still scales only the theta step `(0.01 + idx * 0.002) * gravityPull` and is written to `uGravity`

## Enhancement this hop
`noteSessionLerpAlphaUnscaled` and `compileSessionStage427` lock the call:

- gravityPull 0 → alpha 0.05
- gravityPull 1 → alpha 0.05
- gravityPull 2 → alpha 0.05 (alpha does not double)
- hamiltonian lift (426), triangular idx sector (425), infinity shared tube (424), and torus tube radius (423) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 428 major stays `10 + idx * 2` and is not scaled by `gravityPull`
- 429 infinity y stays shared with torus y and does not take lemniscate `scale`
- 430 session lerp still allocates a fresh `THREE.Vector3` each call; enhanced path may reuse a target, paste not rewritten

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154427`. No secrets.
