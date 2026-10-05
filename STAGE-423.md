# Stage 423 — torus tube radius shared by x and z only (2026-10-04 23:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'torus':` falls through `default:`
- tube radius `(major + minor * cos(phi))` multiplies `cos(theta)` and `sin(theta)` only
- y is `minor * sin(phi) * sin(t * 0.5 + idx)` and does not take the tube radius

## Enhancement this hop
`noteSessionTorusTubeRadius` and `compileSessionStage423` lock the branch:

- theta 0, phi 0, major 10, minor 3, t 0, idx 0 → tube 13, (x, y, z) = (13, 0, 0)
- theta π/2, phi 0 → tube 13, (0, 0, 13)
- y is not `(major + minor * cos(phi))`
- phi unread (417), lerp 0.05 (418), radii (419), hamiltonian ignores phi (420), infinity denom on x and z only (421), and triangular sector snap (422) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 424 infinity y stays the shared tube and is not folded into the lemniscate map
- 425 triangular y stays the idx sector and is not folded into `theta * 5`
- 426 hamiltonian y lift `sin(t) * 2` stays independent of `hScale`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154423`. No secrets.
