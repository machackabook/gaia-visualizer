# Stage 535 — hold uTime then uGravity as the only material writes (2026-10-09 21:06 CDT)

Connecting chat re-pasted `update(t)`.

## Session pin
- session hash `beec41f1` held. Living hash `7cd81012` held.
- material writes are only:
  - `this.material.uniforms.uTime.value = t;`
  - `this.material.uniforms.uGravity.value = state.gravityPull;`
- order is uTime then uGravity. No other uniforms written in the paste.
- theta step, major/minor radii, and geometry switch follow after.
- paste still calls `lerp(new THREE.Vector3(x, y, z), 0.05)`.
- Klein / hopf / figure8 / trefoil / mobius stay runtime-only.

## Enhancement this hop
`noteSessionUniformOrderHold` confirms the write order and exclusivity:

- only two material writes
- uTime first, uGravity second
- no uWeave, uBlend, uPhi, or uEnergy written by the session paste
- living path may attach optional uniforms; paste remains unchanged

No session case added. Paste not rewritten. No secrets.

## Next
- 536 hold torus as the default case and the only fallthrough
- 537 hold triangular tAngle floor snap distinct from the theta*5 minor ripple
- 538 hold infinity denom `1 + sin(theta)^2` unread by minor or phi

Connecting repos: The-Hive, gaia-visualizer, Cryptic-Heartbeat, continuity-engine-ssos.
Numeral `137451921129154222`. No secrets.
