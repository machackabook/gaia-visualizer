# Gaia visualizer + The-Hive — compiled stages

Band `426-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 425 holds triangular y on the idx sector. Stage 426 holds the hamiltonian additive lift `sin(t) * 2` independent of `hScale`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–425 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 426 | Hold hamiltonian y lift independent of hScale (`noteSessionHamiltonianLiftIndependent`, `compileSessionStage426`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 427 | both | Hold lerp alpha `0.05` not scaled by `gravityPull`. |
| 428 | both | Hold major `10 + idx * 2` not scaled by `gravityPull`. |
| 429 | both | Hold infinity y shared with torus y, not taking lemniscate `scale`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 426, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
