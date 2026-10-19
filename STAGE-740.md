# STAGE-740 — Hold theta step (0.01 + idx * 0.002) * gravityPull (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- Step base 0.01 + idx*0.002 scaled only by gravityPull. Does not take toroidalWeave, t, or phi.
- Formulas held exactly as in the chat paste.
- Prior holds remain: phi unread (739), lerp (738).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 741 — hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) before switch.
2. 742 — hold switch sole four-case dispatch.
3. 743 — hold uniforms uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
