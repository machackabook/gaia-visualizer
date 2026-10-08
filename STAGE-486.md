# Stage 486 — hold lemniscate z as scale * sin(theta) * cos(theta) / denom (2026-10-07 21:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- infinity arm: `const scale = major * 1.5` then `const denom = 1 + Math.pow(Math.sin(this.theta), 2)`.
- x is `(scale * Math.cos(this.theta)) / denom`.
- z is `(scale * Math.sin(this.theta) * Math.cos(this.theta)) / denom` — same `denom`, crossing factor `sin * cos`.
- y stays `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)` and does not take `denom`.
- theta π/4, major 10 → scale 15, factor 0.5, denom 1.5, z 5. Theta 0 and π/2 keep z at 0.

## Enhancement this hop
- checker: `noteSessionLemniscateZ` in `src/sessionLemniscateZ.js`, compiled by `compileSessionStage486`.
- ok only if x and z share `denom` and the y line does not read `denom`.
- paste not rewritten. No session case added. No secrets.
- waterfall seat this hour is continuity-ledger-cycle hop 507, as named by The-Hive stage 506. This file is the geometry compile, not a second waterfall hop.

## Next
- 487 hold triangular y unread by `tAngle`.
- 488 hold session lerp allocating `new THREE.Vector3` at alpha `0.05`. Living path keeps `_kernelTarget`.
- 489 hold torus tube `(major + minor * cos(phi))` on x and z only.

Numeral `137451921129154222`.
