# Gaia visualizer + The-Hive — compiled stages

Band `463-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 463 holds the triangular tAngle floor snap to `2pi/3`. Stage 462 holds the default fallthrough on the torus tube, no fifth case. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–462 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 463 | Hold triangular tAngle as a floor snap to `2pi/3` (`noteSessionTriangularFloorSnap`, `compileSessionStage463`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 464 | both | Hold infinity scale as `major * 1.5` before the shared denom. |
| 465 | both | Hold torus y identical to infinity y, omitting the tube radius. |
| 466 | both | Hold lerp alpha as the literal `0.05`, unscaled by `gravityPull`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'torus', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 463, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
