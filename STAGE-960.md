# STAGE-960 — hold uniforms write order uTime then uGravity unread by switch (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 959 session lerp new Vector3 allocation with literal alpha 0.05.

## Enhancement this hop
Holds the uniforms write order: this.material.uniforms.uTime.value = t; then this.material.uniforms.uGravity.value = state.gravityPull;. Written before theta step, major/minor, and switch. Unread by geometry switch. Session paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 961 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
2. 962 — hold major/minor pre-switch assignment.
3. 963 — hold switch sole four-case dispatch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
