# Stage 425 — triangular y stays the idx sector (2026-10-05 12:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'triangular'` still snaps `tAngle = floor(theta / (2π/3)) * (2π/3)`
- x and z still add the high-frequency ripple `minor * cos(theta * 5)` and `minor * sin(theta * 5)`
- y is `(idx % 3 - 1) * major * 0.5 + sin(t) * minor`
- y is not folded into `theta * 5`

## Enhancement this hop
`noteSessionTriangularIdxSector` and `compileSessionStage425` lock the branch:

- theta 0, t 0, idx 0, major 10, minor 3 → sector −5, lift 0, y = −5 (not the flat `sin(theta * 5)` ripple, which is 0)
- theta π/5, t π/2, idx 2, major 10, minor 3 → sector 5, lift 3, y = 8, and y does not equal `minor * sin(theta * 5)`
- infinity shared tube (424), torus tube radius (423), triangular sector snap (422), infinity denom on x and z only (421), and hamiltonian ignores phi (420) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 426 hamiltonian y lift `sin(t) * 2` stays independent of `hScale`
- 427 lerp alpha stays 0.05 and does not scale with `gravityPull`
- 428 major stays `10 + idx * 2` and is not scaled by `gravityPull`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154425`. No secrets.
