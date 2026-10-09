# Gaia visualizer + The-Hive — compiled stages

Band `524-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 524 holds infinity scale `major * 1.5` unread by the gravity copy. Stage 523 holds minor `3 + toroidalWeave * 2` unread by gravityPull. Stage 522 holds major `idx * 2` distinct from the theta `0.002` term. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–521 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 522 | Hold major idx term as `idx * 2`, distinct from the theta `0.002` term (`noteSessionMajorIdxDistinct`, `compileSessionStage522`). Band `compileSessionStages522to524`. |
| 523 | Hold minor as `3 + toroidalWeave * 2`, unread by gravityPull (`noteSessionMinorUnreadByPull`, `compileSessionStage523`). Band `compileSessionStages522to524`. |
| 524 | Hold infinity scale as `major * 1.5`, unread by the gravity copy (`noteSessionInfinityScaleUnreadByCopy`, `compileSessionStage524`). Band `compileSessionStages522to524`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 525 | gaia-visualizer | Hold uTime as a direct copy of t, not a scaled clock. |
| 526 | gaia-visualizer | Hold triangular lattice y unread by phi. |
| 527 | gaia-visualizer | Hold torus and default tube as major + minor * cos(phi). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 524, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
