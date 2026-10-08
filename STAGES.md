# Gaia visualizer + The-Hive — compiled stages

Band `490-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 490 holds the hamiltonian lift `(Math.sin(t) * 2)` unread by `hScale`. Stage 489 holds the torus tube on x and z only. Stage 488 holds the session lerp allocation at alpha `0.05`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–475 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 476 | Hold hamiltonian x/z as `hScale * cos(theta * 3) * cos/sin(theta)`, unread by phi (`noteSessionHamiltonianArmUnread`, `compileSessionStage476`). |
| 477 | Hold triangular y sector as `(idx % 3 - 1) * major * 0.5`, unread by tAngle (`noteSessionTriangularYSector`, `compileSessionStage477`). |
| 478 | Hold shared y tube on infinity and torus only (`noteSessionSharedYTube`, `compileSessionStage478`). |
| 479 | Hold hamiltonian y as `hScale * sin(theta * 3) + sin(t) * 2`, unread by minor (`noteSessionHamiltonianYUnread`, `compileSessionStage479`). |
| 480 | Hold triangular weave as `minor * cos/sin(theta * 5)` beside the sector snap (`noteSessionTriangularWeave`, `compileSessionStage480`). |
| 481 | Hold the session theta step as the only angle advance; phi is not incremented (`noteSessionThetaOnlyAdvance`, `compileSessionStage481`). |
| 482 | Hold lerp alpha 0.05 as the only blend into the geometric target. |
| 483 | Hold major = 10 + idx * 2 and minor = 3 + toroidalWeave * 2 as the shared radii, assigned before the switch. |
| 484 | Hold uniforms uTime and uGravity as the only material writes in update(t). |
| 485 | Hold hamiltonian arm unread by phi and minor (`noteSessionHamiltonianUnread`, `compileSessionStage485`). |
| 486 | Hold lemniscate z as `scale * sin(theta) * cos(theta) / denom` (`noteSessionLemniscateZ`, `compileSessionStage486`). |
| 487 | Hold triangular y unread by tAngle (`noteSessionTriangularYUnread`, `compileSessionStage487`). |
| 488 | Hold session lerp allocating `new THREE.Vector3` at alpha 0.05 (`noteSessionLerpAlloc`, `compileSessionStage488`). Living path keeps `_kernelTarget`. |
| 489 | Hold torus tube `(major + minor * cos(phi))` on x and z only (`noteSessionTorusTube`, `compileSessionStage489`). |
| 490 | Hold hamiltonian lift `(Math.sin(t) * 2)` unread by hScale (`noteSessionHamiltonianLift`, `compileSessionStage490`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 491 | gaia-visualizer | Hold minor = 3 + toroidalWeave * 2 as the only weave consumer in the radii block. |
| 492 | gaia-visualizer | Hold uTime then uGravity as the only material writes. |
| 493 | gaia-visualizer | Hold infinity denom `1 + sin(theta)^2` shared by x and z only. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'hamiltonian', blendFrom: 'torus', blendTo: 'hamiltonian', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 490, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
