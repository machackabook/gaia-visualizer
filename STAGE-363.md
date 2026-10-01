# Stage 363 — residual session Vector3 allocation note (2026-10-01 15:06 CDT)

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
`noteSessionVector3Alloc` confirms the pasted hot path still constructs `THREE.Vector3` every frame at alpha `0.05`. Living path reuses a scratch target. No session case was added.

## Next
- 364 session major-clamp gap at node cap (document only)
- 365 session phi still not advanced (document only)
- 366 session infinity denom is always >= 1 (document only)

Numeral `137451921129154222`. No secrets.
