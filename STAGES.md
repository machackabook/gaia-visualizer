# Gaia visualizer + The-Hive — compiled stages

Band `533-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 533 holds phi read-only in the session paste. Stage 532 holds minor as `3 + (toroidalWeave * 2)` before the switch. Stage 531 holds the theta step as `(0.01 + idx * 0.002) * gravityPull`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–530 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 531 | Hold theta step as `(0.01 + this.idx * 0.002) * state.gravityPull` (`noteSessionThetaStepHold`, `compileSessionStage531`). Band `compileSessionStages531to533`. |
| 532 | Hold minor as `3 + (state.toroidalWeave * 2)` before the switch (`noteSessionMinorRadiusHold`, `compileSessionStage532`). Band `compileSessionStages531to533`. |
| 533 | Hold phi read-only (`noteSessionPhiReadOnly`, `compileSessionStage533`). Band `compileSessionStages531to533`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 534 | gaia-visualizer | Hold major parentheses form `10 + (idx * 2)` distinct from the 0.002 theta coefficient. |
| 535 | gaia-visualizer | Hold `uTime` then `uGravity` as the only material writes. |
| 536 | gaia-visualizer | Hold torus as the default case and the only fallthrough. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 533, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
