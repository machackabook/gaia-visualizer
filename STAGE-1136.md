# STAGE-1136 — hold theta step (0.01 + idx * 0.002) * gravityPull before major/minor (2026-11-08 15:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1136 holding the theta increment.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Theta step product of (0.01 + idx * 0.002) * gravityPull occurs before major/minor declaration and before the geometry switch
- Prior holds: 1135 uniforms uTime then uGravity; 1134 final lerp alpha 0.05; 1133 torus/default tube
- Paste not rewritten

## Enhancement this hop
Holds the theta step from the connecting paste. Living path matches. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1137 — hold major/minor assignment prior to switch (major = 10 + (idx * 2); minor = 3 + (toroidalWeave * 2)).
2. 1138 — hold full kernel from uniforms through final lerp.
3. 1139 — hold infinity lemniscate denom 1 + sin(theta)^2 shared by x/z only (reaffirm).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
