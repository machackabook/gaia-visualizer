# Gaia visualizer + The-Hive — compiled stages

Band `456-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 456 holds the theta step as the only `gravityPull` product. Stage 455 holds triangular `tAngle` as `floor(theta / (2π/3)) * (2π/3)`. Stage 454 holds infinity z as `scale * sin(theta) * cos(theta) / denom`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–455 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 456 | Hold theta step as the only `gravityPull` product (`noteSessionThetaGravityPullHold`, `compileSessionStage456`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 457 | both | Hold infinity y identical to torus y, no scale or denom. |
| 458 | both | Hold major and minor assigned before the geometry switch. |
| 459 | both | Hold `uGravity` as a copy of `gravityPull`, not a product. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 456, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
