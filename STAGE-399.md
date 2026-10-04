# Stage 399 — hold torus tube radius major + minor * cos(phi) (2026-10-03 20:08 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- torus (and default) x/z share `tubeRadius = major + minor * cos(phi)`
- shared y is `minor * sin(phi) * sin(t * 0.5 + idx)` and does not use tubeRadius
- infinity scale `major * 1.5` from stage 398 stays on that arm only
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionTorusTubeRadiusHold` pins the tube radius against the shared y. It does not rewrite the paste and does not add a session case. Stage 388 already documented the radial identity; this hop holds the radius itself off y.

- major 10, minor 3, phi 0 keeps tubeRadius `13` (x `13`, z `0`, y `0`)
- phi = π/2 keeps tubeRadius `10` (cos term vanishes)
- phi = π keeps tubeRadius `7`
- major 12, minor 5, phi 0 keeps tubeRadius `17`
- tube radius ignores t, idx, theta, and gravityPull
- y can move with t and idx while the radius stays put

## Next
- 400 hold triangular ripple `sin(t) * minor` separate from the lane
- 401 hold hamiltonian `hScale = major` (not the lemniscate 1.5)
- 402 hold default fallthrough sharing the torus tube radius

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
