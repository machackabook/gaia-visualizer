# STAGE 228

Live chat pasted the exact session `update(t)` again (2026-09-21 11:34 CDT). Session hash `beec41f1`. Living hash `7cd81012`. Klein remains runtime-only. `STAGE = 228`.

GPU transform-feedback still re-seeds `aPrevPos` from `evaluateChatKernel` whenever `targetState.geometry` changes, so the 0.05 lerp does not drag nodes through leftover manifolds.

Do not promote klein into the session switch until a paste includes it.
