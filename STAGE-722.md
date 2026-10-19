# STAGE-722 — Hold state.gravityPull and state.toroidalWeave as external drivers (2026-10-18)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `state.gravityPull` scales only the theta increment `(0.01 + this.idx * 0.002) * state.gravityPull` and is written to `uGravity`. It does not scale major or minor.
- `state.toroidalWeave` scales only minor = `3 + (state.toroidalWeave * 2)`. It is unread by hamiltonian.
- Both are external drivers supplied outside the update(t) body. Not assigned inside the paste.
- Prior holds remain: full kernel pin (721), phi unread (720), lerp alpha 0.05 + Vector3 alloc (719), torus tube (718), triangular (717), hamiltonian (716), infinity denom (715), switch sole four-case (714), major/minor before switch (713), uniforms uTime then uGravity (712), theta step (711).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 723 — hold targetState.geometry as sole LLM-assigned dispatcher (four cases + default torus).
2. 724 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) as session radius formulas.
3. 725 — hold infinity scale = major * 1.5 and hamiltonian hScale = major (no minor).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
