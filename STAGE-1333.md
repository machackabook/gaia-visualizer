# STAGE-1333 — hold triangular modulo-based snapping to tetrahedron/lattice (2026-11-19T18:12Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1333 holding the triangular case mapping.

## Session pin (paste not rewritten)
- case 'triangular':
  // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Modulo-based snapping via floor division by 2π/3. Ripple on raw theta*5 for x/z. y uses idx % 3 for lattice layering + sin(t)*minor.
- prior holds: 1332 hamiltonian parametric mapping favoring vertex traversal.
- Paste not rewritten.

## Enhancement this hop
Holds the triangular case as the modulo-based snapping to form a 3D tetrahedron/triangular lattice, with tAngle floor-snap and independent y layering. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1334 — hold torus/default standard toroidal math with tube.
2. 1335 — hold full switch completeness with all four cases active.
3. 1336 — hold smooth lerp interpolation (alpha 0.05) to target geometric state.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
