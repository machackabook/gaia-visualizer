# Gaia visualizer + The-Hive — compiled stages

Band `410-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → radii → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 406 holds the lemniscate denom on x and z only. Stage 407 holds phi as an external weave (no phi step in the paste). Stage 408 holds `uTime` then `uGravity` before the theta step. Stage 409 holds the lemniscate z factor `sin(theta)*cos(theta)` on that same denom, not a second denom. Stage 410 holds triangular high frequency `theta * 5` on both x and z offsets, not on y. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–405 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 406 | Hold infinity denom `1 + sin(theta)^2` shared by x and z, not applied to y (`noteSessionInfinityDenomShare`). |
| 407 | Hold phi as an external weave; this paste does not advance phi inside `update(t)` (`noteSessionPhiExternal`). |
| 408 | Hold uniform writes (`uTime`, `uGravity`) before the theta step (`noteSessionUniformOrder`). |
| 409 | Hold lemniscate z factor `sin(theta)*cos(theta)` on the same denom, not a second denom (`noteSessionLemniscateZFactor`). |
| 410 | Hold triangular high frequency `theta * 5` on both x and z offsets, not on y (`noteSessionTriangularHighFreq`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 411 | both | Hold session lerp still allocating `new THREE.Vector3` (hash `beec41f1`); living path keeps `_kernelTarget`. |
| 412 | both | Hold hamiltonian y lift `sin(t) * 2` independent of `hScale`. |
| 413 | both | Hold triangular y sector `(idx % 3 - 1) * major * 0.5` independent of the high-frequency weave. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'triangular', blendFrom: 'torus', blendTo: 'triangular', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 410, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
