# Stage 401 — hold hamiltonian hScale = major (2026-10-04 16:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- hamiltonian sets `const hScale = major` (factor 1, not the lemniscate 1.5)
- infinity scale `major * 1.5` from stage 398 stays on that arm only
- hamiltonian lift stays `sin(t) * 2` and does not take minor or hScale
- triangular ripple `sin(t) * minor` from stage 400 stays on that arm only
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionHamiltonianScaleHold` pins `hScale = major` off the lemniscate factor. It does not rewrite the paste and does not add a session case.

- major 10, theta 0, t 0 keeps hScale `10` (x `10`, z `0`, y `0`); lemniscate scale would be `15`
- theta = π/2 keeps hScale `10` while the triple-angle ring vanishes (x `0`, z `0`, y `-10`)
- major 14 keeps hScale `14` against a lemniscate scale of `21`
- t = π/2 adds lift `2` without changing hScale
- hScale ignores minor, phi, t, and gravityPull
- triangular and torus arms do not declare hScale

## Next
- 402 hold default fallthrough sharing the torus tube radius
- 403 hold triangular sector snap independent of the y ripple
- 404 hold hamiltonian lift `sin(t) * 2` independent of hScale

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
