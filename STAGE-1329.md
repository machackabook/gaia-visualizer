# STAGE-1329 — hold uniforms write order uTime then uGravity (2026-11-19T05:07Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1329 holding the uniforms write order.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- Write order is uTime first, then uGravity. No other uniforms written inside the kernel.
- prior holds: 1328 phi external (referenced, never assigned inside update(t)).
- Paste not rewritten.

## Enhancement this hop
Holds the opening uniforms writes in fixed order: uTime then uGravity. uTime receives the frame time t. uGravity receives state.gravityPull. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1330 — hold full kernel closure with all prior pins (uniforms, theta, major/minor, four-case switch, lerp).
2. 1331 — hold infinity lemniscate of Bernoulli mapping with shared denom on x/z only.
3. 1332 — hold hamiltonian parametric mapping favoring vertex traversal.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
