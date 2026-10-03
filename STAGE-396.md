# Stage 396 — hold hamiltonian lift sin(t) * 2 (2026-10-03 17:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- hamiltonian y is `hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)`
- the additive lift is `sin(t) * 2` and does not take `idx`, `phi`, or `minor`
- infinity y and torus y stay `minor * sin(phi) * sin(t * 0.5 + idx)`
- triangular y stays `(idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionHamiltonianLiftHold` pins the additive lift. It does not rewrite the paste and does not add a session case. Stage 393 already held the frequency-3 vertex map; this hop holds the time lift beside it.

- `t = 0`, `theta = 0`, `major = 10` keeps lift `0` and y `0`
- `t = π/2`, `theta = 0`, `major = 10` keeps lift `2` and y `2`
- `t = 3π/2`, `theta = 0` keeps lift `-2`
- changing major does not change the lift amplitude (still `2`)
- `theta = π/6`, `t = π/2`, `major = 10` keeps vertex `10` and y `12`
- infinity, torus, and triangular arms do not match this expression

## Next
- 397 hold triangular lane `(idx % 3 - 1) * major * 0.5`
- 398 hold lemniscate scale `major * 1.5`
- 399 hold torus tube radius `major + minor * cos(phi)` against the shared y

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
