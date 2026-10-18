# Stage 703 — hold theta step as (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-17)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance:
  this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Base 0.01 + idx-scaled 0.002, multiplied by gravityPull. Paste not rewritten. No secrets.
- Prior holds remain: session lerp allocation (702), torus tube (701), triangular floor (700).

## Compiled next stages
1. 704 — hold uniforms write order uTime then uGravity.
2. 705 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
3. 706 — hold infinity lemniscate scale = major * 1.5 before denom.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat stage pins advanced in parallel where applicable.
