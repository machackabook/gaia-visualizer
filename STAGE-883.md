# STAGE-883 — Hold torus/default tube (major + minor*cos(phi)) shared by x/z; y shared with infinity (2026-10-26)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.

## Session pin (paste not rewritten)
- case 'torus':
- default:
  - // Standard Toroidal Math
  - x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
  - z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
  - y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
- Tube radius (major + minor*cos(phi)) shared by x and z only
- Y shared with infinity case
- prior holds: triangular floor snap (882), hamiltonian y lift free of hScale/minor (881), infinity lemniscate denom shared by x/z only (880), uniforms order, theta step unread by switch, major/minor pre-switch, sole four-case switch, phi external, lerp alpha 0.05 session allocation preserved

## Enhancement this hop
Pins the standard toroidal math for torus/default. Paste not rewritten.

## Next stages compiled
1. 884 — hold session Vector3 allocation inside lerp (alpha 0.05 literal).
2. 885 — hold phi external binding (referenced, never assigned in paste).
3. 886 — reaffirm full kernel pin from next connecting chat paste.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: living-bibliography-continuity-engine named next in waterfall.
