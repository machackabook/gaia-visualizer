# STAGE-956 — hold hamiltonian parametric x/z free of minor; y lift sin(t)*2 free of hScale/minor (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 955 infinity lemniscate denom shared by x/z only (y unread by denom); 954 full kernel pin reaffirmed.

## Enhancement this hop
Holds the hamiltonian parametric mapping: x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta); z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta); y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2). X/Z free of minor. Y lift sin(t)*2 free of hScale and minor. Session paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 957 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 958 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity.
3. 959 — hold session lerp new Vector3 allocation with literal alpha 0.05.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
