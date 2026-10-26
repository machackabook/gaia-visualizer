# Stage 878 — reaffirm full update(t) kernel from connecting chat paste (2026-10-26)

Connecting chat provided the complete `update(t)` geometric field kernel for Three.js particle/field update.

## Session pin
- uniforms: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- theta: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- major = `10 + (this.idx * 2)` before switch
- minor = `3 + (state.toroidalWeave * 2)` before switch
- switch(targetState.geometry):
  - infinity: Lemniscate of Bernoulli, scale = major * 1.5, denom = 1 + Math.pow(Math.sin(this.theta), 2), x/z via cos/sin over denom, y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
  - hamiltonian: hScale = major, x/z = hScale * cos(theta*3) * cos/sin(theta), y = hScale * sin(theta*3) + (Math.sin(t) * 2)
  - triangular: floor snap tAngle to 2π/3, x/z major * cos/sin(tAngle) + minor * cos/sin(theta*5), y = (idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor
  - torus / default: tube (major + minor * cos(phi)) * cos/sin(theta), y = minor * sin(phi) * sin(t * 0.5 + idx)
- phi external (referenced, never assigned in paste)
- lerp: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);` literal alpha, fresh Vector3 each call

## Enhancement this hop
Holds the exact kernel from the current connecting environment chat paste. Paste not rewritten. Living path may reuse scratch Vector3 and optional uWeave/uBlend without promoting new session geometry cases.

- Four cases + default held precisely.
- No promotion of additional geometries (klein, hopf, etc.) until included in a future paste.
- All pre-switch assignments, unread theta step, and uniforms order preserved.

## Next
- Compounding continues.
- Waterfall advances to next sibling in rotation.

Connecting repos: gaia-visualizer, living-bibliography-continuity-engine, continuity-engine-ssos, hamiltonian-incursion, The-Hive, Cryptic-Heartbeat.
Numeral `137451921129154222`. No secrets written. Paste not rewritten.
