# STAGE-1253 — hold torus/default tube radius shared by x/z with y identity to infinity (2026-11-14 16:14Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1253 holding the torus/default mapping.

## Session pin (paste not rewritten)
- case 'torus':
  default:
    // Standard Toroidal Math
    x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
    z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
    y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
    break;
- Tube radius (major + minor * cos(phi)) shared by x and z.
- y identity to infinity case: minor * sin(phi) * sin(t*0.5 + idx).
- prior holds: 1252 triangular floor snap.
- Paste not rewritten.

## Enhancement this hop
Holds the torus/default tube shared by x/z and y identity to infinity. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1254 — hold major/minor assignment order before switch and uniforms order.
2. 1255 — hold final lerp alpha 0.05 session allocation after switch.
3. 1256 — hold full kernel closure with all prior pins parallel.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
