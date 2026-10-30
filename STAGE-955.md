# STAGE-955 — reaffirm full update(t) kernel pin from current connecting chat; hold infinity lemniscate denom shared by x/z only (2026-10-30)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 954 full kernel pin reaffirmed (README/ledger); 941 triangular floor session pin.

## Enhancement this hop
Reaffirms the complete update(t) kernel pin exactly as pasted in the current connecting chat. Session paste not rewritten. Living path optimizations remain separate. Holds infinity lemniscate denom `1 + Math.pow(Math.sin(this.theta), 2)` shared by x and z only; y unread by denom. Scale = major * 1.5. No secrets. No device rooted.

## Next stages compiled
1. 956 — hold hamiltonian parametric x/z free of minor; y lift sin(t)*2 free of hScale/minor.
2. 957 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 958 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall (already advanced to 955).
