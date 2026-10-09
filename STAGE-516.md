# Stage 516 — hold lerp alpha as the literal 0.05 (2026-10-09 09:08 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- session lerp stays `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`.
- the alpha is the literal `0.05`. It does not read `gravityPull`.
- the allocation inside lerp stays the session contract. Living path may still reuse `_kernelTarget`.
- prior hold remains: lemniscate scale unread by minor (515).

## Enhancement this hop
- checker: `noteSessionLerpAlphaLiteral` in `src/sessionLerpAlphaLiteral.js`, compiled by `compileSessionStage516`.
- band: `compileSessionStages515to517` in `src/sessionStage517.js`.
- wired through `chatKernelNext.js` as `lerpAlphaLiteralNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 517 hold theta step as the only angle write.
- 518 hold gravityPull as the theta-step multiplier only.
- 519 hold phi read-only in the session paste.

Numeral `137451921129155517`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion.
