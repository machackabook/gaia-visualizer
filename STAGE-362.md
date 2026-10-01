# Stage 362 — weave-slider public-band bind check (2026-10-01 14:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- geometries: infinity (lemniscate) | hamiltonian | triangular | torus default
- session paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`
- session hash `beec41f1` held. Living hash `7cd81012` held.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only (not in the session switch).

## Enhancement this hop
`sampleWeaveSliderBind` confirms 19 HUD panels, lanes 0–3 map only to the four session geometries, values stay in [0, 2], and the public band is `hamiltoniansingularity.ai`. Session minor at weave 1 remains 5. No session case was added.

## Next
- 363 residual session Vector3 allocation note (document only)
- 364 session major-clamp gap at node cap (document only)
- 365 session phi still not advanced (document only)

Numeral `137451921129154222`. No secrets.
