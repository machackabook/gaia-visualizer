# Gaia visualizer + The-Hive — compiled stages

Band `388-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 388 documents the torus tube identity `x^2 + z^2 = (major + minor * cos(phi))^2`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–385 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 386 | Hold session torus y (`noteSessionTorusHold`). Same lift as infinity. |
| 387 | Hold the four-case switch (`noteSessionSwitchHold`). Extras stay off the paste. |
| 388 | Tube identity `x^2 + z^2 = (major + minor * cos(phi))^2` (`noteSessionTubeIdentity`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 389 | both | Hold lerp alpha `0.05` unless the paste changes. |
| 390 | both | Hold theta step `(0.01 + idx * 0.002) * gravityPull`. |
| 391 | both | Hold `major = 10 + idx * 2` and `minor = 3 + toroidalWeave * 2`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'torus', blendFrom: 'triangular', blendTo: 'torus', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 388, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
