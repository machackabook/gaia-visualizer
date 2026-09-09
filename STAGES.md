# Gaia visualizer + The-Hive — compiled stages

Band `137-visual`. Chat kernel is the `update(t)` posted in-session (uniforms → theta → geometry switch → lerp 0.05).

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

## Next (this compile)

| Stage | Owner repo | Work |
|------|------------|------|
| 13 | The-Hive + gaia-visualizer | Authenticated live `ledger_pulse` → Hive WS against live sheet counts. Token already flows as `GAIA_PULSE_TOKEN` / `?token=` |
| 14 | The-Hive | Memory engrams into Drive folder `CRYPTIC-HEARTBEAT-NEXUS-ROOT` |
| 16-public | gaia-visualizer | hamiltoniansingularity.ai public band; default geometry `blend` (host default already wired) |
| 19 | The-Hive | Quine / NexusStudio emit `postGaiaContract` on every weave change (`weaveEmitter.ts`) |
| 22 | both | True zero-copy: share the WebGL TF `vPos` buffer object with Three.js without a CPU `Float32Array` copy |

## Drive from LLM

```js
window.dispatchEvent(new CustomEvent('gaia:targetState', {
  detail: { geometry: 'blend', gravityPull: 1.4, toroidalWeave: 1.2, lerp: 0.05, blend: 0.6 }
}));
```
