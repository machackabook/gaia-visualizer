# Stage 522 — hold major idx term as idx * 2, distinct from the theta 0.002 term (2026-10-09 13:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- major stays `let major = 10 + (this.idx * 2);`
- theta step still uses `this.idx * 0.002` inside the parentheses.
- sample: idx `4`, major `18`, theta idx term `0.008`. Those terms do not alias.

## Enhancement this hop
- checker: `noteSessionMajorIdxDistinct` in `src/sessionMajorIdxDistinct.js`, compiled by `compileSessionStage522`.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 523 hold minor as `3 + toroidalWeave * 2`, unread by gravityPull.
- 524 hold infinity scale as `major * 1.5`, unread by the gravity copy.

Numeral `137451921129155522`.
