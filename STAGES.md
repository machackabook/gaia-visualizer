# Gaia visualizer + The-Hive — compiled stages

Band `527-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 527 holds the torus and default tube as `major + minor * cos(phi)`. Stage 526 holds triangular lattice y unread by phi. Stage 525 holds uTime as a direct copy of t. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–524 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 525 | Hold uTime as a direct copy of t, not a scaled clock (`noteSessionUTimeDirectCopy`, `compileSessionStage525`). Band `compileSessionStages525to527`. |
| 526 | Hold triangular lattice y unread by phi (`noteSessionTriangularYUnreadByPhi`, `compileSessionStage526`). Band `compileSessionStages525to527`. |
| 527 | Hold torus and default tube as `major + minor * cos(phi)` (`noteSessionTorusTubeRadius`, `compileSessionStage527`). Band `compileSessionStages525to527`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 528 | gaia-visualizer | Hold lemniscate denom shared by x and z only. |
| 529 | gaia-visualizer | Hold hamiltonian y lift `sin(t) * 2` independent of hScale. |
| 530 | gaia-visualizer | Hold session lerp alpha as the literal 0.05. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 527, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
