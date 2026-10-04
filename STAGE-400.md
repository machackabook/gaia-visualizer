# Stage 400 — hold triangular ripple sin(t) * minor (2026-10-03 21:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- triangular y is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- the ripple is `sin(t) * minor` and does not take idx, major, theta, or phi
- the lane `(idx % 3 - 1) * major * 0.5` from stage 397 stays beside the ripple and does not take t
- torus tube radius from stage 399 stays on that arm only
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionTriangularRippleHold` pins the ripple off the lane. It does not rewrite the paste and does not add a session case.

- idx 0, major 10, t 0, minor 3 keeps lane `-5`, ripple `0`, y `-5`
- idx 1, t = π/2, minor 3 keeps lane `0`, ripple `3`, y `3`
- idx 2 at the same crest keeps lane `5` and the same ripple `3` (y `8`)
- idx 1, t = 3π/2, minor 3 keeps ripple `-3` even if major is 14
- idx 2, major 14, t 0, minor 5 keeps lane `7` and ripple `0`
- idx 3 wraps to lane `-5`; a minor-4 crest adds ripple `4` (y `-1`)
- hamiltonian lift stays `sin(t) * 2`, not `sin(t) * minor`

## Next
- 401 hold hamiltonian `hScale = major` (not the lemniscate 1.5)
- 402 hold default fallthrough sharing the torus tube radius
- 403 hold triangular sector snap independent of the y ripple

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
