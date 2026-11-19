# STAGE-1333 — hold triangular modulo-based snapping to tetrahedron/lattice (2026-11-19T16:58Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1333 holding the triangular case mapping.

## Session pin (paste not rewritten)
- case 'triangular':
  // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
  const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
  x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
  z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
  y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
- Floor snap of theta to 2π/3 sectors. Y sector (idx%3-1)*major*0.5 + sin(t)*minor free of the theta*5 perturbation on x/z.
- prior holds: 1332 hamiltonian parametric mapping favoring vertex traversal.
- Paste not rewritten.

## Enhancement this hop
Holds the triangular case as modulo-based snapping to form a 3D tetrahedron/triangular lattice. tAngle floors theta into 2π/3 sectors; x/z combine sector base with high-frequency minor*cos/sin(theta*5); y is the independent sector lane free of the theta*5 term. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1334 — hold torus/default standard toroidal math with tube (major + minor*cos(phi)) on x/z; y shared with infinity.
2. 1335 — hold full switch completeness with all four cases active.
3. 1336 — hold final position.lerp(new THREE.Vector3(x, y, z), 0.05) alpha literal unread by gravityPull/toroidalWeave.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
