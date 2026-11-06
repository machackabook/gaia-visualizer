# STAGE-1106 — hold the full four-case switch and lerp interpolation (2026-11-06 23:09Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1106 holding the full switch and lerp.

## Session pin (paste not rewritten)
- Full switch(targetState.geometry):
  case 'infinity': Lemniscate of Bernoulli (scale = major*1.5; denom = 1 + sin(theta)^2; x/z parametric / denom; y shared)
  case 'hamiltonian': Parametric vertex traversal (hScale = major; x/z = hScale * cos(theta*3) * cos/sin(theta); y = hScale * sin(theta*3) + sin(t)*2)
  case 'triangular': Modulo snap to 3D tetrahedron/lattice (tAngle floor to 2π/3; x/z = major*cos/sin(tAngle) + minor*cos/sin(theta*5); y = (idx%3-1)*major*0.5 + sin(t)*minor)
  case 'torus': / default: Standard Toroidal Math (tube = major + minor*cos(phi); x/z = tube * cos/sin(theta); y shared)
- Smooth lerp to target: this.mesh.position.lerp(new THREE.Vector3(x, y, z), 0.05);
- Prior holds: 1105 torus/default tube with y shared to infinity
- Paste not rewritten

## Enhancement this hop
Holds the complete four-case geometric switch and the 0.05 lerp interpolation matching the connecting paste exactly. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1107 — hold uniforms uTime then uGravity and theta step product unread by geometry switch.
2. 1108 — hold major/minor placement before switch and phi external driver.
3. 1109 — hold infinity denom and scale unread by other cases.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
