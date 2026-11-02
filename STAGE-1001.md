# STAGE-1001 — hold phi as external binding referenced but never assigned inside paste (2026-11-01 20:08 CDT)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 1000 major/minor assignment before switch unread by case bodies.

## Enhancement this hop
Holds this.phi as external binding: referenced in infinity y, torus/default tube (cos(phi) on x/z) and y, never assigned or mutated inside the session paste of update(t). Phi remains an external driver supplied outside the kernel (sessionPhiExternal). Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1002 — hold session lerp new Vector3 allocation with literal alpha 0.05.
2. 1003 — hold uniforms write order uTime then uGravity and sources.
3. 1004 — hold full kernel as pinned session source; living path may optimize allocations without rewrite.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive / living-bibliography-continuity-engine next in waterfall.
