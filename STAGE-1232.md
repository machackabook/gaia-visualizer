# STAGE-1232 — hold uniforms write order uTime then uGravity; theta step * gravityPull (2026-11-13 04:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1232 holding the uniforms assignment order and theta increment scaled by gravityPull.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Order held: uTime first, then uGravity. Theta step multiplies the base rate by gravityPull.
- prior holds: 1231 major/minor assignment prior to switch; phi external.
- Paste not rewritten.

## Enhancement this hop
Holds the exact uniforms write sequence and the gravity-scaled theta advance from the connecting paste. No reordering invented. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1233 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session allocation after switch.
2. 1234 — hold full kernel closure with all prior pins.
3. 1235 — hold geometry switch four cases exclusive (infinity, hamiltonian, triangular, torus/default).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
