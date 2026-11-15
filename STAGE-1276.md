# STAGE-1276 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (2026-11-15T17:12Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1276 holding the triangular arm.

## Session pin (paste not rewritten)
- case 'triangular':
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Modulo-based snapping to form a 3D tetrahedron/triangular lattice.
- tAngle floor to 2π/3. y sector free of theta*5.
- prior holds: 1275 hamiltonian parametric x/z free of minor; y lift free of hScale/minor.
- Paste not rewritten.

## Enhancement this hop
Holds the triangular lattice snap. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1277 — hold torus/default tube shared by x/z.
2. 1278 — hold theta step product unread by geometry switch.
3. 1279 — hold major/minor formulas before switch.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
