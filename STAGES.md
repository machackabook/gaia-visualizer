# Gaia visualizer + The-Hive — compiled stages

Band `315-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → phi weave → geometry switch → finite guard → lerp 0.05).
Session kernel still allocates `new THREE.Vector3` inside lerp; live path uses a reused `_kernelTarget` / `_target`.
Stage 315 enhances the 2026-09-27 21:06 CDT paste: phi weave + finite x/y/z. Extras remain in the session switch from 314.

## Done

| Stage | What shipped |
|------|----------------|
| 1–60 | See git history / prior STAGES. |
| 61 | GPU TF phi weave aligned to living kernel. |
| 62 | GPU TF `mix(aPrevPos, target, 0.05)` matches CPU lerp. |
| 63 | Seed TF `aPrevPos` from first CPU evaluate. |
| 64 | Re-seed TF `aPrevPos` when geometry changes. |
| 65 | CPU evaluate hopf + figure8 (GPU ids 13 / 8). |
| 66 | CPU trefoil (GPU id 7). `matchSessionPaste` scans extras. |
| 72–310 | Live chat + remembral stamps. Session pin `beec41f1` held. |
| 311 | Live chat 2026-09-27 17:06 CDT. Session paste reconfirmed; mobius runtime extra. |
| 314 | Session switch extras klein/figure8/hopf/trefoil/mobius. Hash `67185cf3`. |
| 315 | Session phi weave + finite guards. Hash `c315e7a1`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 316-gpu | gaia-visualizer | TF/shader parity for klein hopf figure8 trefoil mobius |
| 317-lerp | gaia-visualizer | Session paste reuse `_kernelTarget`; drop per-frame Vector3 |
| 318-blend | gaia-visualizer | Geometry blender via `state.blend` between two keys |
| 4-gov | The-Hive | HeartbeatScan on HTTP mutation + WS (issue #4). |
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` |
| 19-panels | The-Hive | Hook remaining NexusStudio / Stream sliders |
| 51-impl | gaia-visualizer | Tighter InstancedMesh instanceOffset shader path at 4k–16k |
| 319 | continuity-ledger-cycle / nexus-repo-sync | Next waterfall hop. |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 315, sourceHash: '7cd81012', sessionHash: 'c315e7a1' }
}));
```
