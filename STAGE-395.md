# Stage 395 — hold infinity y shared with torus y (2026-10-03 16:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- infinity y and torus y are the same line:
  `y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
- hamiltonian y stays `hScale * sin(theta * 3) + sin(t) * 2`
- triangular y stays `(idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionInfinityYHold` pins the shared lift. It does not rewrite the paste and does not add a session case. Stage 386 already held torus y; this hop holds the identity with the infinity arm.

- `phi = 0` keeps y `0` (equator)
- `phi = π/2`, `t = 0`, `idx = 0` keeps y `0` (phase node)
- `phi = π/2`, `t = π`, `idx = 0`, `minor = 3` keeps y `3`
- `idx = 1`, `minor = 5`, `t = π`, `phi = π/2` keeps y `5 * sin(π/2 + 1)`
- major and theta stay out of this y
- hamiltonian and triangular do not match the shared expression

## Next
- 396 hold hamiltonian lift `sin(t) * 2` independent of idx
- 397 hold triangular lane `(idx % 3 - 1) * major * 0.5`
- 398 hold lemniscate scale `major * 1.5`

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
