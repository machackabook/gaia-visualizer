# Stage 658 — hold uniforms write order uTime then uGravity (2026-10-15)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms written first in update(t):
    this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime then uGravity. Sole material uniform writes in the session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: theta step (657), lerp alloc (656), phi unused (655).

## Compiled next stages
1. 659 — hold major/minor assigned before the switch.
2. 660 — hold switch sole four-case dispatch.
3. 661 — hold infinity lemniscate denom shared by x and z only.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
