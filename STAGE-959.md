# STAGE-959 — hold session lerp new Vector3 allocation with literal alpha 0.05 (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 958 torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity.

## Enhancement this hop
Holds the session position update: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05). Allocates a fresh THREE.Vector3 each call. Alpha remains the literal 0.05 with no modulation by gravityPull or toroidalWeave. Living path may reuse a target vector; session paste does not. Session paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 960 — hold uniforms write order uTime then uGravity unread by switch.
2. 961 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by switch.
3. 962 — hold major/minor pre-switch assignment.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
