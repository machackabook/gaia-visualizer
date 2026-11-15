# STAGE-1284 — hold triangular floor theta to 2π/3 with y sector free of theta*5 (2026-11-15T21:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1284 holding the triangular case.

## Session pin (paste not rewritten)
- case 'triangular':
- const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snaps theta to 120° sectors. Y sector (idx%3-1)*major*0.5 free of the theta*5 ripple.
- prior holds: 1283 hamiltonian parametric free of minor.
- Paste not rewritten.

## Enhancement this hop
Holds the modulo-based triangular/tetrahedral lattice snapping. tAngle floors to multiples of 2π/3. Ripple terms use minor and theta*5 on x/z only. Y uses sector offset plus independent sin(t)*minor. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1285 — hold torus/default tube (major + minor*cos(phi)) on x/z, y shared with infinity.
2. 1286 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal.
3. 1287 — hold full kernel closure with all prior pins reaffirmed.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
