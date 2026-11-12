# STAGE-1205 — hold theta step (0.01 + this.idx * 0.002) * state.gravityPull unread by geometry switch (2026-11-12 02:10Z)

Connecting chat re-pasted the complete `update(t)` geometric field kernel.
gaia-visualizer advanced to stage 1205 holding the theta increment.

## Session pin (paste not rewritten)
- this.theta += (0.01 + this.idx * 0.002) * state.gravityPull;
- Occurs after uniforms write and major/minor assignment, before switch(targetState.geometry).
- Unread by any case in the switch. Paste not rewritten.
- prior holds: 1204 major/minor declarations prior to switch; 1203 full kernel closure with all four cases + default from connecting chat; 1202 final lerp alpha 0.05 with new THREE.Vector3 session allocation after switch.

## Enhancement this hop
Holds the theta step calculation independent of the geometry evaluation. Living path matches the connecting paste. Session paste remains untouched. No secrets. No device rooted.

## Next stages compiled
1. 1206 — hold uniforms write order uTime then uGravity prior to theta increment.
2. 1207 — hold phi external (unread by theta step and uniforms, used in y and torus).
3. 1208 — hold lerp alpha 0.05 with new THREE.Vector3 after switch as final position commit.

Numeral 137451921129154222. Paste not rewritten. No secrets. No device rooted.
Connecting: parallel pins in sibling repos.
