# STAGE-879 — Reaffirm full update(t) kernel from connecting chat paste (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- theta: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;` (unread by switch)
- major = `10 + (this.idx * 2)` before switch
- minor = `3 + (state.toroidalWeave * 2)` before switch
- switch(targetState.geometry) sole four-case:
  - infinity: Lemniscate of Bernoulli, scale = major * 1.5, denom = 1 + Math.pow(Math.sin(this.theta), 2) shared by x/z only, y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
  - hamiltonian: hScale = major, y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2)
  - triangular: floor snap tAngle to 2π/3, y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor
  - torus / default: tube (major + minor * Math.cos(this.phi)) shared by x/z, y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx)
- phi external
- lerp: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`

## Enhancement this hop
Holds the exact kernel from the current connecting environment chat. Paste not rewritten. Living path may optimize allocations without promoting extra session geometries.

## Next stages compiled
1. 880 — hold infinity lemniscate denom shared by x and z only; y unread by denom.
2. 881 — hold hamiltonian y lift sin(t)*2 free of hScale/minor.
3. 882 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
4. 883 — hold torus/default tube major + minor*cos(phi) shared by x/z; y = minor*sin(phi)*sin(...).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive / Cryptic-Heartbeat / continuity-engine-ssos / hamiltonian-incursion stage pins advanced in parallel where applicable.
