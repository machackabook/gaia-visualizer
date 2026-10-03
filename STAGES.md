# Gaia visualizer + The-Hive — compiled stages

Band `382-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 382 documents that the triangular arm uses `x = major * cos(tAngle) + minor * cos(theta * 5)` with `tAngle = floor(theta / (2π/3)) * (2π/3)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–381 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 381 | Session hamiltonian z is hScale * cos(theta * 3) * sin(theta) (`noteSessionHamiltonianZ`). |
| 382 | Session triangular x is major * cos(tAngle) + minor * cos(theta * 5) (`noteSessionTriangularX`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 383 | both | Session triangular z is major * sin(tAngle) + minor * sin(theta * 5) (document only). |
| 384 | both | Session torus x is (major + minor * cos(phi)) * cos(theta) (document only). |
| 385 | both | Session torus z is (major + minor * cos(phi)) * sin(theta) (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'hamiltonian', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 382, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
