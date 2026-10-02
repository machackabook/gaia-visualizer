# Gaia visualizer + The-Hive — compiled stages

Band `369-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 369 documents that the session torus reuses one unread `phi` in `cos(phi)` and `sin(phi)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–368 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 368 | Session hamiltonian ignores phi and minor (`noteSessionHamiltonianIgnore`). |
| 369 | Session torus reuses the same unread phi (`noteSessionTorusPhiReuse`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 370 | both | Session triangular floor snaps theta to 2π/3 (document only). |
| 371 | both | Session infinity y shares the torus tube formula (document only). |
| 372 | both | Session default falls through to the torus body (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'klein', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 369, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
