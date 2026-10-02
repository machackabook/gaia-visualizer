# Gaia visualizer + The-Hive — compiled stages

Band `380-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 380 documents that the hamiltonian arm uses `x = hScale * cos(theta * 3) * cos(theta)` with `hScale = major`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–379 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 379 | Session infinity x is (scale * cos(theta)) / denom (`noteSessionInfinityX`). |
| 380 | Session hamiltonian x is hScale * cos(theta * 3) * cos(theta) (`noteSessionHamiltonianX`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 381 | both | Session hamiltonian z is hScale * cos(theta * 3) * sin(theta) (document only). |
| 382 | both | Session triangular x is major * cos(tAngle) + minor * cos(theta * 5) (document only). |
| 383 | both | Session triangular z is major * sin(tAngle) + minor * sin(theta * 5) (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'infinity', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 380, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
