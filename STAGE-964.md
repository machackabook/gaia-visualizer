# STAGE-964 — hold lerp alpha literal 0.05 and session Vector3 allocation (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 963 switch sole four-case dispatch.

## Enhancement this hop
Holds the session lerp call as `this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);`. Alpha is the literal 0.05 with no modulation by gravityPull, toroidalWeave, or other state. A fresh Vector3 is allocated each frame in the session paste. Living path may reuse a scratch target but must preserve the mathematical target and the 0.05 rate. Session paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 965 — hold infinity lemniscate denom shared by x/z only.
2. 966 — hold hamiltonian lift sin(t)*2 free of minor/hScale.
3. 967 — hold triangular floor snap to 2π/3 and y sector free of theta*5.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
