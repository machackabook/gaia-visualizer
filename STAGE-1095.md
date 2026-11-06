# STAGE-1095 — hold torus/default tube (major + minor * cos(phi)) shared by x/z; y shared with infinity (2026-11-06 15:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1095 holding the torus/default case.

## Session pin (paste not rewritten)
- case 'torus':
  default:
    // Standard Toroidal Math
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
    break;
- tube radius (major + minor * cos(phi)) shared by x and z; y uses minor * sin(phi) * sin(t*0.5 + idx) identical to infinity case
- prior holds: 1094 triangular modulo snap to tetrahedron/lattice

## Enhancement this hop
Holds the standard toroidal math as the default geometric state. Living path matches the connecting paste. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1096 — hold final lerp(new THREE.Vector3(x, y, z), 0.05).
2. 1097 — hold uniforms uTime = t then uGravity = state.gravityPull at entry.
3. 1098 — hold phi as external binding referenced but never assigned inside paste.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
