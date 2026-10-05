# Stage 420 — hamiltonian ignores phi (2026-10-04 20:09 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'hamiltonian'` sets `hScale = major`
- x/z use `cos(theta * 3)` with `cos(theta)` / `sin(theta)`
- y is `hScale * sin(theta * 3) + sin(t) * 2`
- this branch does not read `this.phi`

## Enhancement this hop
`noteSessionHamiltonianIgnoresPhi` and `compileSessionStage420` lock the branch:

- sample theta 0, t 0, major 10 → (x, y, z) = (10, 0, 0)
- crest theta π/2, t 0, major 10 → (x, y, z) = (0, -10, 0)
- phi unread (417), lerp 0.05 (418), and radii (419) stay on the same compile
- torus and infinity still read phi; the hold is branch-local
- paste is not rewritten. No session case was added.

## Next
- 421 infinity denom shared by x and z only
- 422 triangular sector snap stays `2π/3`
- 423 torus tube radius shared by x and z only

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154222`. No secrets.
