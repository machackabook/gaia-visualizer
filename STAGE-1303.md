# STAGE-1303 — hold uniforms assignment order uTime then uGravity and theta step * gravityPull (2026-11-17T03:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1303 holding the entry uniforms and theta increment.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Order held: uTime first, then uGravity. Theta step is the product of (0.01 + idx * 0.002) and gravityPull. No other factors.
- prior holds: 1300 triangular floor snap to 2π/3 with y sector free of theta*5; 1302 full kernel parallel pin.
- Paste not rewritten.

## Enhancement this hop
Holds the opening uniforms assignment in declared order and the precise theta advancement formula multiplied by gravityPull. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1304 — hold major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2) prior to switch.
2. 1305 — hold infinity lemniscate shared denom for x/z only, scale = major * 1.5.
3. 1306 — hold phi external unread inside update(t).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
