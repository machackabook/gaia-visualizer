# Gaia visualizer + The-Hive — compiled stages

Band `511-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 511 holds the shared y tube identical on infinity and torus, unread by tube radius. Stage 510 holds triangular `tAngle` as the sector snap, unread by the `theta * 5` weave. Stage 509 holds infinity denom `1 + sin(theta)^2` shared by x and z only. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–508 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 509 | Hold infinity denom `1 + sin(theta)^2` shared by x and z only (`noteSessionInfinityDenomHold`, `compileSessionStage509`). Band `compileSessionStages509to511`. |
| 510 | Hold triangular sector snap unread by the theta*5 weave (`noteSessionTriangularSnapUnread`, `compileSessionStage510`). Band `compileSessionStages509to511`. |
| 511 | Hold shared y tube identical on infinity and torus (`noteSessionSharedTubeHold`, `compileSessionStage511`). Band `compileSessionStages509to511`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 512 | gaia-visualizer | Hold hamiltonian y unread by minor and phi. |
| 513 | gaia-visualizer | Hold torus tube radius unread by y. |
| 514 | gaia-visualizer | Hold torus case then default as one shared body. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 511, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
