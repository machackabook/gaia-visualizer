# Gaia visualizer + The-Hive — compiled stages

Band `374-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 374 documents that the infinity arm uses `scale = major * 1.5` and lemniscate `denom = 1 + sin(theta)^2`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–373 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 373 | Session triangular minor ripple keeps raw theta * 5 (`noteSessionTriangularRipple`). |
| 374 | Session infinity scale is major * 1.5 with denom 1 + sin(theta)^2 (`noteSessionInfinityScale`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 375 | both | Session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2 (document only). |
| 376 | both | Session triangular y shelf is (idx % 3 - 1) * major * 0.5 + sin(t) * minor (document only). |
| 377 | both | Session lemniscate z is (scale * sin(theta) * cos(theta)) / denom (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 374, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
