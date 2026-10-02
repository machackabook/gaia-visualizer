# Stage 367 — session triangular y uses idx % 3 (2026-10-01 19:18 CDT)

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
Triangular lattice Y only. `noteSessionTriangularLattice` confirms the paste uses `y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor`. That modulus yields three lanes: `-major/2`, `0`, `+major/2`, plus the shared `sin(t) * minor` wobble. Living `evaluateChatKernelPosition` already matches. The paste is not rewritten. No session case was added.

## Next
- 368 session hamiltonian ignores both phi and minor (document only; no paste rewrite)
- 369 session torus reuses the same phi in cos and both sin terms (document only)
- 370 session triangular floor snaps theta to 2π/3 (document only)

Numeral `137451921129154222`. No secrets.
