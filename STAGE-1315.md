# STAGE-1315 — hold hamiltonian parametric vertex traversal (theta*3) on spherical grid with y offset sin(t)*2 (2026-11-18T15:35Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1315 holding the hamiltonian case parametric mapping.

## Session pin (paste not rewritten)
- case 'hamiltonian':
            // Parametric mapping favoring vertex traversal over a spherical grid
            const hScale = major;
            x = hScale * Math.cos(this.theta * 3) * Math.cos(this.theta);
            z = hScale * Math.cos(this.theta * 3) * Math.sin(this.theta);
            y = hScale * Math.sin(this.theta * 3) + (Math.sin(t) * 2);
            break;
- hScale = major. x/z use cos(theta*3)*cos/sin(theta). y = hScale * sin(theta*3) + sin(t)*2. Free of minor on the lift.
- prior holds: 1314 infinity lemniscate of Bernoulli: scale=major*1.5, denom=1+sin(theta)^2 shared by x/z only, y free of denom.
- Paste not rewritten.

## Enhancement this hop
Holds the hamiltonian parametric mapping favoring vertex traversal over a spherical grid, with the y offset sin(t)*2 free of hScale/minor on the lift. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1316 — hold triangular modulo-based snapping to 3D tetrahedron/triangular lattice with tAngle floor and y sector (idx%3-1)*major*0.5.
2. 1317 — hold torus/default tube (major + minor*cos(phi)) shared by x/z, y identity to infinity.
3. 1318 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal unread by gravityPull/toroidalWeave.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
