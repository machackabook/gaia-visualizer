# STAGE-1004 — hold full kernel as pinned session source (2026-11-01 23:08 CDT)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- Full update(t) body held exactly as pasted:
  - uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
  - theta += (0.01 + this.idx * 0.002) * state.gravityPull;
  - major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
  - switch(targetState.geometry) sole four-case: infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
  - this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 1003 uniforms write order uTime then uGravity and sources.

## Enhancement this hop
Holds the complete pasted update(t) as the sole pinned session source. Living path in geometric_field_renderer.js and siblings may continue optimizations (allocation reuse, residual certificates, extended geometries) without rewriting the session paste. Phi remains external binding. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1005 — hold four-case switch as sole geometry dispatcher for the session paste.
2. 1006 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by geometry switch.
3. 1007 — hold session lerp new Vector3 allocation with literal alpha 0.05.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive / living-bibliography-continuity-engine next in waterfall.
