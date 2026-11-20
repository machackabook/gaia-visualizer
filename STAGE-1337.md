# STAGE-1337 — hold uniform write order uTime then uGravity and theta accumulation (2026-11-20T00:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1337 holding the opening uniforms and theta step.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Write order is uTime first, then uGravity. Theta step multiplies the base rate by gravityPull. Unread by the subsequent geometry switch.
- prior holds: 1336 smooth lerp interpolation (alpha 0.05) to target geometric state.
- Paste not rewritten.

## Enhancement this hop
Holds the uniform writes in fixed order and the theta accumulation scaled by gravityPull. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1338 — hold major/minor derivation and toroidalWeave modulation prior to switch.
2. 1339 — hold phi external binding across cases (referenced, never assigned inside update(t)).
3. 1340 — hold full kernel closure with all prior pins.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
