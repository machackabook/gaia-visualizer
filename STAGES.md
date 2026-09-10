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
| 26 | Ledger sheet counts on the same HUD line as pulse (`topics` / `votes` / `bridges`); refuse unsigned frames when `?token=` is set (`state.unsignedRefused`) |
| 27 | Persist last ledger snapshot + pulse age across reload (`localStorage` key `gaia:stage27:snapshot`; Hive `/api/health` + `?health=`) |
| 28 | `phi += 0.007 * toroidalWeave`; `klein` first-class in evaluate so hamiltonian↔klein blend shares one path |
| 29 | Re-pin `CHAT_KERNEL_SOURCE` to the exact session `update(t)` (four geometries, no phi line in the paste). Runtime still advances phi and evaluates klein. `src/kernelSnapshot.js` persists theta/phi seeds (`gaia:stage29:kernel`). |
| 30 | `applyKernelSnapshot` wired in `main.js` on boot; Hive `/api/health` + `/api/gaia/kernel` carry compact theta/phi seeds; `?health=` hydrates `gaia:kernel`. |
| 31 | `sampleChatGeometries()` fidelity-samples only `CHAT_KERNEL_CHAT_GEOMETRIES` (infinity / hamiltonian / triangular / torus). `?fidelity=1` logs both full and chat-four reports. |
| 32 | Signed kernel contract frame (`stage`, FNV-1a `sourceHash`, geometries) on each Hive pulse and `window.__GAIA_KERNEL__`. |
| 33 | Compact kernel seeds (`theta`/`phi`, cap 64) ride `gaia:positions` (`createPositionStreamer`). Inbound `gaia:positions` / `gaia:kernel` / pulse frames call `ingestKernel`. Health hydrate stores `pendingKernel`. |

## Next

| Stage | Owner repo | Work |
|------|------------|------|
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. Token already flows as `GAIA_PULSE_TOKEN` / `?token=` |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` (host default already wired) |
| 19-panels | The-Hive | Hook remaining Quine / NexusStudio editors to `emitWeaveChange` / `emitGeometry` / `emitBlend` |
| 34 | The-Hive | Sign kernel frames with HMAC when `GAIA_PULSE_TOKEN` is set |
| 35 | both | Apply `pendingKernel` in `main.js` immediately after node construction so TF boot uses streamed seeds without waiting for a later frame |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```
