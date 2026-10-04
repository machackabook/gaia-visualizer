# Stage 398 — hold lemniscate scale major * 1.5 (2026-10-03 19:09 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- infinity arm sets `const scale = major * 1.5` before the Bernoulli denom
- x and z both divide by `1 + sin(theta)^2`; y does not use scale
- hamiltonian keeps `hScale = major` (no 1.5)
- triangular lane from stage 397 stays `(idx % 3 - 1) * major * 0.5`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionLemniscateScaleHold` pins the infinity scale. It does not rewrite the paste and does not add a session case. Stage 374 already noted the same factor; this hop holds it beside the 392 denom hold.

- major 10 keeps scale `15`; theta 0 keeps x `15`, z `0`, denom `1`
- theta = π/2 keeps scale `15` and denom `2`, so x and z are `0`
- major 12 keeps scale `18`; major 14 keeps scale `21`
- scale ignores minor, idx, phi, t, and gravityPull
- y stays `minor * sin(phi) * sin(t * 0.5 + idx)`
- hamiltonian and triangular arms do not match `major * 1.5`

## Next
- 399 hold torus tube radius `major + minor * cos(phi)` against the shared y
- 400 hold triangular ripple `sin(t) * minor` separate from the lane
- 401 hold hamiltonian `hScale = major` (not the lemniscate 1.5)

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
