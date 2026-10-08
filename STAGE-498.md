# Stage 498 — hold lemniscate scale as `major * 1.5`, unread by minor (2026-10-08 14:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm: `const scale = major * 1.5;`
- x is `(scale * Math.cos(this.theta)) / denom`.
- z is `(scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom`.
- scale does not read `minor`. Infinity y still reads minor: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`.
- sample: major 10, minor 7 keeps scale `15` and `readsMinor` false.
- prior hold remains: lerp alpha is the literal `0.05`, unread by gravityPull.

## Enhancement this hop
- checker: `noteSessionLemniscateScale` in `src/sessionLemniscateScale.js`, compiled by `compileSessionStage498`.
- band: `compileSessionStages497to498` in `src/sessionStage498.js`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 499 hold default as sharing the torus tube, not a fifth session case.
- 500 hold phi still: the session paste does not increment phi.
- 501 hold infinity y as the shared tube, unread by scale.

Numeral `137451921129154498`.
