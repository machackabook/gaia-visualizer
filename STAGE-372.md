# Stage 372 — session default falls through to the torus body (2026-10-02 09:09 CDT)

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
Default arm only. `noteSessionTorusFallthrough` confirms `case 'torus'` has no body of its own:

- `case 'torus':` is immediately followed by `default:`
- shared body:
  - `x = (major + minor * cos(phi)) * cos(theta)`
  - `z = (major + minor * cos(phi)) * sin(theta)`
  - `y = minor * sin(phi) * sin(t * 0.5 + idx)`
- an unknown `targetState.geometry` also lands on that body
- `phi` is still not stepped in the paste

Living path already matches. The paste is not rewritten. No session case was added.

## Next
- 373 session triangular minor ripple keeps raw `theta * 5` (document only)
- 374 session infinity scale is `major * 1.5` with denom `1 + sin(theta)^2` (document only)
- 375 session hamiltonian y is `hScale * sin(theta * 3) + sin(t) * 2` (document only)

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets.
