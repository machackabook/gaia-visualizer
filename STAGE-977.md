# STAGE-977 — hold hamiltonian y lift free of hScale and minor (2026-10-31)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 976 infinity lemniscate denom shared by x/z only.

## Enhancement this hop
Holds the hamiltonian case: const hScale = major; x/z parametric free of minor; y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2). The lift (sin(t)*2) does not scale with hScale or minor. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 978 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
2. 979 — hold torus/default tube (major + minor*cos(phi)) shared by x/z.
3. 980 — hold full kernel pin with session Vector3 lerp.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: continuity-ledger-cycle next in waterfall.
