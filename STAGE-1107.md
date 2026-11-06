# STAGE-1107 — hold uniforms uTime then uGravity and theta step product unread by geometry switch (2026-11-06 22:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1107 holding the uniforms and theta step pin.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- uniforms written before geometry evaluation; theta advance product unread inside switch
- phi external; paste not rewritten
- prior holds: 1106 full four-case switch and lerp interpolation

## Enhancement this hop
Holds the material uniforms assignment for uTime and uGravity, followed by the theta increment driven by the product of base rate, index scale and gravityPull. These are independent of the subsequent geometry switch. Living path matches the connecting paste. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1108 — hold major/minor placement before switch and phi external driver.
2. 1109 — hold gravityPull modulation across uniforms and theta advance.
3. 1110 — hold the complete update(t) kernel as living field continuity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
