# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `39`  
**Mesh:** Cryptic-Heartbeat · The-Hive · nexus-repo-sync

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` is the living chat kernel. The verbatim `update(t)` from the current chat lives in `src/chatKernel.js` (`CHAT_KERNEL_SOURCE`). That paste covers torus / infinity / hamiltonian / triangular and does **not** increment `phi` in-source. Stage-28 runtime extras remain: `phi += 0.007 * toroidalWeave` and first-class `klein`. Stage-29 pins the paste as the contract. Stage-33 streams compact theta/phi seeds on every `gaia:positions` frame so TF boot does not need a separate health fetch. Stage-34 HMAC-signs kernel frames when `?token=` / `GAIA_PULSE_TOKEN` is set. Stage-35 applies `pendingKernel` immediately after node construction. Stage-36 requires HMAC on BroadcastChannel peer kernel frames when `?token=` is set (`attachKernelMac` / `verifyKernelMac`). Stage-37 dumps compact seeds to `gaia:stage37:engram` / `window.__GAIA_ENGRAM__`. Stage-38 HUD lines `hmacOk` / `hmacRefused`. Stage-39 follows nexus-repo-sync v1.2 speedway (hourly stamp + sibling fanout).

Cascade: this surface accepts `repository_dispatch` `continuity-cascade` from the Cryptic-Heartbeat hourly stamp.

```
this.material.uniforms.uTime.value = t;
this.material.uniforms.uGravity.value = state.gravityPull;
this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
// evaluate targetState.geometry → {x,y,z}  (infinity | hamiltonian | triangular | torus)
this.mesh.position.lerp(target, 0.05);
```

The target vector is reused (no `new THREE.Vector3` inside `update`). Node scale follows `gravityPull`.

On `hamiltoniansingularity.ai` the default geometry is `blend`.

See `STAGES.md`, `src/chatKernel.js`, `src/kernelSnapshot.js`, `src/kernelEngram.js`, `src/kernelMac.js`, `src/fidelity.js`, `src/geometry.js`, `src/Node.js`, `src/evaluateKernel.glsl.js`, `src/gpuBuffer.js`, `src/transformFeedback.js`, `src/zeroCopy.js`.
