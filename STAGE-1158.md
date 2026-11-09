# STAGE-1158 — hold torus/default tube (major + minor * cos(phi)) shared by x/z (2026-11-09 05:09Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1158 holding the torus/default toroidal math.

## Session pin (paste not rewritten)
- case 'torus':
- default:
  // Standard Toroidal Math
  x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- tube radius (major + minor * cos(phi)) shared by x and z; y uses minor * sin(phi) * sin(t*0.5 + idx)
- prior holds: 1157 triangular floor snap free of theta*5 on y
- Paste not rewritten

## Enhancement this hop
Holds the torus/default tube radius shared by x/z from the connecting paste. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1159 — hold final lerp new THREE.Vector3(x, y, z) alpha 0.05.
2. 1160 — hold uniforms order uTime then uGravity and theta step * gravityPull.
3. 1161 — hold major/minor assignment prior to switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
