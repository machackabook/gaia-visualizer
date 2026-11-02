# STAGE-997 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-11-01)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- uniforms: this.material.uniforms.uTime.value = t; this.material.uniforms.uGravity.value = state.gravityPull;
- theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2);
- switch(targetState.geometry): infinity (lemniscate of Bernoulli, denom 1 + sin(theta)^2 shared by x/z only, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx) unread by denom), hamiltonian (parametric x/z free of minor, y = hScale*sin(theta*3) + sin(t)*2 free of hScale/minor on the lift), triangular (floor theta to 2π/3, y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z, y shared with infinity);
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- prior holds: 996 hamiltonian parametric x/z free of minor; y lift free of hScale/minor.

## Enhancement this hop
Holds the triangular case: Modulo-based snapping to form a 3D tetrahedron/triangular lattice. tAngle = floor(theta / (2π/3)) * (2π/3). x/z use major * cos/sin(tAngle) + minor * cos/sin(theta*5). y = (idx % 3 - 1) * major * 0.5 + sin(t)*minor, free of the theta*5 ripple. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 998 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.
2. 999 — hold theta step product (0.01 + idx * 0.002) * gravityPull unread by geometry switch.
3. 1000 — hold major/minor assignment before switch unread by case bodies.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: The-Hive next in waterfall.
