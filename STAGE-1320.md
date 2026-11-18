# STAGE-1320 — hold uniforms order uTime then uGravity and theta step * gravityPull (2026-11-18T16:20Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1320 holding the uniforms and theta increment.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
    this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Uniforms ordered uTime then uGravity. Theta step is the product (0.01 + idx * 0.002) * gravityPull, unread by geometry switch.
- prior holds: 1319 major/minor prior to switch; phi external.
- Paste not rewritten.

## Enhancement this hop
Holds the opening uniforms assignment (uTime then uGravity) and the theta step multiplied by state.gravityPull before major/minor and the switch. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1321 — hold phi as external binding never assigned inside update(t).
2. 1322 — hold full kernel hash reaffirmation across infinity/hamiltonian/triangular/torus.
3. 1323 — hold geometry.js evaluateGeometry mapping fidelity to the four session cases.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
