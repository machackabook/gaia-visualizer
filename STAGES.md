# Gaia visualizer + The-Hive — compiled stages

Band `453-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 453 holds the torus tube identity on x and z only. Stage 452 holds triangular y off the `theta * 5` ripple. Stage 451 holds the hamiltonian time lift at `sin(t) * 2`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–449 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 450 | Hold lemniscate scale `major * 1.5` and denom `1 + sin(theta)^2` on x/z only. |
| 451 | Hold hamiltonian y lift `sin(t) * 2` (`noteSessionHamiltonianLiftHold`, `compileSessionStage451`). |
| 452 | Hold triangular sector y without `theta * 5` (`noteSessionTriangularSectorYThetaFree`, `compileSessionStage452`). |
| 453 | Hold torus tube identity on x and z only (`noteSessionTorusTubeIdentityHold`, `compileSessionStage453`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 454 | both | Hold infinity z as `scale * sin(theta) * cos(theta) / denom`. |
| 455 | both | Hold triangular `tAngle` snap to `2π/3` sectors. |
| 456 | both | Hold theta step as the only `gravityPull` product. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 453, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
