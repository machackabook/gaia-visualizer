# Gaia visualizer + The-Hive — compiled stages

Band `376-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 376 documents that the triangular arm uses `y = (idx % 3 - 1) * major * 0.5 + sin(t) * minor`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–375 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 375 | Session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2 (`noteSessionHamiltonianY`). |
| 376 | Session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor (`noteSessionTriangularY`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 377 | both | Session lemniscate z is (scale * sin(theta) * cos(theta)) / denom (document only). |
| 378 | both | Session torus y is minor * sin(phi) * sin(t * 0.5 + idx) (document only). |
| 379 | both | Session infinity x is (scale * cos(theta)) / denom (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'torus', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 376, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
