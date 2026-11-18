# STAGE-1317 — hold torus/default tube (major + minor*cos(phi)) shared by x/z, y identity to infinity (2026-11-18T15:37Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1317 holding the torus/default case.

## Session pin (paste not rewritten)
- case 'torus':
        default:
            // Standard Toroidal Math
            x = (major + minor * Math.cos(this.phi)) * Math.cos(this.theta);
            z = (major + minor * Math.cos(this.phi)) * Math.sin(this.theta);
            y = minor * Math.sin(this.phi) * Math.sin(t * 0.5 + this.idx);
            break;
- Tube form: (major + minor*cos(phi)) shared by x/z. y = minor * sin(phi) * sin(t*0.5 + idx), identity form to the infinity case y.
- prior holds: 1316 triangular modulo-based snapping to 3D tetrahedron/triangular lattice with tAngle floor and y sector (idx%3-1)*major*0.5.
- Paste not rewritten.

## Enhancement this hop
Holds the torus/default standard toroidal math with the shared tube radius on x/z and y identity to infinity. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1318 — hold final lerp(new THREE.Vector3(x, y, z), 0.05) session alloc alpha literal unread by gravityPull/toroidalWeave.
2. 1319 — hold major/minor assignment major=10+(idx*2) minor=3+(toroidalWeave*2) prior to switch; phi external.
3. 1320 — hold uniforms order uTime then uGravity and theta step * gravityPull.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
