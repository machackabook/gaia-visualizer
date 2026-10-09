# Gaia visualizer + The-Hive — compiled stages

Band `508-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 508 holds material writes as `uTime` then `uGravity` only. Stage 507 holds the theta step as `(0.01 + idx * 0.002) * gravityPull`. Stage 506 holds minor = `3 + toroidalWeave * 2` beside major, before the switch. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–505 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 506 | Hold minor = `3 + toroidalWeave * 2` beside major, before the switch (`noteSessionMinorBeforeSwitch`, `compileSessionStage506`). Band `compileSessionStages506to508`. |
| 507 | Hold theta step as `(0.01 + idx * 0.002) * gravityPull`; phi is not incremented (`noteSessionThetaStepHold`, `compileSessionStage507`). Band `compileSessionStages506to508`. |
| 508 | Hold uniform writes as `uTime` then `uGravity` only (`noteSessionUniformOrderHold`, `compileSessionStage508`). Band `compileSessionStages506to508`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 509 | gaia-visualizer | Hold infinity denom `1 + sin(theta)^2` shared by x and z only. |
| 510 | gaia-visualizer | Hold triangular sector snap unread by the theta*5 weave. |
| 511 | gaia-visualizer | Hold shared y tube identical on infinity and torus. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'triangular', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 508, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
