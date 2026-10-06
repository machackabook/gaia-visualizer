# Gaia visualizer + The-Hive — compiled stages

Band `437-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 437 holds the torus tube radius `major + minor * cos(phi)` shared by x and z only. Stage 436 holds triangular y lane independent of theta. Stage 435 holds hamiltonian x/z independent of clock t. Stage 434 holds phi not incremented inside the session `update(t)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–434 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 435 | Hold hamiltonian x/z independent of t (`noteSessionHamiltonianXZTimeFree`, `compileSessionStage435`). |
| 436 | Hold triangular y lane independent of theta (`noteSessionTriangularYLaneThetaFree`, `compileSessionStage436`). |
| 437 | Hold torus tube radius shared by x and z only (`noteSessionTorusTubeSharedXZ`, `compileSessionStage437`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 438 | both | Hold infinity y identical to the torus y formula. |
| 439 | both | Hold default fallthrough to torus. |
| 440 | both | Hold lerp alpha 0.05 unscaled by gravityPull. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 437, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
