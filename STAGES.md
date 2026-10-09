# Gaia visualizer + The-Hive — compiled stages

Band `530-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 530 holds the session lerp alpha as the literal `0.05`. Stage 529 holds the hamiltonian y lift `sin(t) * 2` independent of `hScale`. Stage 528 holds the lemniscate denom on x and z only. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–527 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 528 | Hold lemniscate denom shared by x and z only (`noteSessionLemniscateDenomOnly`, `compileSessionStage528`). Band `compileSessionStages528to530`. |
| 529 | Hold hamiltonian y lift `sin(t) * 2` independent of hScale (`noteSessionHamiltonianLiftScaleFree`, `compileSessionStage529`). Band `compileSessionStages528to530`. |
| 530 | Hold session lerp alpha as the literal 0.05 (`noteSessionLerpAlphaLiteralHold`, `compileSessionStage530`). Band `compileSessionStages528to530`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 531 | gaia-visualizer | Hold theta step as `(0.01 + idx * 0.002) * gravityPull`. |
| 532 | gaia-visualizer | Hold minor as `3 + toroidalWeave * 2` before the switch. |
| 533 | gaia-visualizer | Hold phi read-only in the session paste. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 530, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
