# Stage 489 — hold torus tube (major + minor * cos(phi)) on x and z only (2026-10-07 22:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `case 'torus':` is immediately followed by `default:` with no break between them.
- x is `(major + minor * Math.cos(this.phi)) * Math.cos(this.theta)`.
- z is `(major + minor * Math.cos(this.phi)) * Math.sin(this.theta)`.
- y stays `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` and does not use the tube sum.
- major 10, minor 3, phi 0, theta 0 keeps tube `13`, x `13`, z `0`.

## Enhancement this hop
- checker: `noteSessionTorusTube` in `src/sessionTorusTube.js`, compiled by `compileSessionStage489`.
- ok only if x and z share the tube and y does not.
- paste not rewritten. No fifth session case. No secrets.
- waterfall seat this hour is continuity-ledger-cycle hop 510. This file is the geometry compile, not a second waterfall hop.

## Next
- 490 hold hamiltonian lift `sin(t) * 2` unread by `hScale`.
- 491 hold minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block.
- 492 hold `uTime` then `uGravity` as the only material writes.

Numeral `137451921129154222`.
