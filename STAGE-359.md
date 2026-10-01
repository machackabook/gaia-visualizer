# Stage 359 — compiled next stages (2026-10-01 11:32 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only (not in the session switch).

## Enhancement this hop
Public-band fidelity sample after the signed frame. `samplePublicBandFidelity` checks the public envelope against the four session geometries, lerp `0.05`, uniforms, hash pins, no token, phi not advanced in the session paste, and finite sample points. Session switch is unchanged.

Phi is still not advanced in the session paste. Living path keeps `phi += 0.007 * toroidalWeave`.

## Next
- 360 session phi-gap report (document only; do not invent a session case)
- 361 instance-band health sample (4096–16384) without changing the session switch
- 362 weave-slider public-band bind check

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
