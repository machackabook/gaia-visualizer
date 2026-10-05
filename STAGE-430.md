# Stage 430 — session lerp allocates a fresh THREE.Vector3 (2026-10-05 16:07 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- session call remains `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)`
- the fresh allocation is the contract of the raw paste, not a bug to rewrite in-session
- enhanced / live path may reuse `_kernelTarget` / `_target`. That reuse is not folded into the four-case chat switch.

## Enhancement this hop
`noteSessionLerpAlloc` and `compileSessionStage430` lock the allocation:

- session text contains `new THREE.Vector3(x, y, z)` inside lerp
- session text does not lerp a reused `_kernelTarget` or `_target`
- enhanced path is allowed to reuse a target
- infinity shared y (429), major unscaled (428), and lerp alpha (427) stay on the same compile
- paste is not rewritten. No session case was added.

## Next
- 431 hold minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block
- 432 hold phi unread by the hamiltonian arm (x/z/y use theta and t only)
- 433 hold the triangular sector snap `floor(theta / (2π/3)) * (2π/3)` independent of gravityPull

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat.
Numeral `137451921129154430`. No secrets.
