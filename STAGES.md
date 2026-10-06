# Gaia visualizer + The-Hive — compiled stages

Band `459-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 459 holds `uGravity` as a copy of `gravityPull`, not a product. Stage 457 holds infinity y identical to torus y, with no scale, denom, or major. Stage 456 holds the theta step as the only `gravityPull` product. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–456 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 457 | Hold infinity y identical to torus y (`noteSessionInfinityTorusY`, numeric shared-tube sample). |
| 458 | Hold major and minor assigned before the geometry switch (`noteSessionRadiiBeforeSwitch`). |
| 459 | Hold `uGravity` as a copy of `gravityPull` (`noteSessionUGravityCopy`, `compileSessionStage459`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 460 | both | Hold hamiltonian y lift `sin(t)*2` independent of hScale. |
| 461 | both | Hold lemniscate denom shared by x and z only. |
| 462 | both | Hold default fallthrough on the torus tube, no fifth case. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 459, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
