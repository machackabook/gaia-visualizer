# Stage 487 — hold triangular y unread by tAngle (2026-10-07 22:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- triangular snap stays `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));`
- x/z read `tAngle` plus the weave `minor * cos/sin(theta * 5)`.
- y stays `(this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor` and does not read `tAngle`.
- idx 2, major 10, t 0, minor 4 keeps lane `5`, ripple `0`, y `5`.

## Enhancement this hop
- checker: `noteSessionTriangularYUnread` in `src/sessionTriangularYUnread.js`, compiled by `compileSessionStage487`.
- ok only if the snap is present and the y line does not contain `tAngle`.
- paste not rewritten. No session case added. No secrets.
- waterfall seat this hour is continuity-ledger-cycle hop 510, named by living-bibliography hop 509. This file is the geometry compile, not a second waterfall hop.

## Next
- 488 hold session lerp allocating `new THREE.Vector3` at alpha `0.05`. Living path keeps `_kernelTarget`.
- 489 hold torus tube `(major + minor * cos(phi))` on x and z only.
- 490 hold hamiltonian lift `sin(t) * 2` unread by `hScale`.

Numeral `137451921129154222`.
