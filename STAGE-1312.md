# STAGE-1312 — hold uniforms order uTime then uGravity and theta step product (0.01 + idx*0.002)*gravityPull (2026-11-18T03:23Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1312 holding the uniform assignments and theta increment.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
    this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Order is uTime first, then uGravity. Theta step is the product of the base rate and gravityPull. Prior holds: 1311 final lerp session alloc alpha literal.
- Paste not rewritten.

## Enhancement this hop
Holds the uniform writes in declaration order (uTime then uGravity) and the exact theta increment formula from the connecting paste. Living path matches the session paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1313 — hold switch(targetState.geometry) sole four-case dispatcher (infinity, hamiltonian, triangular, torus/default).
2. 1314 — hold infinity lemniscate of Bernoulli: scale=major*1.5, denom=1+sin(theta)^2 shared by x/z only, y free of denom.
3. 1315 — hold hamiltonian parametric vertex traversal (theta*3) on spherical grid with y offset sin(t)*2.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
