# Gaia visualizer + The-Hive — compiled stages

Band `334-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Raw session kernel still allocates `new THREE.Vector3` inside lerp (hash `beec41f1`). Enhanced / live path uses a reused `_kernelTarget` / `_target`.
Stage 317 ships that reuse. Stage 315 weave + finite x/y/z stay on the enhanced pin. Extras remain runtime-only.
Stage 321 exports living helpers from `src/chatKernel.js` and pair-wise `blendFrom`/`blendTo` on evaluateGeometry.
Stage 323 ships `applyChatKernelUniforms`. Stage 324 ships `advanceAndEvaluateChatKernel`.
Stage 325 routes the four session geometries through that combined call on GaiaNode.
Stage 326 ships `applyChatKernelTarget` so living lerp never allocates.
Stage 334 ships `selectChatKernelGeometry` + `stepChatKernelNode`.

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
| 316 | GPU four-case shader parity vs this paste. |
| 317 | Enhanced session `_kernelTarget` reuse. |
| 318 | Geometry blender (hamiltonian ↔ klein) via `state.blend`. |
| 319 | Uniform guards + gravity-scaled lerp on living path. |
| 321 | Helpers exported from chatKernel.js; pair-wise blendFrom/blendTo. |
| 323 | applyChatKernelUniforms + optional uPhi. |
| 324 | advanceAndEvaluateChatKernel combined living step. |
| 325 | GaiaNode four-case path calls advanceAndEvaluateChatKernel. |
| 326 | applyChatKernelTarget reused lerp destination. Session paste 2026-09-28 18:06 CDT reconfirmed. |
| 333 | GPU/TF radii clamp parity with CPU. Session paste 2026-09-29 10:07 CDT reconfirmed. |
| 334 | selectChatKernelGeometry + stepChatKernelNode. Session paste 2026-09-29 11:06 CDT reconfirmed (`beec41f1`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 316-gpu | gaia-visualizer | TF/shader parity for klein hopf figure8 trefoil mobius |
| 4-gov | The-Hive | HeartbeatScan on HTTP mutation + WS (issue #4). |
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` |
| 19-panels | The-Hive | Hook remaining NexusStudio / Stream sliders |
| 51-impl | gaia-visualizer | Tighter InstancedMesh instanceOffset shader path at 4k–16k |
| 335 | continuity-ledger-cycle / nexus-repo-sync | Next waterfall hop. |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', blendFrom: 'hamiltonian', blendTo: 'klein', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 334, sourceHash: '7cd81012', sessionHash: 'beec41f1' }
}));
```
