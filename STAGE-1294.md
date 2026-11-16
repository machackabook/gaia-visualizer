# STAGE-1294 — hold uniforms write order uTime then uGravity at start of update (2026-11-16T05:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1294 holding the uniforms assignment order.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Order held: uTime first, then uGravity at the head of update(t).
- prior holds: 1293 final lerp(new THREE.Vector3(x, y, z), 0.05) alpha literal.
- Paste not rewritten.

## Enhancement this hop
Holds the opening uniforms writes in the exact order of the connecting paste. uTime receives the frame time t; uGravity receives state.gravityPull. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1295 — hold theta step (0.01 + idx * 0.002) * gravityPull before major/minor.
2. 1296 — hold major/minor computation major=10+(idx*2) minor=3+(toroidalWeave*2) prior to switch.
3. 1297 — hold switch(targetState.geometry) sole four-case dispatcher.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
