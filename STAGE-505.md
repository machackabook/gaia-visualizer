# Stage 505 — hold major assigned before the switch (2026-10-08 20:09 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- radii block still sets `let major = 10 + (this.idx * 2);` before `switch(targetState.geometry)`
- sample: idx `4`, major `18`. `assignedBeforeSwitch` true.
- prior holds remain: lerp alpha is the literal `0.05`; hamiltonian lift is unread by hScale

## Enhancement this hop
- checker: `noteSessionMajorBeforeSwitch` in `src/sessionMajorBeforeSwitch.js`, compiled by `compileSessionStage505`.
- band: `compileSessionStages503to505` in `src/sessionStage505.js`.
- wired through `chatKernelNext.js` as `majorBeforeSwitchNote`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 506 hold minor = `3 + toroidalWeave * 2` beside major, before the switch.
- 507 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.
- 508 hold uniform writes as `uTime` then `uGravity` only.

Numeral `137451921129154505`.
Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle, hamiltonian-incursion.
