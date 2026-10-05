# Stage 424 — infinity y stays the shared tube (2026-10-05 10:12 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- `case 'infinity'` still sets `scale = major * 1.5` and `denom = 1 + sin(theta)^2`
- x and z stay on the lemniscate: `(scale * cos(theta)) / denom` and `(scale * sin(theta) * cos(theta)) / denom`
- y is `minor * sin(phi) * sin(t * 0.5 + idx)` — the same shared tube height as torus/default
- y is not divided by `denom` and is not multiplied by `scale`

## Enhancement this hop
`noteSessionInfinitySharedTube` and `compileSessionStage424` lock the branch:

- theta π/4, phi 0, major 10, minor 3, t 0, idx 0 → y = 0 (tube flat; lemniscate still owns x and z)
- theta π/4, phi π/2, t π/2, idx 1 → y equals `sharedTubeHeight` and does not equal `(scale * sin(phi)) / denom`
- phi unread (417), lerp 0.05 (418), radii (419), hamiltonian ignores phi (420), infinity denom on x and z only (421), triangular sector snap (422), and torus tube radius (423) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 425 triangular y stays the idx sector and is not folded into `theta * 5`
- 426 hamiltonian y lift `sin(t) * 2` stays independent of `hScale`
- 427 lerp alpha stays 0.05 and does not scale with `gravityPull`

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-ledger-cycle.
Numeral `137451921129154424`. No secrets.
