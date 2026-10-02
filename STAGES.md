# Gaia visualizer + The-Hive — compiled stages

Band `373-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 373 documents that the triangular minor ripple stays on raw `theta * 5` while only `tAngle` is sector-floored. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–372 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 372 | Session default falls through to the torus body (`noteSessionTorusFallthrough`). |
| 373 | Session triangular minor ripple keeps raw theta * 5 (`noteSessionTriangularRipple`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 374 | both | Session infinity scale is major * 1.5 with denom 1 + sin(theta)^2 (document only). |
| 375 | both | Session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2 (document only). |
| 376 | both | Session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 373, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
