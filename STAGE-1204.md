# STAGE-1204 — hold major/minor declarations (major = 10 + (idx * 2), minor = 3 + (toroidalWeave * 2)) prior to switch (2026-11-12 01:15Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1204 holding the radii assignment.

## Session pin (paste not rewritten)
- let major = 10 + (this.idx * 2);
- let minor = 3 + (state.toroidalWeave * 2);
- Assigned before switch(targetState.geometry). Both radii exclusive to pre-switch block. Paste not rewritten.
- prior holds: 1203 full kernel closure with all four cases + default; 1202 final lerp alpha 0.05 with new THREE.Vector3; 1201 torus/default tube; 1200 triangular floor snap.

## Enhancement this hop
Holds the major and minor radius calculations prior to geometry evaluation. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1205 — hold theta step (0.01 + idx * 0.002) * gravityPull unread by geometry switch.
2. 1206 — hold uniforms write order uTime then uGravity prior to theta increment.
3. 1207 — hold phi external (unread by theta step and uniforms, used in y and torus).

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
