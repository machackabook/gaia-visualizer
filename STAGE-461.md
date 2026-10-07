# Stage 461 — hold lemniscate denom shared by x and z only (2026-10-06 20:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm: Lemniscate of Bernoulli
- `const scale = major * 1.5`
- `const denom = 1 + Math.pow(Math.sin(this.theta), 2)`
- `x = (scale * Math.cos(this.theta)) / denom`
- `z = (scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom`
- `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` does not divide by denom
- prior hold remains: hamiltonian y lift `(sin(t) * 2)` is independent of hScale

## Enhancement this hop
- checker: `noteSessionLemniscateDenom`, compiled by `compileSessionStage461`
- numeric sample: `sampleLemniscateDenom` rebuilds x and z from the same denom; y is not a quotient
- bundle: `compileSessionStages451to461`
- paste not rewritten. No secrets.

Next: 462 default fallthrough stays the torus tube, 463 triangular tAngle is a floor snap to `2pi/3`, 464 infinity scale is `major * 1.5` before the shared denom.
Numeral `137451921129154461`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
