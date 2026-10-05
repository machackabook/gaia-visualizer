# Stage 428 — major stays `10 + idx * 2` and does not scale with gravityPull (2026-10-05 16:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- radii line remains `let major = 10 + (this.idx * 2);`
- major does not take `gravityPull`, `toroidalWeave`, or `t`
- `gravityPull` still scales only the theta step `(0.01 + idx * 0.002) * gravityPull` and is written to `uGravity`

## Enhancement this hop
`noteSessionMajorUnscaled` and `compileSessionStage428` lock the radii line:

- idx 0, gravityPull 0 → major 10
- idx 4, gravityPull 1 → major 18
- idx 4, gravityPull 2 → major 18 (major does not double)
- lerp alpha (427) stays on the same compile
- paste is not rewritten. No session case was added.

## Next
- 429 infinity y stays shared with torus y and does not take lemniscate `scale`
- 430 session lerp still allocates a fresh `THREE.Vector3` each call; enhanced path may reuse a target

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154428`. No secrets.
