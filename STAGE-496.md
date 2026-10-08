# Stage 496 — hold theta step as (0.01 + idx * 0.002) * gravityPull (2026-10-08 12:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- theta step: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- coefficients stay the literals `0.01` and `0.002`. The step multiplies `state.gravityPull`. It does not hardcode pull.
- phi is not incremented in the session paste. Living path may still advance `phi += 0.007 * toroidalWeave` outside this paste.
- prior hold remains: infinity y and torus/default y share `minor * sin(phi) * sin(t * 0.5 + idx)` and do not read tube radius.

## Enhancement this hop
- checker: `noteSessionThetaStep` in `src/sessionThetaStep.js`, compiled by `compileSessionStage496`.
- stage 481 still holds theta as the only angle advance. This hop pins the coefficient form and the gravity multiplier.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 497 hold lerp alpha as the literal 0.05.
- 498 hold lemniscate scale as `major * 1.5`, unread by minor.
- 499 hold default as sharing the torus tube, not a fifth session case.

Numeral `137451921129154496`.
