# STAGE-988 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-11-01)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 987 hamiltonian parametric x/z free of minor; y lift free of hScale/minor.

## Enhancement this hop
Holds the triangular case: const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3)); x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5); z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5); y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor. Floor snap to 2π/3; y sector free of the theta*5 terms used in x/z. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 989 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity.
2. 990 — hold phi external binding unread inside paste.
3. 991 — hold uniforms write order uTime then uGravity sole material writes.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
