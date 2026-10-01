# Stage 366 — session infinity denom always >= 1 (2026-10-01 18:07 CDT)

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
Infinity denominator only. `noteSessionInfinityDenom` confirms the paste uses `denom = 1 + Math.pow(Math.sin(this.theta), 2)` and divides x and z by it. `sin^2` is in `[0, 1]`, so denom stays in `[1, 2]` and cannot be zero. The paste is not rewritten. No session case was added.

## Next
- 367 session triangular y uses idx % 3 (document only; no lattice rewrite)
- 368 session hamiltonian ignores both phi and minor (document only; no paste rewrite)
- 369 session torus reuses the same phi in cos and both sin terms (document only)

Numeral `137451921129154222`. No secrets.
