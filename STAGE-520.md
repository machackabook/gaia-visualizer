# Stage 520 — hold idx term inside the theta step only (2026-10-09 10:16 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `this.idx * 0.002` stays inside the theta parentheses.
- major still uses `this.idx * 2`. Triangular y still uses `this.idx % 3`.
- prior holds remain: gravityPull as the theta multiplier (518), phi read-only (519).

## Enhancement this hop
- checker: `noteSessionIdxInsideThetaStep` in `src/sessionIdxInsideThetaStep.js`, compiled by `compileSessionStage520`.
- band: `compileSessionStages518to520` in `src/sessionStage520.js`.
- wired through `chatKernelNext.js` as `idxInsideThetaStepNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 521 hold uGravity as a copy of gravityPull, not a second multiplier.
- 522 hold major idx term as idx * 2, distinct from the theta 0.002 term.
- 523 hold minor as 3 + toroidalWeave * 2, unread by gravityPull.

Numeral `137451921129155520`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion.
