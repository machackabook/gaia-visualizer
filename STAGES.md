# Gaia visualizer + The-Hive — compiled stages

Band `137-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Session kernel still allocates `new THREE.Vector3` inside lerp; live path uses a reused `_target` in `GaiaNode.update`.
Stage 41 adds `evaluateChatKernelInto` for the same zero-alloc write from callers that are not GaiaNode.

## Done

| Stage | What shipped |
|------|----------------|
| 1–40 | See git history / prior STAGES. Kernel extract through source-hash banner + engram POST. |
| 41 | Session `update(t)` re-pinned 2026-09-10. `evaluateChatKernelInto`. Next-stage table compiled (`docs/STAGE41.md`). |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. Token + HMAC already flow. |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` (consume `/api/gaia/engram`) |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` (host default already wired) |
| 19-panels | The-Hive | Hook remaining Quine / NexusStudio editors to `emitWeaveChange` / `emitGeometry` / `emitBlend` |
| 42 | ENCLAVE-ADAM-REUNITED | Auto-unpack watch on downloads / omdirectorytrew with env-check autocomplete |
| 43 | both | Fidelity sample on every inbound `sourceHash` mismatch |
| 44 | The-Hive | Compact engram GET + replay into visualizer `pendingKernel` |
| 45 | mesh | Continuity cascade carries `STAGE` + `sourceHash` on every sibling dispatch |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```
