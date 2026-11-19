# STAGE-1325 — hold major/minor formulas independent of geometry case labels (2026-11-19T01:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1325 holding major/minor formulas independent of case labels.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned prior to switch(targetState.geometry). Used across all four cases. Index-scaled major, weave-scaled minor. Unread by uniforms and theta step.
- Independent of geometry case labels. Same formulas for infinity, hamiltonian, triangular, torus/default.
- prior holds: 1324 switch sole four-case dispatcher order.
- Paste not rewritten.

## Enhancement this hop
Holds the major and minor radius formulas as independent of the geometry case labels, assigned before the switch. Living path in geometry.js matches exactly (major = 10 + idx*2, no clamp). Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1326 — hold theta step product unread by the geometry switch.
2. 1327 — hold lerp alpha literal 0.05 with new Vector3 allocation after switch.
3. 1328 — hold phi external (referenced, never assigned inside update(t)).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
