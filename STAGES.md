# Gaia visualizer + The-Hive — compiled stages

Band `347-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 347 tracks Drive engram write-through on The-Hive. Extras remain runtime-only.

## Done

| Stage | What shipped |
|------|----------------|
| 1–346 | See prior STAGES / git history. Session pin `beec41f1` held. |
| 339 | cycle + TF-off CPU skip. |
| 340 | energy / freeze. |
| 341 | uEnergy + freeze-skip. |
| 342 | next-stage compiler + pairBlend runtime helper. |
| 345 | Connecting chat 2026-09-30 11:06 CDT reconfirm (`beec41f1`). |
| 346 | TF extras parity catalog (klein hopf figure8 trefoil mobius) — runtime-only. |
| 347 | Drive engram write-through pin + connecting chat reconfirm. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 348 | The-Hive | 19-panel NexusStudio / Stream sliders on the Quine weave bus. |
| 349 | both | HeartbeatScan on HTTP mutation + WS + authenticated `ledger_pulse`. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', blendFrom: 'hamiltonian', blendTo: 'klein', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 347, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
