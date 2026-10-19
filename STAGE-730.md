# STAGE-730 — Hold uniforms write order uTime then uGravity (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- First two lines: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`.
- Order held: uTime then uGravity. gravityPull written only to uGravity and scales theta step.
- Formulas held exactly as in the chat paste.
- Prior holds remain: torus y shared infinity (729), triangular floor (728), phi external (727).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 731 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) before switch.
2. 732 — hold switch(targetState.geometry) as sole four-case dispatch.
3. 733 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
