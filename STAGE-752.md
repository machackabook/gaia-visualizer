# STAGE-752 — Hold theta step (0.01 + idx * 0.002) * gravityPull (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- Step multiplier held exactly. gravityPull scales the angular velocity. idx offsets per particle.
- Assigned after uniforms, before major/minor. Paste not rewritten. No secrets.
- Prior holds remain: major/minor before switch (751), phi external (750), full kernel pin (749).

## Compiled next stages
1. 753 — hold uniforms write order uTime then uGravity.
2. 754 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
