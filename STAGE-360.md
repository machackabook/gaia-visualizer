# Stage 360 — compiled next stages (2026-10-01 12:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only (not in the session switch).

## Enhancement this hop
Session phi-gap report only. `reportSessionPhiGap` records that the pasted `update(t)` reads `this.phi` on infinity and torus, uses `toroidalWeave` for minor radius, and does not advance phi. Living path keeps `phi += 0.007 * toroidalWeave`. No session case was added.

## Next
- 361 instance-band health sample (4096–16384) without changing the session switch
- 362 weave-slider public-band bind check
- 363 residual session Vector3 allocation note (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
