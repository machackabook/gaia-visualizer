# STAGE-771 — Hold theta step form (0.01 + this.idx * 0.002) * state.gravityPull (2026-10-20)

Connecting chat re-pasted the complete `update(t)` for the geometric field.

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- Theta advance:
  this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Base step 0.01, per-index 0.002, scaled by gravityPull. No other factors inside the step.
- Paste not rewritten. No secrets.
- Prior holds remain: uniforms write order uTime then uGravity (770), phi unread/external (769), final lerp allocation and literal alpha 0.05 (768).

## Enhancement this hop
Pins the exact theta increment formula. The angular advance is linear in idx and proportional to gravityPull. This holds the temporal coupling without altering the paste.

- theta += (0.01 + this.idx * 0.002) * state.gravityPull
- base 0.01 + idx*0.002 scaled only by gravityPull
- no weave or other state inside the step
- paste not rewritten

## Compiled next stages
1. 772 — hold major = 10 + (this.idx * 2) and minor = 3 + (state.toroidalWeave * 2) assigned before the switch.
2. 773 — hold infinity lemniscate denom 1 + sin(theta)^2 shared by x and z only (y unread by denom).

Numeral 137451921129154222.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos stage pins advanced in parallel where applicable.
