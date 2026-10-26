# Stage 877 — hold full update(t) kernel from current connecting chat (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin
- uniforms written: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- theta increment: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- major = `10 + (this.idx * 2)` assigned before switch
- minor = `3 + (state.toroidalWeave * 2)` assigned before switch
- switch on `targetState.geometry`: infinity (Lemniscate of Bernoulli, scale = major * 1.5, denom = 1 + sin(theta)^2), hamiltonian (hScale = major, y lift sin(t)*2), triangular (floor snap to 2π/3, y sector (idx % 3 - 1) * major * 0.5), torus/default (tube (major + minor * cos(phi)) * cos/sin(theta), y minor * sin(phi) * sin(t * 0.5 + idx))
- phi referenced but never assigned inside the paste (external)
- smooth lerp: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);` (literal alpha, new allocation each call)

## Enhancement this hop
Reaffirms the full kernel pin from the latest connecting chat paste. No rewrite of the paste. Living path may continue to reuse Vector3 and optional weave uniforms without promoting extra session cases.

- All four cases + default held exactly as pasted.
- No promotion of klein/hopf/figure8/trefoil until a future paste includes them.
- Theta step unread by switch. Major/minor pre-switch. Uniforms order held.

## Next
- Continue compounding holds in subsequent hops.
- Advance waterfall to next sibling.

Connecting repos: gaia-visualizer, The-Hive, Cryptic-Heartbeat, continuity-engine-ssos, living-bibliography-continuity-engine, hamiltonian-incursion.
Numeral `137451921129154222`. No secrets. Paste not rewritten.
