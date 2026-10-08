# Stage 490 — hold hamiltonian lift `sin(t) * 2` unread by `hScale` (2026-10-07 23:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `case 'hamiltonian'`: `hScale = major`.
- x/z stay `hScale * cos(theta * 3) * cos/sin(theta)` and do not read phi or minor.
- y is `hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)`.
- the lift term `(Math.sin(t) * 2)` does not multiply by `hScale`.
- sample: hScale 10 or 100, theta 0, t π/2 keeps lift `2` and y `2`.

## Enhancement this hop
- checker: `noteSessionHamiltonianLift` in `src/sessionHamiltonianLift.js`, compiled by `compileSessionStage490`.
- ok only if the lift term is present, the arm term still reads hScale, and the lift is not scaled by hScale.
- paste not rewritten. No fifth session case. No secrets.
- geometry compile, not a second waterfall seat. Waterfall next after ENCLAVE hop 511 is continuity-engine-ssos.

## Next
- 491 hold minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block.
- 492 hold `uTime` then `uGravity` as the only material writes.
- 493 hold infinity denom `1 + sin(theta)^2` shared by x and z only.

Numeral `137451921129154490`.
