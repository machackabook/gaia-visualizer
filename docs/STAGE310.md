# STAGE 310

Live chat pasted the exact session `update(t)` again (2026-09-27 16:06 CDT). Session hash `beec41f1`. Living hash `7cd81012`. Klein remains runtime-only. `STAGE = 310`.

- uniforms `uTime` / `uGravity`
- `theta += (0.01 + idx * 0.002) * gravityPull`
- session switch: infinity | hamiltonian | triangular | torus
- session lerp allocates `new THREE.Vector3` by contract; living path reuses `_target`
- living extras: phi weave, uWeave, reused lerp target, chatKernelLerpAlpha

GPU transform-feedback still re-seeds `aPrevPos` from `evaluateChatKernel` whenever `targetState.geometry` changes, so the 0.05 lerp does not drag nodes through leftover manifolds.
Do not promote klein / hopf / figure8 / trefoil into the session switch until a paste includes those cases.

Prior hop left `src/chatKernel.js` at STAGE 307 while docs sat at 309. Stage 310 aligns the living export.
