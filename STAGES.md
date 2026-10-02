# Gaia visualizer + The-Hive — compiled stages

Band `370-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 370 documents that the session triangular case floors theta to `2π/3` before the lattice vertex. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–369 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 369 | Session torus reuses the same unread phi (`noteSessionTorusPhiReuse`). |
| 370 | Session triangular floor snaps theta to 2π/3 (`noteSessionTriangularFloor`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 371 | both | Session infinity y shares the torus tube formula (document only). |
| 372 | both | Session default falls through to the torus body (document only). |
| 373 | both | Session triangular minor ripple keeps raw theta * 5 (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'hamiltonian', blendTo: 'klein', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 370, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
