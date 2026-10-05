# Gaia visualizer + The-Hive — compiled stages

Band `419-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 417 holds phi unread. Stage 418 holds session lerp alpha `0.05`. Stage 419 holds radii `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2`. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–416 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 417 | Hold `phi` still unread in the session paste (`noteSessionPhiUnread`). |
| 418 | Hold session lerp alpha at `0.05` with a fresh `THREE.Vector3` (`noteSessionLerpAlpha`). |
| 419 | Hold radii `major = 10 + idx * 2`, `minor = 3 + toroidalWeave * 2` (`noteSessionRadiiHold`, `compileSessionStage419`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 420 | both | Hold hamiltonian ignoring phi. |
| 421 | both | Hold infinity denom shared by x and z only. |
| 422 | both | Hold triangular sector snap at `2π/3`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'infinity', blendFrom: 'torus', blendTo: 'infinity', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 419, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
