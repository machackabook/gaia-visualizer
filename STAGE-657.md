# Stage 657 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- Step is gravityPull-scaled; base 0.01 + idx*0.002. No phi advance in session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: lerp alloc (656), phi unused (655), torus tube (654).

## Compiled next stages
1. 658 — hold uniforms write order uTime then uGravity.
2. 659 — hold major/minor assigned before the switch.
3. 660 — hold switch sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
