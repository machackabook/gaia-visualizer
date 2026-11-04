# STAGE-1041 — hold theta increment placement and formula after uniforms, before major/minor (2026-11-03 19:10 CST)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1041 holding the theta step.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- placement immediately after the two uniform writes (uTime then uGravity), before major/minor declarations
- scales only the angular increment; does not scale major or minor
- prior holds: 1040 phi external binding (this.phi referenced, never assigned in kernel)

## Enhancement this hop
Holds the exact theta increment formula, coefficient, and placement. Session paste remains untouched. Living path matches. Paste not rewritten. No secrets. No device rooted.

## Next stages compiled
1. 1042 — hold major/minor formulas and placement before switch (major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2)).
2. 1043 — hold uniforms write order uTime then uGravity as sole material writes.
3. 1044 — hold four-case switch sole dispatcher (infinity|hamiltonian|triangular|torus/default).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
