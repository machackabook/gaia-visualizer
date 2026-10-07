# Stage 472 — hold infinity denom as 1 + sin(theta)^2, shared by x and z (2026-10-07 12:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity denom stays `const denom = 1 + Math.pow(Math.sin(this.theta), 2)`
- x divides `(scale * cos(theta))` by that binding
- z divides `(scale * sin(theta) * cos(theta))` by the same binding
- infinity y does not read denom
- prior hold remains: major is `10 + idx * 2` before the switch (471)
- session switch stays infinity | hamiltonian | triangular | torus
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only

## Enhancement this hop
- checker: `noteSessionInfinityDenom`, compiled by `compileSessionStage472`
- numeric sample: `sampleInfinityDenom` rebuilds `1 + sin(theta)^2` (theta = π/2 → denom 2)
- bundle: `compileSessionStages451to472`
- paste not rewritten. No secrets.

Next: 473 hold torus tube as `(major + minor * cos(phi))` on x and z, 474 hold triangular sector snap as `floor(theta / (2π/3)) * (2π/3)`, 475 hold infinity scale as `major * 1.5`, unread by the other three cases.
Numeral `137451921129154472`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
