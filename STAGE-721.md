# STAGE-721 — Hold full update(t) kernel as pinned session source (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Full `update(t)` body held as the pinned session source of truth. Living path may optimize allocations (scratch Vector3, etc.) but must not alter the mathematical mapping or control flow of the four cases.
- Prior holds remain: phi unread (720), lerp alpha 0.05 + Vector3 alloc (719), torus tube (718), triangular (717), hamiltonian (716), infinity denom (715), switch sole four-case (714), major/minor before switch (713), uniforms uTime then uGravity (712), theta step (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 722 — hold state.gravityPull and state.toroidalWeave as external drivers.
2. 723 — hold targetState.geometry as sole LLM-assigned dispatcher (four cases + default torus).
3. 724 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) as session radius formulas.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
