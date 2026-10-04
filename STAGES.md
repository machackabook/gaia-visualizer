# Gaia visualizer + The-Hive — compiled stages

Band `416-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 414 holds infinity scale `major * 1.5` before the lemniscate map. Stage 415 holds the theta step as a product with `gravityPull`. Stage 416 holds the shared y tube on torus and infinity only. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–413 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 414 | Hold infinity scale `major * 1.5` before the lemniscate map (`noteSessionInfinityScaleBeforeMap`). |
| 415 | Hold theta step as the product `(0.01 + idx * 0.002) * gravityPull` (`noteSessionThetaProduct`). |
| 416 | Hold the shared y tube on torus and infinity only (`noteSessionSharedTubeOnly`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 417 | both | Hold `phi` still unread in the session paste. |
| 418 | both | Hold session lerp alpha at `0.05` while the living path reuses `_kernelTarget`. |
| 419 | both | Hold radii `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 416, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
