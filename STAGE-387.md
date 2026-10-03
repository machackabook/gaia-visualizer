# Stage 387 — hold the four-case switch unless the paste adds a case (2026-10-03 10:08 CDT)

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
Switch only. `noteSessionSwitchHold` confirms the session geometry set:

- required cases: `infinity`, `hamiltonian`, `triangular`, `torus`
- `case 'torus':` falls through `default:`
- extras `klein` / `hopf` / `figure8` / `trefoil` / `mobius` are absent from the paste
- no fifth session case was added
- paste is not rewritten

## Next
- 388 document tube identity `x^2 + z^2 = (major + minor * cos(phi))^2`
- 389 hold lerp alpha `0.05` unless the paste changes
- 390 hold theta step `(0.01 + idx * 0.002) * gravityPull`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
