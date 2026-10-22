# STAGE-795 — Hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry (2026-10-22)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- The step is the sole angle advance inside the session paste. Geometry cases do not re-read or re-scale the theta increment.
- gravityPull is consumed only by this product (and the prior uniform write). No geometry arm multiplies theta by pull again.
- Paste not rewritten. No secrets.
- Prior holds remain: lerp alpha 0.05 and session Vector3 allocation (794), torus tube (793), triangular floor (792).

## Enhancement this hop
Pins the session theta step contract. Holds the exact coefficient form and that geometry evaluation treats theta as an external input.

- theta += (0.01 + this.idx * 0.002) * state.gravityPull
- unread by the four geometry cases
- sole angle advance in the paste
- paste not rewritten

## Compiled next stages
1. 796 — hold uniforms written uTime then uGravity.
2. 797 — hold major = 10 + (idx * 2) and minor = 3 + (toroidalWeave * 2) assigned before switch.
3. 798 — hold switch(targetState.geometry) sole four-case dispatch.

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
