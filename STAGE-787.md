# STAGE-787 — Hold theta step (0.01 + idx * 0.002) * gravityPull (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advances as `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- Applied after uniforms, before major/minor and switch.
- Phi remains external/unread. Uniforms order uTime then uGravity held from 786.
- Paste not rewritten. No secrets.

## Compiled next stages
1. 788 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch.
2. 789 — hold switch(targetState.geometry) as sole four-case dispatch with default torus.
3. 790 — hold infinity lemniscate mapping and shared y formula.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
