# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 617 holds major = 10 + (idx * 2) unread by pull. Stage 616 holds final lerp session allocates Vector3 alpha 0.05. Stage 615 holds theta step (0.01 + idx * 0.002) * gravityPull. Stage 614 holds phi read-only in shared y formulas. Stage 613 holds switch(targetState.geometry) sole four-case dispatch. Stage 612 holds minor = 3 + (toroidalWeave * 2) before switch. Stage 611 holds major = 10 + (idx * 2) before switch. Stage 610 holds infinity denom 1 + sin(theta)^2 shared by x and z only. Stage 609 holds uniform writes as uTime then uGravity only. Stage 608 holds theta step (0.01 + idx * 0.002) * gravityPull. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–616 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha. (prior entries preserved) |
| 617 | Hold major = 10 + (idx * 2) unread by pull. Assigned before switch. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 618 | gaia-visualizer | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 619 | gaia-visualizer | Hold switch(targetState.geometry) sole four-case dispatch. |
| 620 | gaia-visualizer | Hold infinity scale = major * 1.5. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 617, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
