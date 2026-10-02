# Stage 368 — session hamiltonian ignores phi and minor (2026-10-01 20:08 CDT)

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
Hamiltonian case only. `noteSessionHamiltonianIgnore` confirms the paste sets `hScale = major`, then maps x/z on `cos(theta*3)` and y as `hScale * sin(theta*3) + sin(t) * 2`. `phi` is unread. `minor` is unread. The Y `* 2` is a constant, not the tube radius. Living `hamiltonianPath` already matches. The paste is not rewritten. No session case was added.

## Next
- 369 session torus reuses the same phi in cos and both sin terms (document only)
- 370 session triangular floor snaps theta to 2π/3 (document only)
- 371 session infinity y shares the torus tube formula `minor * sin(phi) * sin(t * 0.5 + idx)` (document only)

Numeral `137451921129154222`. No secrets.
