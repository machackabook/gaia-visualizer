# Stage 521 — hold uGravity as a copy of gravityPull, not a second multiplier (2026-10-09 11:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- material write stays `this.material.uniforms.uGravity.value = state.gravityPull`.
- theta step still multiplies by `state.gravityPull`, not by `uGravity`.
- `uGravity` is a copy of the pull. It is not a second multiplier.
- prior holds remain: idx term inside the theta step (520), phi read-only (519).

## Enhancement this hop
- checker: `noteSessionGravityCopy` in `src/sessionGravityCopy.js`, compiled by `compileSessionStage521`.
- band: `compileSessionStages519to521` in `src/sessionStage521.js`.
- wired through `chatKernelNext.js` as `gravityCopyNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 522 hold major idx term as idx * 2, distinct from the theta 0.002 term.
- 523 hold minor as 3 + toroidalWeave * 2, unread by gravityPull.
- 524 hold infinity scale as major * 1.5, unread by the gravity copy.

Numeral `137451921129155521`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion.
