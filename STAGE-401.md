# Stage 401 — hold hamiltonian hScale = major (2026-10-03 22:06 CDT)

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
Hamiltonian scale is the bare major. `noteSessionHamiltonianScaleHold` lives on gaia-visualizer and confirms:

- `const hScale = major` (not `major * 1.5`)
- infinity keeps `const scale = major * 1.5` on its own arm
- major 10 → hScale 10, lemniscate scale 15; theta 0 → x 10, z 0, vertex 0
- major 14 → hScale 14, not 21
- theta = π/3, major 10 → x -5 (freq cos(π) * cos(π/3))
- theta = π/2, major 10 → x 0, z 0, vertex -10
- hScale ignores minor, phi, idx, and gravityPull
- stage 396 lift `sin(t) * 2` is unchanged and is not scaled by 1.5
- paste is not rewritten. No session case was added.

## Next
- 402 hold default fallthrough sharing the torus tube radius
- 403 hold triangular sector snap independent of the y ripple
- 404 hold hamiltonian xz product `cos(theta * 3) * cos/sin(theta)` against hScale

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
