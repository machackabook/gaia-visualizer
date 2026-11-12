# STAGE-1221 — hold triangular floor snap to 2π/3 with minor modulation and y sector free of theta*5 (2026-11-12 19:09Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1221 holding the triangular lattice mapping.

## Session pin (paste not rewritten)
- case 'triangular':
    // Modulo-based snapping to form a 3D tetrahedron/triangular lattice
    const tAngle = (Math.floor(this.theta / (Math.PI * 2 / 3)) * (Math.PI * 2 / 3));
    x = major * Math.cos(tAngle) + minor * Math.cos(this.theta * 5);
    z = major * Math.sin(tAngle) + minor * Math.sin(this.theta * 5);
    y = (this.idx % 3 - 1) * major * 0.5 + Math.sin(t) * minor;
    break;
- Floor snap to 2π/3 for lattice vertices. Minor modulates the theta*5 terms on x/z. y sector (idx % 3 - 1)*major*0.5 free of the theta*5 modulation; additive sin(t)*minor.
- prior holds: 1220 hamiltonian parametric free of minor on x/z, y lift free of hScale/minor.
- Paste not rewritten.

## Enhancement this hop
Holds the triangular modulo floor snap to 2π/3 forming tetrahedron/lattice, with minor on the high-frequency theta*5 terms and y sector independent of that modulation. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1222 — hold torus/default tube (major + minor*cos(phi)) shared by x/z; y identity to infinity.
2. 1223 — hold major/minor assignment prior to switch and phi as external weave parameter.
3. 1224 — hold lerp alpha literal 0.05 unread by gravityPull and toroidalWeave.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
