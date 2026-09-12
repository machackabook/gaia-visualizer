# STAGE 64

Live chat pasted the exact session `update(t)` again (2026-09-11 21:12 CDT). Session hash `beec41f1`. Living hash `7cd81012`. Klein remains runtime-only. `STAGE = 64`.

GPU transform-feedback now re-seeds `aPrevPos` from `evaluateChatKernel` whenever `targetState.geometry` changes, so the 0.05 lerp does not drag nodes through leftover manifolds.

Do not promote klein into the session switch until a paste includes it.
InstancedMesh GPU attributes remain 51-impl.
