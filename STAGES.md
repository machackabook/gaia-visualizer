# Gaia visualizer + The-Hive — compiled stages

Band `371-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 371 documents that session infinity y shares the torus tube formula `minor * sin(phi) * sin(t * 0.5 + idx)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–370 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 370 | Session triangular floor snaps theta to 2π/3 (`noteSessionTriangularFloor`). |
| 371 | Session infinity y shares the torus tube formula (`noteSessionInfinityTube`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 372 | both | Session default falls through to the torus body (document only). |
| 373 | both | Session triangular minor ripple keeps raw theta * 5 (document only). |
| 374 | both | Session infinity scale is major * 1.5 with denom 1 + sin(theta)^2 (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 371, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
