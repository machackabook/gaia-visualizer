# Gaia visualizer + The-Hive — compiled stages

Band `440-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 440 holds lerp alpha at the literal `0.05`, not scaled by `gravityPull`. Stage 439 holds `default` falling through to the torus arm. Stage 438 holds infinity y identical to the torus y formula. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–438 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 439 | Hold default fallthrough to torus (`noteSessionDefaultFallsThroughTorus`, `compileSessionStage439`). |
| 440 | Hold lerp alpha 0.05 unscaled by gravityPull (`noteSessionLerpAlphaUnscaled`, `compileSessionStage440`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 441 | both | Hold theta step as a product of the idx rate and gravityPull. |
| 442 | both | Hold phi unread as an increment inside session update(t). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 440, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
