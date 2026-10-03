# Gaia visualizer + The-Hive — compiled stages

Band `394-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 394 holds the triangular sector snap `floor(theta / (2π/3)) * (2π/3)`. Extras remain runtime-only.

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
| 392 | Hold lemniscate denom `1 + sin(theta)^2` (`noteSessionLemniscateDenomHold`). |
| 393 | Hold hamiltonian frequency-3 vertex map `theta * 3` (`noteSessionHamiltonianFreqHold`). |
| 394 | Hold triangular sector `floor(theta / (2π/3)) * (2π/3)` (`noteSessionTriangularSectorHold`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 395 | both | Hold infinity y shared with torus y (`minor * sin(phi) * sin(t * 0.5 + idx)`). |
| 396 | both | Hold hamiltonian lift `sin(t) * 2` independent of idx. |
| 397 | both | Hold triangular lane `(idx % 3 - 1) * major * 0.5`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'hamiltonian', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 394, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
