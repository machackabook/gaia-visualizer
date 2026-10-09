# Gaia visualizer + The-Hive — compiled stages

Band `517-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 517 holds the theta step as the only angle write. Stage 516 holds lerp alpha as the literal 0.05. Stage 515 holds lemniscate scale `major * 1.5` unread by minor. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–514 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 515 | Hold lemniscate scale `major * 1.5` unread by minor (`noteSessionLemniscateScaleUnread`, `compileSessionStage515`). Band `compileSessionStages515to517`. |
| 516 | Hold lerp alpha as the literal 0.05 (`noteSessionLerpAlphaLiteral`, `compileSessionStage516`). Band `compileSessionStages515to517`. |
| 517 | Hold theta step as the only angle write (`noteSessionThetaOnlyAngleWrite`, `compileSessionStage517`). Band `compileSessionStages515to517`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 518 | gaia-visualizer | Hold gravityPull as the theta-step multiplier only. |
| 519 | gaia-visualizer | Hold phi read-only in the session paste. |
| 520 | gaia-visualizer | Hold idx term inside the theta step only. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 517, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
