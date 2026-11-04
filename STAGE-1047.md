# STAGE-1047 — hold theta increment (0.01 + idx * 0.002) * gravityPull before major/minor (2026-11-03 22:08 CST)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1047 holding the session theta step.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Placed after uniforms (uTime then uGravity) and before major/minor declarations
- Multiplier is literal; no further modulation by toroidalWeave
- prior holds: 1046 lerp alpha literal 0.05 with new Vector3 allocation

## Enhancement this hop
Holds the theta increment formula and placement from the connecting chat paste. Living path matches. Session paste remains untouched. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1048 — hold hamiltonian y lift free of minor/phi (y = hScale * sin(theta*3) + sin(t)*2).
2. 1049 — hold triangular floor snap to 2π/3 and y sector free of theta*5.
3. 1050 — hold torus/default tube (major + minor * cos(phi)) shared by x/z; y identity to infinity.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
