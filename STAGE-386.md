# Stage 386 — hold session torus y unless the paste changes (2026-10-03 10:08 CDT)

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
Torus / default arm only. `noteSessionTorusHold` re-confirms the stage 378 lift and does not rewrite it:

- `y = minor * sin(phi) * sin(t * 0.5 + idx)`
- equator `phi = 0` keeps `y = 0`
- time node `phi = π/2`, `t = 0`, `idx = 0` keeps `y = 0`
- crest `phi = π/2`, `t = π`, `idx = 0`, `minor = 3` keeps `y = 3`
- lane `idx = 1`, `minor = 5`, `phi = π/2`, `t = π` keeps `y = 5 * sin(π/2 + 1)`
- infinity uses the same y
- major and theta do not enter y
- paste is not rewritten. No session case was added.

## Next
- 387 hold the four-case switch unless the paste adds a case
- 388 document tube identity `x^2 + z^2 = (major + minor * cos(phi))^2`
- 389 hold lerp alpha `0.05` unless the paste changes

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
