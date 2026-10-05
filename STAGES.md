# Gaia visualizer + The-Hive — compiled stages

Band `427-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 426 holds the hamiltonian additive lift `sin(t) * 2` independent of `hScale`. Stage 427 holds lerp alpha `0.05` not scaled by `gravityPull`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–426 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 427 | Hold lerp alpha `0.05` unscaled by gravityPull (`noteSessionLerpAlphaUnscaled`, `compileSessionStage427`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 428 | both | Hold major `10 + idx * 2` not scaled by `gravityPull`. |
| 429 | both | Hold infinity y shared with torus y, not taking lemniscate `scale`. |
| 430 | both | Hold the session lerp fresh `THREE.Vector3` allocation as contract. Enhanced path may reuse. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 427, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
