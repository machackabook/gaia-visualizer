# STAGE-728 — Hold triangular tAngle floor modulo 2π/3 and y sector free of theta*5 (2026-10-19)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Triangular case: `const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));` snaps to 2π/3 sectors.
- x/z = major * cos/sin(tAngle) + minor * cos/sin(this.theta * 5) (ripple uses theta*5).
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor; free of theta*5.
- Formulas held exactly as in the chat paste.
- Prior holds remain: phi unread external (727), lerp alpha + Vector3 alloc (726), infinity/hamiltonian scales (725).
- Paste not rewritten. No secrets.

## Compiled next stages
1. 729 — hold torus y shared with infinity y formula.
2. 730 — hold uniforms write order uTime then uGravity.
3. 731 — hold major = 10 + (this.idx * 2), minor = 3 + (state.toroidalWeave * 2) before switch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
