# Stage 429 — infinity y stays shared with torus y (2026-10-05 16:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- infinity y remains `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);`
- torus default uses the same y formula
- lemniscate `scale = major * 1.5` is used on x and z only (`denom` path). It is not applied to y.

## Enhancement this hop
`noteSessionInfinityYShared` and `compileSessionStage429` lock the shared tube:

- infinity y equals torus y for the same minor, phi, t, idx
- a non-zero scale does not change y
- major unscaled (428) and lerp alpha unscaled (427) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 430 session lerp still allocates a fresh `THREE.Vector3`; enhanced path may reuse a target

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154429`. No secrets.
