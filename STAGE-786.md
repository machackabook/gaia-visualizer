# STAGE-786 — Hold uniforms write order uTime then uGravity (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Uniforms written first: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- Order held: uTime before uGravity. No other uniforms written in the session paste.
- Paste not rewritten. No secrets.
- Prior holds remain: phi unread / external (785), lerp allocation literal alpha 0.05 (784), major/minor before switch (783).

## Compiled next stages
1. 787 — hold theta step (0.01 + idx * 0.002) * gravityPull.
2. 788 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch.
3. 789 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
