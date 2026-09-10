# gaia-visualizer

**Band:** `137-visual`  
**Nexus:** Cryptic-Heartbeat  
**Numeral:** `137451921129154222`  
**Stage:** `43`  
**Mesh:** Cryptic-Heartbeat · The-Hive · nexus-repo-sync

LLM-assigned geometric states for Gaia nodes. Each node interpolates toward a target manifold. `GaiaNode.update(t, state, targetState)` is the living chat kernel. The verbatim `update(t)` from the current chat lives in `src/chatKernel.js` (`CHAT_KERNEL_SOURCE`, sourceHash `beec41f1`). That paste covers torus / infinity / hamiltonian / triangular and does **not** increment `phi` in-source. Stage-28 runtime extras remain: `phi += 0.007 * toroidalWeave` and first-class `klein`. Stage-41 added `evaluateChatKernelInto`. Stage-42 re-confirms the 2026-09-10 paste and adds `advanceChatKernelAngles`. Stage-43 wires `sampleFidelityOnHashMismatch` into the HUD on every inbound kernel frame.

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

See `STAGES.md`, `docs/STAGE43.md`, `src/chatKernel.js`.
