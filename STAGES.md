# Gaia visualizer + The-Hive — compiled stages

Band `413-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 411 holds that allocation contrast. Stage 412 holds the hamiltonian y lift `sin(t) * 2` independent of `hScale`. Stage 413 holds the triangular y sector `(idx % 3 - 1) * major * 0.5` independent of the `theta * 5` weave. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–410 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 411 | Hold session lerp still allocating `new THREE.Vector3` (hash `beec41f1`); living path keeps `_kernelTarget` (`noteSessionLerpAllocHold`). |
| 412 | Hold hamiltonian y lift `sin(t) * 2` independent of `hScale` (`noteSessionHamiltonianScaleLift`). |
| 413 | Hold triangular y sector `(idx % 3 - 1) * major * 0.5` independent of the high-frequency weave (`noteSessionTriangularLaneWeave`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 414 | both | Hold infinity scale `major * 1.5` before the lemniscate map, not major itself. |
| 415 | both | Hold theta step as the product `(0.01 + idx * 0.002) * gravityPull`, not a sum. |
| 416 | both | Hold torus and infinity sharing the y tube `minor * sin(phi) * sin(t * 0.5 + idx)`; hamiltonian and triangular do not. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'torus', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 413, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
