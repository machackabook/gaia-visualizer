# Stage 493 — hold infinity denom 1 + sin(theta)^2 shared by x and z only (2026-10-08 10:07 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm: `const denom = 1 + Math.pow(Math.sin(this.theta), 2);`
- x and z both divide by that denom.
- infinity y stays `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` and does not read denom.
- sample: theta 0 → denom 1. theta pi/2 → denom 2.

## Enhancement this hop
- checker: `noteSessionInfinityDenom` in `src/sessionInfinityDenom.js`, compiled by `compileSessionStage493`.
- ok only if the denom shape holds, x and z both divide by it, and y does not.
- paste not rewritten. No fifth session case. No secrets.

## Next
- 494 hold triangular sector snap unread by the `theta * 5` weave.
- 495 hold shared y tube identical on infinity and torus, unread by tube radius.
- 496 hold theta step as `(0.01 + idx * 0.002) * gravityPull`.

Numeral `137451921129154493`.
