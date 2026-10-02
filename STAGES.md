# Gaia visualizer + The-Hive — compiled stages

Band `377-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 377 documents that the infinity arm uses `z = (scale * sin(theta) * cos(theta)) / denom`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–376 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 376 | Session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor (`noteSessionTriangularY`). |
| 377 | Session lemniscate z is (scale * sin(theta) * cos(theta)) / denom (`noteSessionLemniscateZ`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 378 | both | Session torus y is minor * sin(phi) * sin(t * 0.5 + idx) (document only). |
| 379 | both | Session infinity x is (scale * cos(theta)) / denom (document only). |
| 380 | both | Session hamiltonian x is hScale * cos(theta * 3) * cos(theta) (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 377, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
