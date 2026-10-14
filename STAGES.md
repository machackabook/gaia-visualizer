# Gaia visualizer + The-Hive — compiled stages

Band `580-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 630 holds the full session update(t) paste from current chat. Prior holds preserved. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–616 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha. (prior entries preserved) |
| 617 | Hold major = 10 + (idx * 2) unread by pull. Assigned before switch. |
| 618 | Hold minor = 3 + (toroidalWeave * 2) before switch. |
| 619 | Hold switch(targetState.geometry) sole four-case dispatch. |
| 620 | Hold infinity scale = major * 1.5. |
| 621 | Hold hamiltonian hScale = major. |
| 622–629 | Additional holds on triangular floor, torus fallthrough, lemniscate denom, major/minor pre-switch, lerp, etc. (prior preserved) |
| 630 | Hold full session update(t) kernel paste (four-case, uniforms, theta, radii, geometries, lerp 0.05). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 631 | gaia-visualizer | Hold infinity lemniscate denom shared by x and z. |
| 632 | gaia-visualizer | Hold hamiltonian parametric and y lift. |
| 633 | gaia-visualizer | Hold triangular floor snap and y sector. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'infinity', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 630, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
