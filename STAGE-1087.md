# STAGE-1087 — hold torus/default tube (major + minor*cos(phi)) shared by x/z with y identity to infinity (2026-11-05 23:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1087 holding the standard toroidal math mapping.

## Session pin (paste not rewritten)
- case 'torus':
  default:
    // Standard Toroidal Math
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
    break;
- tube (major + minor * cos(phi)) shared by x/z; y identity to infinity case
- prior holds: 1086 triangular floor snap to 2π/3 free of theta*5 on y

## Enhancement this hop
Holds the standard Toroidal Math as the default/fallback geometric state. Living path matches the connecting paste. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1088 — hold final lerp new Vector3 alpha 0.05.
2. 1089 — hold uniforms write order uTime then uGravity.
3. 1090 — hold theta step (0.01 + idx * 0.002) * gravityPull before major/minor.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
