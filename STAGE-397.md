# Stage 397 — hold triangular lane (idx % 3 - 1) * major * 0.5 (2026-10-03 18:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- triangular y is `(this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor`
- the lane term is `(idx % 3 - 1) * major * 0.5` and does not take theta, phi, or t
- the ripple `sin(t) * minor` stays beside the lane and is not part of this hold
- infinity y and torus y stay `minor * sin(phi) * sin(t * 0.5 + idx)`
- hamiltonian y stays `hScale * sin(theta * 3) + sin(t) * 2`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionTriangularLaneHold` pins the lane. It does not rewrite the paste and does not add a session case. Stage 394 already held the sector snap; this hop holds the y lane beside it.

- idx 0, major 10, t 0 keeps lane `-5` (bin 0)
- idx 1, major 10, t 0 keeps lane `0` (bin 1)
- idx 2, major 10, t 0 keeps lane `5` (bin 2)
- idx 3 wraps to bin 0 and the same lane as idx 0
- idx 2, major 14 keeps lane `7` (scales with major, not with minor)
- idx 1, t = π/2, minor 4 keeps lane `0` and ripple `4`
- infinity, hamiltonian, and torus arms do not match this expression

## Next
- 398 hold lemniscate scale `major * 1.5`
- 399 hold torus tube radius `major + minor * cos(phi)` against the shared y
- 400 hold triangular ripple `sin(t) * minor` separate from the lane

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
