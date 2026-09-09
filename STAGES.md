# Gaia visualizer + The-Hive — compiled stages

Band `137-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).
Session kernel still allocates `new THREE.Vector3` inside lerp; live path uses a reused `_target` in `GaiaNode.update`.

## Done

| Stage | What shipped |
|------|----------------|
| 1–9 | Kernel extract; torus / infinity / hamiltonian / triangular + later manifolds through scherk / knot / pseudosphere |
| 10 | Peer fan-out + packed GPU attribute buffer; node cap 8192 |
| 11 | GLSL `evaluateKernel.glsl.js`; cassini / lorenz / superformula |
| 12 | WebGL2 transform-feedback for the four chat geometries; cap 16384 (`?tf=1`) |
| 15 | TF kernel: helix, mobius, lissajous, trefoil, figure8, cassini, clifford, villarceau |
| 16 | Remaining 31 manifolds on TF; `uBlend` |
| 17 | Chat-kernel source pinned in `src/chatKernel.js`; contract constants (`CHAT_KERNEL_LERP`, theta rates) |
| 18 | Dual-path fidelity: CPU `evaluateGeometry` vs verbatim `evaluateChatKernel` / `CHAT_KERNEL_SOURCE` (`src/fidelity.js`) |
| 20 | Instanced TF color: `chatKernelColor` + `instanceColor` so gravity/time/idx drive GPU hue (`src/shaders.js`, `src/main.js`) |
| 21 | Skip CPU readback on TF path unless `?relay=` / `?peers=` stream; `instanceOffset` attribute carries TF `vPos` |
| 22 | Zero-copy visual path: `src/zeroCopy.js` marks native TF `vPos` on `instanceOffset`; skip `getBufferSubData` when `?zerocopy=1` or skipCpuPath |
| 23 | Bind Three `instanceOffset` `__webglBuffer` to `tf.currentPosBuffer()` every frame after ping-pong (`bindTfPosAttribute`) |
| 24 | TF-bind health: `reportTfBindHealth` + `?tfbind=1` (`window.__GAIA_TFBIND__`) |
| 25 | Default HUD line for pulse + TF-bind; `reportTfBindHealth` after every `bindTfPosAttribute`; `stampPulse` on `state.lastPulse` |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. Token already flows as `GAIA_PULSE_TOKEN` / `?token=` |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` (host default already wired) |
| 19-panels | The-Hive | Hook remaining Quine / NexusStudio editors to `emitWeaveChange` / `emitGeometry` / `emitBlend` |
| 26 | both | Stage-13 live ledger counts on the same HUD line as pulse; refuse unsigned pulse when token is set |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```
