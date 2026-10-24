# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 830 holds uniforms uTime then uGravity order and sources from current chat paste. Prior holds preserved. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–712 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha, major/minor pre-switch, switch four-case. (prior entries preserved) |
| 713 | Hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch. |
| 714 | Hold switch(targetState.geometry) as sole four-case dispatch. |
| 715 | Hold infinity lemniscate denom shared by x and z only. |
| 716 | Hold hamiltonian parametric x/z free of minor and y lift sin(t)*2. |
| 717 | Hold triangular floor snap to 2π/3 and y sector free of theta*5 on y. |
| 718–827 | Hold series on torus tube, lerp allocation, major/minor, switch, theta, uniforms, infinity lemniscate, hamiltonian hScale, triangular floor, and related pins. (prior entries preserved) |
| 828 | Hold full kernel session paste allocation of new Vector3 in lerp (living path may reuse). |
| 829 | Hold torus/default tube radius shared by x/z and y shared with infinity. |
| 830 | Hold uniforms uTime then uGravity order and sources. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 831 | gaia-visualizer | Hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch. |
| 832 | gaia-visualizer | Hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry. |
| 833 | gaia-visualizer | Hold switch(targetState.geometry) as sole four-case dispatcher. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'hamiltonian', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 830, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
