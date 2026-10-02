# Gaia visualizer + The-Hive — compiled stages

Band `372-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 372 documents that session `case 'torus'` falls through to `default` and shares one body. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–371 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 371 | Session infinity y shares the torus tube formula (`noteSessionInfinityTube`). |
| 372 | Session default falls through to the torus body (`noteSessionTorusFallthrough`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 373 | both | Session triangular minor ripple keeps raw theta * 5 (document only). |
| 374 | both | Session infinity scale is major * 1.5 with denom 1 + sin(theta)^2 (document only). |
| 375 | both | Session hamiltonian y is hScale * sin(theta * 3) + sin(t) * 2 (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 372, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
