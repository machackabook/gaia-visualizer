# Stage 394 — hold triangular sector angle (2026-10-03 15:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- triangular arm: `tAngle = floor(theta / (2π/3)) * (2π/3)`
- `x = major * cos(tAngle) + minor * cos(theta * 5)`
- `z = major * sin(tAngle) + minor * sin(theta * 5)`
- `y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionTriangularSectorHold` pins the 3-sector snap. It does not rewrite the paste and does not add a session case. Stage 370 already documented the floor; this hop holds the vertex identity.

- sector is `2π/3`
- `theta = 0`, `major = 10`, `minor = 3`, `idx = 1`, `t = 0` keeps bin `0`, vertex `(10, 0)`, y `0`
- just below `2π/3` stays bin `0`
- `theta = 2π/3` is bin `1`, vertex `(-5, 5√3)`
- `theta = 4π/3` is bin `2`, vertex `(-5, -5√3)`
- ripple stays on raw `theta * 5`, not `tAngle`
- `idx = 0` lane `-5`; `idx = 2` lane `+5` at major `10`
- lift `sin(t) * minor` at `t = π/2`, minor `3` is `3`

## Next
- 395 hold infinity y shared with torus y
- 396 hold hamiltonian lift `sin(t) * 2` independent of idx
- 397 hold triangular lane `(idx % 3 - 1) * major * 0.5`

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
