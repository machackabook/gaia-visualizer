# Stage 402 — hold default fallthrough on the torus tube radius (2026-10-03 23:06 CDT)

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
`case 'torus':` falls through `default:`. `noteSessionDefaultTubeHold` lives on gaia-visualizer and confirms:

- one body, not a second formula after `default`
- tube radius stays `major + minor * cos(phi)` on x and z
- y stays `minor * sin(phi) * sin(t * 0.5 + idx)` and does not use the tube radius
- major 10 / minor 3 / phi 0 / theta 0 → tube 13, x 13, z 0, y 0
- phi = π → tube 7, x 7
- theta = π/2 → x 0, z 13, tube still 13
- an unrecognized label uses this fallthrough; it does not open a fifth session case
- lemniscate `major * 1.5` and hamiltonian `hScale = major` stay on their own arms
- paste is not rewritten. No session case was added.

## Next
- 403 hold triangular sector snap independent of the y ripple
- 404 hold hamiltonian xz product `cos(theta * 3) * cos/sin(theta)` against hScale
- 405 hold an unrecognized geometry label off the session switch (fallthrough only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
