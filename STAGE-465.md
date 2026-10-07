# Stage 465 — hold torus y identical to infinity y, omitting the tube radius (2026-10-07 09:09 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- torus/default y and infinity y are the same line: `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
- torus x and z still use the tube `(major + minor * Math.cos(this.phi))`; y does not
- prior hold remains: infinity `const scale = major * 1.5` is assigned before the shared denom (464)

## Enhancement this hop
- checker: `noteSessionTorusYMatchesInfinity`, compiled by `compileSessionStage465`
- numeric sample: `sampleTorusYMatch` rebuilds both y values and confirms they match and omit the tube radius
- bundle: `compileSessionStages451to465`
- paste not rewritten. No secrets.

Next: 466 lerp alpha stays the literal 0.05, 467 lemniscate z stays `sin(theta) * cos(theta)` over the same denom, 468 theta step stays the product `(0.01 + idx * 0.002) * gravityPull`.
Numeral `137451921129154465`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
