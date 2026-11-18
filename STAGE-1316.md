# STAGE-1316 — hold triangular modulo-based snapping to 3D tetrahedron/triangular lattice with tAngle floor and y sector (idx%3-1)*major*0.5 (2026-11-18T15:36Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1316 holding the triangular case lattice snapping.

## Session pin (paste not rewritten)
- case 'triangular':
            // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
            const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
            x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
            z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
            y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
            break;
- tAngle floors theta to multiples of 2π/3. x/z base on tAngle plus minor weave *5. y sector (idx%3-1)*major*0.5 + sin(t)*minor, free of theta*5.
- prior holds: 1315 hamiltonian parametric vertex traversal (theta*3) on spherical grid with y offset sin(t)*2.
- Paste not rewritten.

## Enhancement this hop
Holds the triangular modulo-based snapping to form a 3D tetrahedron/triangular lattice, with tAngle floor and y sector free of the theta*5 minor terms. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1317 — hold torus/default tube (major + minor*cos(phi)) shared by x/z, y identity to infinity.
2. 1318 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal unread by gravityPull/toroidalWeave.
3. 1319 — hold major/minor assignment major=10+(idx*2) minor=3+(toroidalWeave*2) prior to switch; phi external.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
