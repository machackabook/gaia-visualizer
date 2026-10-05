# Stage 426 — hamiltonian y lift stays independent of hScale (2026-10-05 13:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'hamiltonian'` still sets `hScale = major` (not the lemniscate `major * 1.5`)
- x/z stay `hScale * cos(theta * 3) * cos/sin(theta)`
- y is `hScale * sin(theta * 3) + (sin(t) * 2)`
- the additive lift is `sin(t) * 2` and does not take `hScale`, `idx`, `phi`, or `minor`

## Enhancement this hop
`noteSessionHamiltonianLiftIndependent` and `compileSessionStage426` lock the branch:

- theta 0, t 0, major 10 → base 0, lift 0, y = 0
- theta 0, t π/2, major 10 → base 0, lift 2, y = 2
- theta π/6, t π/2, major 10 → base 10, lift 2, y = 12
- same angle and time at major 20 → base 20, lift still 2, y = 22 (lift does not double with hScale)
- triangular idx sector (425), infinity shared tube (424), torus tube radius (423), and hamiltonian ignores phi (420) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 427 lerp alpha stays `0.05` and does not scale with `gravityPull`
- 428 major stays `10 + idx * 2` and is not scaled by `gravityPull`
- 429 infinity y stays shared with torus y and does not take lemniscate `scale`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154426`. No secrets.
