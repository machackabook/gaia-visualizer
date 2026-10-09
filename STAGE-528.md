# Stage 528 — hold lemniscate denom shared by x and z only (2026-10-09 16:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity denom is `1 + Math.pow(Math.sin(this.theta), 2)`.
- x and z divide by that denom. Infinity y does not.
- sample: theta `pi/4`, denom `1.5`, yUsesDenom `false`.
- prior hold remains: torus and default tube (527).

## Enhancement this hop
- checker: `noteSessionLemniscateDenomOnly` in `src/sessionLemniscateDenomOnly.js`, compiled by `compileSessionStage528`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 529 hold hamiltonian y lift `sin(t) * 2` independent of hScale.
- 530 hold session lerp alpha as the literal 0.05.
- 531 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.

Numeral `137451921129155528`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion, living-bibliography-continuity-engine.
