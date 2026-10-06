# Gaia visualizer + The-Hive — compiled stages

Band `433-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 433 holds the triangular sector snap `floor(theta / (2π/3)) * (2π/3)` independent of gravityPull. Stage 432 holds phi unread by the hamiltonian arm (x/z/y use theta and t only). Stage 431 holds minor `3 + toroidalWeave * 2` as the only weave consumer in the radii block. Stage 430 holds the session lerp fresh `THREE.Vector3` allocation as contract. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–432 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 433 | Hold triangular sector snap independent of gravityPull (`noteSessionTriangularSectorIndependent`, `compileSessionStage433`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 434 | both | Hold phi not incremented inside the session `update(t)`. Living path may still advance phi. |
| 435 | both | Hold hamiltonian x/z independent of t (only y reads t). |
| 436 | both | Hold triangular y lane independent of theta. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 433, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
