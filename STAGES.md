# Gaia visualizer + The-Hive — compiled stages

Band `431-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 431 holds minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block. Stage 430 holds the session lerp fresh `THREE.Vector3` allocation as contract. Stage 429 holds infinity y shared with torus y, not taking lemniscate `scale`. Stage 428 holds major `10 + idx * 2` independent of `gravityPull`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–430 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 431 | Hold minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block (`noteSessionMinorWeaveOnly`, `compileSessionStage431`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 432 | both | Hold phi unread by the hamiltonian arm (x/z/y use theta and t only). |
| 433 | both | Hold the triangular sector snap independent of gravityPull. |
| 434 | both | Hold phi not incremented inside the session `update(t)`. Living path may still advance phi. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 431, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
