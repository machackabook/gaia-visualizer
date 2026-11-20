# STAGE-1338 — hold major/minor derivation and toroidalWeave modulation prior to switch (2026-11-20T01:11Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1338 holding the pre-switch radius computation.

## Session pin (paste not rewritten)
- this.material.uniforms.uTime.value = t;
- this.material.uniforms.uGravity.value = state.gravityPull;
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Computed once per update, before the switch. Local variables. Cases may read them but the assignment itself is pre-switch and the radii are not mutated by gravityPull.
- prior holds: 1337 uniform write order uTime then uGravity and theta accumulation * gravityPull.
- Paste not rewritten.

## Enhancement this hop
Holds major and minor assignment: major = 10 + (this.idx * 2); minor = 3 + (state.toroidalWeave * 2). Pre-switch derivation. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1339 — hold phi external binding across cases (referenced, never assigned inside update(t)).
2. 1340 — hold full kernel closure with all prior pins (infinity lemniscate, hamiltonian parametric, triangular floor, torus tube).
3. 1341 — hold lerp alpha 0.05 and mesh position update finalization.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos. Next in waterfall: living-bibliography-continuity-engine.
