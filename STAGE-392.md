# Stage 392 — hold lemniscate denom 1 + sin(theta)^2 (2026-10-03 12:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- infinity arm: `denom = 1 + Math.pow(Math.sin(this.theta), 2)`
- `x = (scale * cos(theta)) / denom`, `z = (scale * sin(theta) * cos(theta)) / denom`, `scale = major * 1.5`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionLemniscateDenomHold` pins the infinity-arm denominator. It does not rewrite the paste and does not add a session case.

- `theta = 0`, `major = 10` keeps `denom = 1`, `scale = 15`, `x = 15`, `z = 0`
- `theta = π/2` keeps `denom = 2`, `x = 0`, `z = 0`
- `theta = π/4` keeps `denom = 1.5`
- lane `idx = 1` (`major = 12`), `theta = 0` keeps `scale = 18`, `x = 18`
- y is `minor * sin(phi) * sin(t * 0.5 + idx)` and does not read denom
- sampled range stays in `[1, 2]`, so the lemniscate division cannot hit zero

## Next
- 393 hold hamiltonian frequency-3 vertex map (`theta * 3`)
- 394 hold triangular sector angle `floor(theta / (2π/3)) * (2π/3)`
- 395 hold infinity y shared with torus y

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
