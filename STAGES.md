# Gaia visualizer + The-Hive — compiled stages

Band `383-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 383 documents that the triangular arm uses `z = major * sin(tAngle) + minor * sin(theta * 5)` with `tAngle = floor(theta / (2π/3)) * (2π/3)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–382 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 382 | Session triangular x is major * cos(tAngle) + minor * cos(theta * 5) (`noteSessionTriangularX`). |
| 383 | Session triangular z is major * sin(tAngle) + minor * sin(theta * 5) (`noteSessionTriangularZ`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 384 | both | Session torus x is (major + minor * cos(phi)) * cos(theta) (document only). |
| 385 | both | Session torus z is (major + minor * cos(phi)) * sin(theta) (document only). |
| 386 | both | Hold torus y unless the paste changes (already `noteSessionTorusY`). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'hamiltonian', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 383, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
