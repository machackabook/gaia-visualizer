# Gaia visualizer + The-Hive — compiled stages

Band `137-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Session kernel still allocates `new THREE.Vector3` inside lerp; live path uses a reused `_kernelTarget`.
Stage 64 reconfirms the session paste (`beec41f1`) and re-seeds TF previous positions when geometry changes.
Hive ships `matchSessionPaste`. Klein stays off the session switch.

## Done

| Stage | What shipped |
|------|----------------|
| 1–60 | See git history / prior STAGES. |
| 61 | Session reconfirm (2026-09-11 18:04 CDT). GPU TF phi weave aligned to living kernel. |
| 62 | GPU TF `mix(aPrevPos, target, 0.05)` matches CPU lerp. |
| 63 | Session paste 2026-09-11 20:00 CDT. Seed TF `aPrevPos` from first CPU evaluate so frame-0 does not bloom from origin. |
| 64 | Session paste 2026-09-11 21:12 CDT. Re-seed TF `aPrevPos` when geometry changes so lerp does not drag leftover manifolds. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. Token + HMAC already flow. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (consume `/api/gaia/engram`) |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` (host default already wired) |
| 19-panels | The-Hive | Hook remaining Quine / NexusStudio editors to `emitWeaveChange` / `emitGeometry` / `emitBlend` |
| 51-impl | gaia-visualizer | InstancedMesh + GPU attributes for >1k nodes |
| 58 | mesh | Promote klein into the session switch only after a chat paste includes it. |
| 65 | mesh | Optional hopf/figure8 as runtime extras only; keep session switch pinned to four geometries. |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6, stage: 64, sourceHash: '7cd81012' }
}));
```
