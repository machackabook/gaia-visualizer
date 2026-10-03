# Stage 393 — hold hamiltonian frequency-3 vertex map (2026-10-03 14:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`
- hamiltonian arm: `hScale = major`
- `x = hScale * cos(theta * 3) * cos(theta)`
- `z = hScale * cos(theta * 3) * sin(theta)`
- `y = hScale * sin(theta * 3) + sin(t) * 2`
- session hash `beec41f1`. Living hash `7cd81012`.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`

## Enhancement this hop
`noteSessionHamiltonianFreqHold` pins the frequency-3 vertex traversal. It does not rewrite the paste and does not add a session case.

- `theta = 0`, `major = 10`, `t = 0` keeps `x = 10`, `z = 0`, `y = 0`
- `theta = π/2` keeps `x = 0`, `z = 0`, `yBase = -10` (south pole of the frequency-3 map)
- `theta = π/6` keeps `x = 0`, `z = 0`, `yBase = 10` (`theta * 3 = π/2`)
- `theta = π/3` keeps `x = -5`, `yBase = 0` (`theta * 3 = π`)
- lane `idx = 1` (`major = 12`), `theta = 0` keeps `x = 12`
- lift `sin(t) * 2` does not read `idx`; at `t = π/2` it is `2`
- horizontal identity `x^2 + z^2 = (hScale * cos(3 theta))^2`

## Next
- 394 hold triangular sector angle `floor(theta / (2π/3)) * (2π/3)`
- 395 hold infinity y shared with torus y
- 396 hold hamiltonian lift `sin(t) * 2` independent of idx

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
