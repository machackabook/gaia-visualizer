# Gaia visualizer + The-Hive — compiled stages

Band `460-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 460 holds the hamiltonian y lift `(sin(t) * 2)` independent of `hScale`. Stage 459 holds `uGravity` as a copy of `gravityPull`, not a product. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–459 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 460 | Hold hamiltonian y lift `sin(t)*2` independent of hScale (`noteSessionHamiltonianYLift`, `compileSessionStage460`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 461 | both | Hold lemniscate denom shared by x and z only. |
| 462 | both | Hold default fallthrough on the torus tube, no fifth case. |
| 463 | both | Hold triangular tAngle as a floor snap to `2pi/3`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 460, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
