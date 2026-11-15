# STAGE-1285 — hold torus/default tube (major + minor*cos(phi)) on x/z, y shared with infinity (2026-11-15T22:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1285 holding the torus/default case.

## Session pin (paste not rewritten)
- case 'torus':
- default:
- // Standard Toroidal Math
- x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
- z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
- y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor*cos(phi)) applied only to x/z. Y identity shared with infinity case (unread by the tube radius formula).
- prior holds: 1284 triangular floor to 2π/3 with y sector free of theta*5.
- Paste not rewritten.

## Enhancement this hop
Holds the standard toroidal parametric on the default/torus case. Major/minor tube composition on the poloidal plane (x/z). Vertical (y) oscillation matches the infinity lemniscate y exactly. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1286 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal.
2. 1287 — hold full kernel closure with all prior pins reaffirmed.
3. 1288 — hold uniforms write order uTime then uGravity reaffirmation.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
