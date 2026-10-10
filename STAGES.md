# Gaia visualizer + The-Hive — compiled stages

Band `566-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 566 holds hamiltonian hScale = major and independent y lift. Stage 565 holds infinity scale and shared denom. Stage 564 holds phi read-only in shared y formulas. Stage 563 holds the four-case `switch(targetState.geometry)` as sole dispatch. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–533 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 534–561 | Hold series on major form, uniforms order, torus default, infinity lemniscate, hamiltonian, triangular lattice, torus tube, theta step, lerp alpha. |
| 562 | Hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch. |
| 563 | Hold switch(targetState.geometry) four cases only (infinity | hamiltonian | triangular | torus/default). |
| 564 | Hold phi read-only in infinity and torus y formulas. |
| 565 | Hold infinity scale = major * 1.5 and shared Bernoulli denom. |
| 566 | Hold hamiltonian hScale = major and independent y lift sin(t)*2. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 567 | gaia-visualizer | Hold triangular modulo floor snap and *5 weave unread by snap. |
| 568 | gaia-visualizer | Hold torus default fallthrough and tube radii. |
| 569 | gaia-visualizer | Hold uniform writes uTime then uGravity. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 566, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
