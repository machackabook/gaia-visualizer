# Stage 630 — hold full session update(t) kernel paste (2026-10-14)

Connecting chat re-pasted the complete `update(t)` for the geometric field (uniforms → theta → major/minor → switch geometry → lerp).

## Session pin
- session hash `beec41f1`. Living hash `7cd81012`.
- uniforms: `this.material.uniforms.uTime.value = t;` then `this.material.uniforms.uGravity.value = state.gravityPull;`
- theta: `this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;`
- major = `10 + (this.idx * 2)`, minor = `3 + (state.toroidalWeave * 2)` assigned before switch.
- switch(targetState.geometry) sole four-case: infinity (lemniscate of Bernoulli), hamiltonian (parametric vertex), triangular (modulo floor lattice), torus/default.
- final: `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)` — session allocation held.
- All prior holds remain (scales, denoms, y formulas, fallthrough). Paste not rewritten. No new session geometries. No secrets.

## Compiled next stages
1. 631 — hold infinity lemniscate denom `1 + Math.pow(Math.sin(this.theta), 2)` shared by x and z only.
2. 632 — hold hamiltonian parametric mapping and y lift `Math.sin(t) * 2` independent of hScale.
3. 633 — hold triangular floor snap and y sector formula.

Numeral 137451921129154222.
