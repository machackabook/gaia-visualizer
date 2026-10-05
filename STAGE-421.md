# Stage 421 — infinity denom shared by x and z only (2026-10-04 21:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'infinity'` sets `scale = major * 1.5`
- `denom = 1 + sin(theta)^2`
- x and z both divide by that denom
- y is `minor * sin(phi) * sin(t * 0.5 + idx)` and is not divided

## Enhancement this hop
`noteSessionInfinityDenomOnly` and `compileSessionStage421` lock the branch:

- theta 0, major 10, minor 3, phi 0, t 0 → denom 1, (x, y, z) = (15, 0, 0)
- theta π/4, same radii → denom 1.5; y still does not use denom
- phi unread (417), lerp 0.05 (418), radii (419), and hamiltonian ignores phi (420) stay on the same compile
- torus still uses phi on the tube; the denom hold is branch-local to infinity
- paste is not rewritten. No session case was added.

## Next
- 422 triangular sector snap stays `2π/3`
- 423 torus tube radius shared by x and z only
- 424 infinity y stays the shared tube and is not folded into the lemniscate map

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
