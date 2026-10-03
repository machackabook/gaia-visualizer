# Gaia visualizer + The-Hive — compiled stages

Band `384-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 384 documents that the torus / default arm uses `x = (major + minor * cos(phi)) * cos(theta)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–383 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 383 | Session triangular z is major * sin(tAngle) + minor * sin(theta * 5) (`noteSessionTriangularZ`). |
| 384 | Session torus x is (major + minor * cos(phi)) * cos(theta) (`noteSessionTorusX`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 385 | both | Session torus z is (major + minor * cos(phi)) * sin(theta) (document only). |
| 386 | both | Hold torus y unless the paste changes (already `noteSessionTorusY`). |
| 387 | both | Hold the four-case switch unless the paste adds a case. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'triangular', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 384, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
