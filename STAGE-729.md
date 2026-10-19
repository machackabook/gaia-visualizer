# STAGE-729 — Hold torus y shared with infinity y formula (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Torus/default case y: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`.
- Infinity case y uses the identical formula. Shared y mapping.
- Torus x/z use the tube `(major + minor * Math.cos(this.phi)) * cos/sin(this.theta)`.
- Formulas held exactly as in the chat paste.
- Prior holds remain: triangular tAngle / y sector (728), phi unread (727), lerp (726).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 730 — hold uniforms write order uTime then uGravity.
2. 731 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) before switch.
3. 732 — hold switch(targetState.geometry) as sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
