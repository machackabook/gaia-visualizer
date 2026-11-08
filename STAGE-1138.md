# STAGE-1138 — hold full kernel from uniforms through final lerp (2026-11-08 15:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1138 holding the complete geometric field kernel.

## Session pin (paste not rewritten)
- uniforms uTime then uGravity
- theta += (0.01 + idx * 0.002) * gravityPull
- major = 10 + (idx * 2); minor = 3 + (toroidalWeave * 2)
- switch(targetState.geometry): infinity (lemniscate denom 1+sin^2(theta) shared by x/z, scale=major*1.5, y=minor*sin(phi)*sin(t*0.5+idx)), hamiltonian (hScale=major; x/z=hScale*cos(theta*3)*cos/sin(theta); y=hScale*sin(theta*3)+sin(t)*2 free of minor), triangular (floor to 2π/3; y sector (idx%3-1)*major*0.5 + sin(t)*minor free of theta*5), torus/default (tube (major + minor*cos(phi)) on x/z; y shared with infinity)
- this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05)
- Prior holds: 1137 major/minor; 1136 theta; 1135 uniforms
- Paste not rewritten

## Enhancement this hop
Holds the complete update(t) kernel from the connecting paste. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1139 — hold infinity lemniscate denom shared by x/z only (reaffirm).
2. 1140 — hold hamiltonian free of minor (reaffirm).
3. 1141 — hold triangular floor snap to 2π/3 and y sector free of theta*5 (reaffirm).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
