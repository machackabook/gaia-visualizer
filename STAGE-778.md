# STAGE-778 — Hold phi as external driver unread inside paste assignment (used only in torus/infinity y) (2026-10-21)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Phi (`this.phi`) is referenced in the paste:
  - infinity y: `minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)`
  - torus / default y: identical formula
  - torus tube: `major + minor * Math.cos(this.phi)` on x/z
- Never assigned or mutated inside the session `update(t)` body. External driver (living advanceChatKernelAngles or prior hop).
- Paste not rewritten. No secrets.
- Prior holds remain: lerp literal alpha 0.05 (777), torus/default tube (776).

## Enhancement this hop
Pins phi as read-only external input. Holds the shared y formula and tube radius dependence without introducing assignment inside the session paste.

- this.phi unread / external
- used only in infinity y, torus y, and torus tube radius
- paste not rewritten

## Compiled next stages
1. 779 — hold switch(targetState.geometry) as sole case dispatch with default torus.
2. 780 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
