# STAGE-945 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity (2026-10-29)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'torus':
- default:
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx); // identical y formula to infinity case
- Tube radius (major + minor*cos(phi)) shared exclusively by x and z; y formula matches infinity and is free of the tube term.
- prior holds: 944 triangular floor snap and y sector free of theta*5.

## Enhancement this hop
Holds the standard toroidal math and its y identity with the infinity case exactly as pasted. Tube is shared only by x/z. Paste not rewritten. No secrets.

## Next stages compiled
1. 946 — hold theta advance (0.01 + idx*0.002)*gravityPull and phi external.
2. 947 — hold uniforms uTime/uGravity write and material reference.
3. 948 — hold major/minor computation and switch sole four-case dispatch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine hop next in waterfall.
