# Gaia visualizer + The-Hive — compiled stages

Band `385-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 385 documents that the torus / default arm uses `z = (major + minor * cos(phi)) * sin(theta)`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–384 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 384 | Session torus x is (major + minor * cos(phi)) * cos(theta) (`noteSessionTorusX`). |
| 385 | Session torus z is (major + minor * cos(phi)) * sin(theta) (`noteSessionTorusZ`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 386 | both | Hold torus y unless the paste changes (already `noteSessionTorusY`). |
| 387 | both | Hold the four-case switch unless the paste adds a case. |
| 388 | both | Document tube identity x^2 + z^2 = (major + minor * cos(phi))^2 (document only). |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'triangular', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 385, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
