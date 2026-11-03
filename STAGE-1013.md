# STAGE-1013 — hold torus/default tube (major + minor * cos(phi)) on x/z only; y shared with infinity (2026-11-02 18:10 CDT)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'torus':
  case default:
  - x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  - z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor * cos(phi)) applied only to x/z; y shared with infinity case (unread by the tube radius formula).
- prior holds: 1012 triangular tAngle floor (2π/3) and y lane (idx % 3 - 1) * major * 0.5.

## Enhancement this hop
Holds torus/default tube (major + minor * cos(phi)) on x/z only; y shared with infinity. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1014 — hold lerp new Vector3 allocation with literal alpha 0.05.
2. 1015 — hold theta step (0.01 + idx * 0.002) * gravityPull before major/minor.
3. 1016 — hold uniforms write order uTime then uGravity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine next in waterfall.
