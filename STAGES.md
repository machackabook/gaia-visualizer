# Gaia visualizer + The-Hive — compiled stages

Band `430-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 428 holds major `10 + idx * 2` independent of `gravityPull`. Stage 429 holds infinity y shared with torus y, not taking lemniscate `scale`. Stage 430 holds the session lerp fresh `THREE.Vector3` allocation as contract. Stage 427 holds lerp alpha `0.05` not scaled by `gravityPull`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–427 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 428 | Hold major `10 + idx * 2` not scaled by gravityPull (`noteSessionMajorUnscaled`, `compileSessionStage428`). |
| 429 | Hold infinity y shared with torus y, not taking lemniscate `scale` (`noteSessionInfinityYShared`, `compileSessionStage429`). |
| 430 | Hold the session lerp fresh `THREE.Vector3` allocation as contract. Enhanced path may reuse (`noteSessionLerpAlloc`, `compileSessionStage430`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 431 | both | Hold minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block. |
| 432 | both | Hold phi unread by the hamiltonian arm (x/z/y use theta and t only). |
| 433 | both | Hold the triangular sector snap independent of gravityPull. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 430, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
