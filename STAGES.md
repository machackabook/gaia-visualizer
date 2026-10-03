# Gaia visualizer + The-Hive — compiled stages

Band `391-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stages 389–391 hold the lerp alpha, the theta step, and the major/minor radii. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–385 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 386 | Hold session torus y (`noteSessionTorusHold`). Same lift as infinity. |
| 387 | Hold the four-case switch (`noteSessionSwitchHold`). Extras stay off the paste. |
| 388 | Tube identity `x^2 + z^2 = (major + minor * cos(phi))^2` (`noteSessionTubeIdentity`). |
| 389 | Hold lerp alpha `0.05` (`noteSessionLerpHold`). Not scaled by gravity. |
| 390 | Hold theta step `(0.01 + idx * 0.002) * gravityPull` (`noteSessionThetaStep`). |
| 391 | Hold `major = 10 + idx * 2` and `minor = 3 + toroidalWeave * 2` (`noteSessionRadiiHold`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 392 | both | Hold lemniscate denom `1 + sin(theta)^2` on the infinity arm. |
| 393 | both | Hold hamiltonian frequency-3 vertex map. |
| 394 | both | Hold triangular sector angle `2π/3`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'triangular', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 391, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
