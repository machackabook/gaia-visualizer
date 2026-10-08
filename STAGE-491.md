# Stage 491 — hold minor = 3 + toroidalWeave * 2 as the only weave consumer (2026-10-08 09:08 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- radii assign before the switch:
  - `let major = 10 + (this.idx * 2);`
  - `let minor = 3 + (state.toroidalWeave * 2);`
- major does not read `toroidalWeave`.
- the radii block contains `toroidalWeave` once, on the minor line only.
- sample: idx 0 weave 0 → major 10, minor 3. idx 4 weave 1.5 → major 18, minor 6.

## Enhancement this hop
- checker: `noteSessionRadiiWeave` in `src/sessionRadiiWeave.js`, compiled by `compileSessionStage491`.
- ok only if both assignment shapes hold, major is weave-unread, and weave appears once in the radii block.
- paste not rewritten. No fifth session case. No secrets.
- geometry compile, not a second waterfall seat. Waterfall this hour is hamiltonian-incursion hop 491, named by continuity-engine-ssos hop 512.

## Next
- 492 hold `uTime` then `uGravity` as the only material writes.
- 493 hold infinity denom `1 + sin(theta)^2` shared by x and z only.
- 494 hold triangular sector snap unread by the `theta * 5` weave.

Numeral `137451921129154491`.
