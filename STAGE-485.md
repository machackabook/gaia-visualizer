# Stage 485 — hold hamiltonian arm unread by phi and minor (2026-10-07 20:06 CDT)

Connecting chat re-pasted `update(t)` (infinity | hamiltonian | triangular | torus).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `case 'hamiltonian'` sets `const hScale = major` (factor 1, not the lemniscate 1.5).
- x/z are `hScale * cos(theta * 3) * cos/sin(theta)`.
- y is `hScale * sin(theta * 3) + (Math.sin(t) * 2)`. The lift does not take `hScale`.
- the arm does not read `this.phi` or `minor`.

## Enhancement this hop
- checker: `noteSessionHamiltonianUnread` in `src/sessionHamiltonianUnread.js`, compiled by `compileSessionStage485`.
- numeric sample uses `hScale = 10` and lift `2`. Ok only if phi and minor are absent from the arm.
- paste not rewritten. No secrets.
- waterfall seat this hour is The-Hive hop 506. This file is the geometry compile, not a second waterfall hop.

## Next
- 486 hold lemniscate z as `scale * sin(theta) * cos(theta) / denom`.
- 487 hold triangular y unread by `tAngle`.
- 488 hold session lerp allocating `new THREE.Vector3` at alpha `0.05`. Living path keeps `_kernelTarget`.

Numeral `137451921129154222`.
