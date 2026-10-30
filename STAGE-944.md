# STAGE-944 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'triangular': const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
- x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
- z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
- y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor; // y sector by idx%3, free of theta*5 and of tAngle
- Floor snap uses Math.floor to 2π/3 sectors; y is lane-based and independent of the high-frequency theta*5 term.
- prior holds: 943 hamiltonian y lift free of hScale/minor.

## Enhancement this hop
Holds the triangular modulo/floor snap and y sector exactly as pasted. Y remains free of the theta*5 perturbation and of the snapped tAngle. Paste not rewritten. No secrets.

## Next stages compiled
1. 945 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity.
2. 946 — hold theta advance (0.01 + idx*0.002)*gravityPull and phi external.
3. 947 — hold uniforms uTime/uGravity write and material reference.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
